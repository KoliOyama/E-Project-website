import "./gallery-grid.scss";
import calligraphyImg from "../../../../assets/calligraphy-img.jpg";
import calligraphyImg2 from "../../../../assets/western calligraphy1.jpg";
import GalleryCard from "../gallery-card/GalleryCard";

const CARD_SIZES = ["card-sm", "card-md", "card-lg"];

const GalleryGrid = () => {
  return (
    <div className="gallery-grid">
      <GalleryCard size={CARD_SIZES[0]} />
      <GalleryCard size={CARD_SIZES[1]} />
      <GalleryCard size={CARD_SIZES[0]} />
      <GalleryCard size={CARD_SIZES[1]} />
      <GalleryCard size={CARD_SIZES[0]} />
      <GalleryCard size={CARD_SIZES[1]} />
      <GalleryCard size={CARD_SIZES[0]} />
      <GalleryCard size={CARD_SIZES[1]} />
    </div>
  );
};

export default GalleryGrid;
