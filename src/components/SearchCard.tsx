import { ReactElement } from "react";
import SearchCardInput from "./SearchCardInput";
import SearchCardList from "./SearchCardList";

function SearchCard(): ReactElement {
  return (
    <>
      <h1>Search Card</h1>
      <SearchCardInput />
      <SearchCardList />
    </>
  );
}

export default SearchCard;
