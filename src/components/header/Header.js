import { IconButton } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import Language from "../language/Language";
import PersonIcon from "@material-ui/icons/Person";
import s from "./Header.module.css";
import logo from "../../img/lg.png";

export default function Header() {
  return (
    <header className={s.header}>
      <div>
        <img alt="logo" src={logo} width="40px" />
      </div>
      <nav className={s.navigation}>
        <b>
          <NavLink exact to="/" activeClassName={s.selected}>
            Home
          </NavLink>
        </b>
        <b>
          <NavLink to="/games" activeClassName={s.selected}>
            Games
          </NavLink>
        </b>
        <b>
          <NavLink to="/about" activeClassName={s.selected}>
            About
          </NavLink>
        </b>
      </nav>
      <div className={s.icons}>
        <Language />
        <IconButton>
          <PersonIcon className={s.icon} />
          <NavLink to="/register">Log In</NavLink>
        </IconButton>
      </div>
    </header>
  );
}
