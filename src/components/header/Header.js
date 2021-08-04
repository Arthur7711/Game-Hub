import { IconButton } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import Language from "../language/Language";
import PersonIcon from "@material-ui/icons/Person";
import s from "./Header.module.css";
import logo from "../../img/logo1.png";


export default function Header() {
  return (
    <header className={s.header}>
      <div>
        <img alt="logo" src={logo} width="50px" />
      </div>
      <nav className={s.navigation}>
        <NavLink to="/">
          <b>Home</b>
        </NavLink>
        <NavLink to="/games">
          <b>Games</b>
        </NavLink>
        <NavLink to="/about">
          <b>About</b>
        </NavLink>
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
