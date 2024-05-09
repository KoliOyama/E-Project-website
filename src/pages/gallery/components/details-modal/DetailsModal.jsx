import "./details-modal.scss";
import calligraphyImg from "../../../../assets/calligraphy-img.jpg";
import { PiHeartStraight } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import CommentCard from "../comment-card/CommentCard";
import { useNavigate } from "react-router-dom";

const DetailsModal = ({ close }) => {
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
          <img src={calligraphyImg} />
        </div>
        <div className="details__text-container">
          <div>
            <h3>Chinese Calligraphy</h3>
            <p>
              Clerical Script: Clerical script evolved from Seal Script and is
              more streamlined. It was commonly used for official documents
              during the Han dynasty
            </p>
          </div>
          <div className="details__comments-container">
            <div className="details__comments-header">
              <h4>Comments</h4>
              <MdOutlineKeyboardArrowDown size={20} className="icon" />
            </div>
            <div className="details__comments">
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
            </div>
          </div>
          <div className="details__foot">
            <div className="details__likes">
              <span>10</span>
              <div className="circle">
                <PiHeartStraight size={14} />
              </div>
            </div>

            <form className="details__comments-form">
              <input placeholder="Add a comment" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
