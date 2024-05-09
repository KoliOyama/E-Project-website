import "./gallery.scss";
import searchIcon from "../../assets/SearchOutline.svg";
import GallerySort from "./components/sort/GallerySort";
import FilterButton from "./components/filter-button/FilterButton";
import GalleryGrid from "./components/gallery-grid/GalleryGrid";
import DetailsModal from "./components/details-modal/DetailsModal";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// array of filters that the calligraphy can be sorted by.
const FILTERS = [
  {
    title: "Default",
    value: "",
  },
  {
    title: "Western calligraphy",
    value: "western-calligraphy",
  },
  {
    title: "Chinese calligraphy",
    value: "chinese-calligraphy",
  },
  {
    title: "Brush pen",
    value: "brush-pen",
  },
  {
    title: "Arabic calligraphy",
    value: "arabic-calligraphy",
  },
  {
    title: "Broad edge",
    value: "broad-edge",
  },
];

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const id = searchParams.get("id");

    if (id) {
      openModal();
    } else {
      closeModal();
    }
  }, [searchParams]);
  return (
    <main className="gallery">
      <h1>Gallery</h1>
      <search className="gallery__search">
        <input
          type="search"
          placeholder="Search"
          style={{ backgroundImage: `url(${searchIcon})` }}
        />
        <GallerySort />
      </search>
      <div className="gallery__filters">
        {FILTERS.map((filter) => (
          <FilterButton filter={filter} />
        ))}
      </div>
      <section className="gallery__main">
        <GalleryGrid />
      </section>
      {isModalOpen && <DetailsModal close={closeModal} />}
    </main>
  );
};

export default Gallery;
