import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import { IconButton } from "@material-ui/core";
import s from './Language.module.css'


export default function Language() {
  return (
    <>
      <IconButton>
        <LanguageIcon className={s.icon} />
      </IconButton>
    </>
  );
}
