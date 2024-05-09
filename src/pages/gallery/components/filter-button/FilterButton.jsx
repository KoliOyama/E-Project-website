import "./filter-button.scss";

const FilterButton = ({ filter }) => {
  return <button className="filter-button">{filter.title}</button>;
};

export default FilterButton;
