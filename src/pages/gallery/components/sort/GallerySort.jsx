import "./gallery-sort.scss";
import { CgSortZa } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

const GallerySort = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="gallery-sort">
      <button
        className="gallery-sort__trigger"
        onClick={() => setOpen((prev) => !prev)}
      >
        <CgSortZa size={24} className="icon" />
        <span>Oldest</span>
        <MdOutlineKeyboardArrowDown
          size={20}
          className="icon"
          style={open ? { transform: "rotate(180deg)" } : undefined}
        />
      </button>
      <div className={"gallery-sort__popup " + (open ? "open" : "closed")}>
        <button className="gallery-sort__select-button">
          <span>Newest</span>
          <FaCheck size={14} className="not-selected" />
        </button>
        <button className="gallery-sort__select-button">
          <span>Oldest</span>
          <FaCheck size={14} className="selected" />
        </button>
      </div>
    </div>
  );
};

export default GallerySort;
