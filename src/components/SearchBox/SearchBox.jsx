//SearchBox.jsx
import { changeFilter } from "../../redux/filters/slice";
import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const onChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={css.searchContainer}>
      Find contacts by name
      <input
        className={css.inputSearch}
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </label>
  );
};

export default SearchBox;