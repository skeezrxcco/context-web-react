import { useState, useEffect, useContext, ReactElement } from "react";
import { SearchContext } from "../context/SearchContext";
import SearchCardListItem from "./SearchCardListItem";

interface Card {
  id: string;
  name: string;
}

function SearchCardList(): ReactElement {
  const { search } = useContext(SearchContext);
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    if (search) {
      fetch(
        `https://api.magicthegathering.io/v1/cards?name=${search}&pageSize=10`
      )
        .then((response) => response.json())
        .then((data) => setCards(data.cards))
        .catch((error) => console.error("Error fetching cards:", error));
    }
  }, [search]);

  return (
    <ul>
      {cards?.map((card) => (
        <SearchCardListItem key={card.id} card={card} />
      ))}
    </ul>
  );
}

export default SearchCardList;
