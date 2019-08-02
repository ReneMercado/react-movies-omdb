import React from "react";
import "./navbar.scss";

const Navbar = props => {
  return (
    <div className="navbar">
      <div className="navbar__title">OMDB</div>
      <div className="navbar__search">
        <input
          className="navbar__search__inputSearch"
          type="text"
          onChange={e => props.onChangeSearch(e)}
          placeholder="Search.."
          name="search2"
        />
      </div>
    </div>
  );
};

export default Navbar;
