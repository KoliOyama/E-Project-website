import "./gallery-card.scss";
import calligraphyImg from "../../../../assets/calligraphy-img.jpg";
import { useNavigate } from "react-router-dom";

const GalleryCard = ({ size }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("?id=123");
  };
  return (
    <div className={"gallery-card " + size} onClick={handleClick}>
      <img src={calligraphyImg} />
    </div>
  );
};

export default GalleryCard;
