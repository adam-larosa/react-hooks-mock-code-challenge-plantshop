
   
import React from "react";

function Search({ changeSearchValue }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."

        onChange={changeSearchValue}

      />
    </div>
  );
}

export default Search;
