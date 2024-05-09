import "./comment-card.scss";

const CommentCard = ({ review }) => {
  return (
    <div className="comment-card">
      <div className="comment-card__user">A</div>
      <p className="comment-card__details">{review}</p>
    </div>
  );
};

export default CommentCard;
