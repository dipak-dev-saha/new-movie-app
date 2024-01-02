import React from "react";
import "./navListItem.css";

const NavListItem = ({ item }) => {
  return (
    <li>
      <a href={item.link}>{item.name}</a>
    </li>
  );
};

export default NavListItem;
