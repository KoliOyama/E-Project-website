import "./gallery-grid.scss";
import GalleryCard from "../gallery-card/GalleryCard";

const CARD_SIZES = ["card-sm", "card-md", "card-lg"];

const GalleryGrid = ({ data }) => {
  return (
    <div className="gallery-grid">
      {data.map((doc, index) => (
        <GalleryCard
          size={index % 2 == 0 ? CARD_SIZES[0] : CARD_SIZES[1]}
          calligraphy={doc}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;
