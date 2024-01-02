import React from "react";
import "./header.css";
import NavListItem from "../components/NavListItem";
import navListData from "../data/navListData";
import Search from "../components/Search";

const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        Cinema
      </a>
      <ul className="nav">
        {navListData.map((item) => (
          <NavListItem key={item.id} item={item} />
        ))}
      </ul>
      <Search />
    </header>
  );
};

export default Header;
