//SearchBox.jsx
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const useFilterValue = () => useSelector(selectNameFilter);

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useFilterValue();

  const handleChange = (e) => {
    const filterValue = e.target.value;

    dispatch(changeFilter(filterValue));
  };

  return (
    <label className={css.searchContainer}>
      Find contacts by name
      <input
        className={css.inputSearch}
        type="text"
        value={nameFilter}
        onChange={handleChange}
      />
    </label>
  );
}

export default SearchBox;
