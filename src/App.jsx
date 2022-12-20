import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import EmojiCard from "./components/EmojiCard";
import "./App.css";
import emoticones from "./emoticones.json";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchResult={searchResult}
        setSearchResult={setSearchResult}
      />
      <section id="searchResult">
        {searchResult.map((element, index) => (
          <EmojiCard props={element} key={index} />
        ))}
      </section>
    </div>
  );
}

export default App;
