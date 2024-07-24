import { useContext, ReactElement } from "react";
import { SearchContext } from "../context/SearchContext";

function SearchCardInput(): ReactElement {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <input
      type="search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Card name"
    />
  );
}

export default SearchCardInput;
