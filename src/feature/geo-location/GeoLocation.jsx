import { useEffect, useState } from "react";
import "./geo-location.scss";
import { useGeoLocation } from "../../hooks/useGeoLocation";

const GeoLocation = () => {
  const { data, isSuccess } = useGeoLocation();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setDate(date);
    }, 2000);

    return () => clearTimeout(interval);
  }, []);

  return (
    <div className="geo-location">
      <span>
        {String(date.getDate()).padStart(2, "0")}.
        {String(date.getMonth() + 1).padStart(2, "0")}.
        {String(date.getFullYear()).padStart(2, "0")}
      </span>
      <span>
        {String(date.getHours()).padStart(2, "0")}:
        {String(date.getMinutes()).padStart(2, "0")}
      </span>
      {isSuccess && (
        <span>
          {data.address.state}, {data.address.country}
        </span>
      )}
    </div>
  );
};

export default GeoLocation;
