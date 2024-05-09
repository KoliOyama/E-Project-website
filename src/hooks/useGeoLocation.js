import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

// GeoLocation api:  https://nominatim.openstreetmap.org/reverse?lat=<value>&lon=<value>&<params>
export const useGeoLocation = () => {
  const [position, setPosition] = useState(null);
  const [denied, setDenied] = useState(false);
  const { data, isPending, isSuccess, isError, refetch, error } = useQuery({
    queryKey: ["location"],
    queryFn: async () => {
      let res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=jsonv2`
      );

      res = await res.json();

      return res;
    },
    enabled: false,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setPosition(position);
      },
      () => {
        setDenied(true);
      }
    );
  }, []);

  useEffect(() => {
    if (position) {
      refetch();
    }
  }, [position]);

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }

    if (isError) {
      console.error(error);
    }
  }, [isSuccess, isError]);

  return { data, isSuccess, isError, isPending, error, denied };
};
