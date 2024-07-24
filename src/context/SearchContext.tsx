import { createContext, useState, ReactNode, ReactElement } from "react";

interface SearchContextProps {
  search: string;
  setSearch: (search: string) => void;
}

export const SearchContext = createContext<SearchContextProps>({
  search: "",
  setSearch: () => {},
});

export const SearchProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [search, setSearch] = useState<string>("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
