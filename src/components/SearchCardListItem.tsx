import { ReactElement } from "react";

interface Card {
  id: string;
  name: string;
}

function SearchCardListItem({ card }: { card: Card }): ReactElement {
  return <li>{card.name}</li>;
}

export default SearchCardListItem;
