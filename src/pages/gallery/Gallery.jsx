import "./gallery.scss";
import searchIcon from "../../assets/SearchOutline.svg";
import GallerySort from "./components/sort/GallerySort";
import FilterButton from "./components/filter-button/FilterButton";
import GalleryGrid from "./components/gallery-grid/GalleryGrid";
import DetailsModal from "./components/details-modal/DetailsModal";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { RiNumbersFill } from "react-icons/ri";
import SkeletonLoader from "./components/skeleton-loader/SkeletonLoader";

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
  const { isPending, isSuccess, data, isError, error } = useQuery({
    queryFn: async () => {
      const colRef = collection(db, "calligraphy");
      const snapshot = await getDocs(colRef);
      const data = [];

      snapshot.docs.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
      return data;
    },
    queryKey: ["calligraphy"],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCalligraphy, setActiveCalligraphy] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const id = searchParams.get("id");
    if (id && isSuccess) {
      const calligraphy = data.find((doc) => doc.id === id);
      setActiveCalligraphy(calligraphy);
      openModal();
    } else {
      closeModal();
    }
  }, [searchParams, isSuccess, data]);

  useEffect(() => {
    if (searchValue) {
      const results = data?.filter(
        (doc) =>
          doc.title.toLowerCase().indexOf(searchValue.toLowerCase()) != -1
      );
      setResults(results);
    } else {
      setResults(null);
    }
  }, [searchValue]);
  return (
    <main className="gallery">
      <h1>Gallery</h1>
      <search className="gallery__search">
        <input
          type="search"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchChange}
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
        {isSuccess && <GalleryGrid data={results || data} />}
        {isPending && <SkeletonLoader />}
      </section>
      {isModalOpen && activeCalligraphy && (
        <DetailsModal calligraphy={activeCalligraphy} />
      )}
    </main>
  );
};

export default Gallery;
