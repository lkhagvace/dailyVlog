import "@/styles/globals.css";
import { SearchProvider } from "@/context/SearchContext";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </div>
  );
}
