import { useState, useEffect } from "react";
import emoticones from "../emoticones.json";

function SearchBar({ searchResult, setSearchResult }) {
  const [searchParameter, setSearchParameter] = useState("");
  useEffect(() => {
    if (searchParameter != "") {
      const searchArray = [];
      emoticones.map((item) => {
        if (item.keywords.includes(searchParameter)) {
          searchArray.push(item);
        }
      });
      setSearchResult(searchArray);
    } else {
      setSearchResult(emoticones);
    }
  }, [searchParameter]);

  return (
    <div>
      <input
        type="text"
        value={searchParameter}
        onChange={(e) => setSearchParameter(e.target.value)}
      />
    </div>
  );
}
export default SearchBar;
