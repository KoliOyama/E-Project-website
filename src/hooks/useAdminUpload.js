import { useMutation } from "@tanstack/react-query";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect } from "react";
import { db, storage } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";

export const useAdminUpload = () => {
  const { isPending, isSuccess, isError, data, mutate, error } = useMutation({
    mutationFn: async (data) => {
      const imageRef = ref(storage, data.image.name);

      await uploadBytes(imageRef, data.image);
      const imageUrl = await getDownloadURL(imageRef);

      const calligraphy = {
        ...data,
        image: imageUrl,
        reviews: [],
      };

      const colRef = collection(db, "calligraphy");

      const docRef = await addDoc(colRef, calligraphy);

      return docRef;
    },
  });

  useEffect(() => {
    if (isError) {
      console.error(error);
    }
    if (isSuccess) {
      console.log(data);
    }
  }, [isError, isSuccess]);

  return { isPending, isSuccess, isError, data, upload: mutate };
};
