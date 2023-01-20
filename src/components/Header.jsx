import React from "react";
import classes from "./Header.module.css"
import Image from "../images/cycling.png"

const Header = () => {
  return (
    <div className={classes.container}>
      <img src={Image} alt="Cycling Header" className={classes.image} />
      <h1>Cycling Log</h1>
      <img src={Image} alt="Cycling Header" className={classes.image} />
      
    </div>
  );
};
export default Header;
