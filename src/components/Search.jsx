import React from "react";
import "./search.css";
import { CiSearch } from "react-icons/ci";

function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search" />
      <CiSearch  className="icon"/>
    </div>
  );
}

export default Search;
