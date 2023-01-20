import React, { useState } from "react";
import classes from "./RideItem.module.css"
import { useSelector } from "react-redux"
import uuid from "react-uuid"
import {Typography, Rating } from '@mui/material';

const RideItem = () => {
  const rideList = useSelector((state) => state.rideList)
  

  
  const rideListDisplay = rideList.map((rideItem, index) => {
    console.log("rideItem",rideItem)
    return (
        <div className={classes.card} key={uuid()}> 
         <img src={rideItem.imageUrl} alt="No Image" />       
         <ul >
         <li>Date: {rideItem.date}</li>
         
         <li>Time: {rideItem.time}</li>
         
         <li>Distance: {rideItem.distance}</li>

         <li>Duration: {rideItem.totaltime}</li>
         
         <li>Location: {rideItem.location}</li>
         
         <li>{rideItem.description}</li>
         </ul>   
         <Typography component="legend"></Typography>
          <Rating
            name="read-only"
            value={rideItem.rating}
            readOnly
          />
          
        </div>
      
        
      

    )
  })

  return (
    <div>
      {rideListDisplay}
    </div>
   
  );
};
export default RideItem;
