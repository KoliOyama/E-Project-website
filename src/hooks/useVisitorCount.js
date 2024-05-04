import {
  IsRestoringProvider,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";

export const useVisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const visitorsRef = doc(db, "visitors", "count");
  console.log(visitorsRef);

  const { isPending, mutate } = useMutation({
    mutationFn: async (number) => {
      await setDoc(visitorsRef, { number });
    },
  });

  useEffect(() => {
    const unsubscribe = onSnapshot(visitorsRef, (doc) => {
      const { number } = doc.data();
      setVisitorCount(number);

      const hasVisited = localStorage.getItem("has_visited");

      if (!hasVisited) {
        mutate(number + 1);
        localStorage.setItem("has_visited", true);
      }
    });

    return unsubscribe;
  }, []);

  return { visitorCount, isPending };
};
