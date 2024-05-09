import { useEffect, useState } from "react";
import "./add-comment.scss";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../../query/react-query";

const AddComment = ({ calligraphy }) => {
  const {
    isSuccess,
    isPending,
    isError,
    error,
    mutate: addReview,
  } = useMutation({
    mutationFn: async ({ id, review }) => {
      console.log(id);
      const docRef = doc(db, "calligraphy", id);

      console.log(docRef);
      await updateDoc(docRef, {
        reviews: arrayUnion(review),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["calligraphy"] });
    },
  });

  const [review, setReview] = useState("");

  const handleChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview({ id: calligraphy.id, review });
  };

  useEffect(() => {
    if (isSuccess) {
      console.log("We homefree hombre");
      setReview("");
    }
    if (isError) {
      console.error(error);
    }
  }, [isSuccess, isError]);
  return (
    <form className="add-comment" onSubmit={handleSubmit}>
      <input
        placeholder="Add a comment"
        name="review"
        value={review}
        onChange={handleChange}
        disabled={isPending}
      />
    </form>
  );
};

export default AddComment;
