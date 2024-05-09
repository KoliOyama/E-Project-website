import "./gallery-card.scss";
import calligraphyImg from "../../../../assets/calligraphy-img.jpg";
import { useNavigate } from "react-router-dom";

const GalleryCard = ({ size, calligraphy }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`?id=${calligraphy.id}`);
  };
  return (
    <div className={"gallery-card " + size} onClick={handleClick}>
      <img src={calligraphy.image} />
    </div>
  );
};

export default GalleryCard;
