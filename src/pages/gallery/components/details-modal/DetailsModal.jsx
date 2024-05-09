import "./details-modal.scss";
import calligraphyImg from "../../../../assets/calligraphy-img.jpg";
import { PiHeartStraight } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import CommentCard from "../comment-card/CommentCard";
import { useNavigate } from "react-router-dom";
import AddComment from "../add-comment/AddComment";

const DetailsModal = ({ calligraphy }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (e.target.id == "outside-box") {
      navigate("/gallery");
    }
  };
  return (
    <div className="details" id="outside-box" onClick={handleClick}>
      <div className="details__modal">
        <div className="details__img-container">
          <img src={calligraphy.image} />
        </div>
        <div className="details__text-container">
          <div>
            <h3>{calligraphy.title}</h3>
            <p>{calligraphy.description}</p>
          </div>
          <div className="details__comments-container">
            <div className="details__comments-header">
              <h4>Comments</h4>
              <MdOutlineKeyboardArrowDown size={20} className="icon" />
            </div>
            <div className="details__comments">
              {calligraphy.reviews.map((review) => (
                <CommentCard review={review} />
              ))}
            </div>
          </div>
          <div className="details__foot">
            <div className="details__likes">
              <span>10</span>
              <div className="circle">
                <PiHeartStraight size={14} />
              </div>
            </div>

            <AddComment calligraphy={calligraphy} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
