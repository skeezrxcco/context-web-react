import { AppProps } from "next/app";
import { SearchProvider } from "../context/SearchContext";
import { ReactElement } from "react";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <SearchProvider>
      <Component {...pageProps} />
    </SearchProvider>
  );
}

export default MyApp;
