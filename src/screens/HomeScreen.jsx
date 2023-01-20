import React, { useState } from "react";
import classes from "./HomeScreen.module.css"
import RideItem from "../components/RideItem";

import PopupForm from "../components/PopupForm";

const Header = () => {
  
 

  return (
    <div className={classes.container} >
      <PopupForm />
      <RideItem />
      
    </div>
  );
};

export default Header;
