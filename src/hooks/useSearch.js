import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const useSearch = () => {
    const object = useContext(SearchContext);

    if (object === undefined) throw new Error('useSearch() must be used inside the provider!');
    return object;
}

export default useSearch