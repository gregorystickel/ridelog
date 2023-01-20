import React, { useState, useRef } from "react";
import classes from "./PopupForm.module.css"
import { useSelector, useDispatch } from "react-redux"
import { uuid } from "react-uuid";
import {Typography, Rating } from '@mui/material';

function PopupForm() {
  const [value, setValue] = useState(0)
  const [isOpen, setIsOpen] = useState(false);
  const rideList = useSelector((state) => state.rideList)
  const dispatch = useDispatch();
  const dateRef = useRef();  
  const distanceRef = useRef();
  const startTimeRef = useRef();
  const endTimeRef= useRef();
  const locationRef = useRef();
  const descriptionRef= useRef();
  const imageUrlRef = useRef();
  

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const [hours1, minutes1] = startTimeRef.current.value.split(":").map(Number);
    const [hours2, minutes2] = endTimeRef.current.value.split(":").map(Number);
    const minutes1Total = hours1 * 60 + minutes1
    const minutes2Total = hours2 * 60 + minutes2
    const duration = Math.abs(minutes2Total-minutes1Total)

    dispatch({
        type: "ADDRIDE",
        payload: {
          id: uuid,
          imageUrl: imageUrlRef.current.value,
          date: dateRef.current.value,
          distance: distanceRef.current.value,
          starttime: startTimeRef.current.value,
          endtime: endTimeRef.current.value,
          location: locationRef.current.value,
          description: descriptionRef.current.value,
          totaltime: duration,
          rating: value
          
        },
      });
    console.log(dateRef.current.value,distanceRef.current.value,startTimeRef.current.value,locationRef.current.value,descriptionRef.current.value)
    console.log("rideListSate",rideList)
    console.log("Form submitted!");
    handleClose();
  };

  return (
    <div className={classes.container}>
      <button onClick={handleOpen}>Open Form</button>
      {isOpen && (
        <div >
          <h1>Enter Ride</h1>  
          <Typography className={classes.rating}component="legend">Rating</Typography>
          <Rating className={classes.rating}
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }} />
          <form onSubmit={handleSubmit} className={classes.popupForm}  id="rideForm">
            <label for="url">Enter Image Url</label>
            <input type="url" name="imageurl" id="imageurl" name="url" ref={imageUrlRef} />
            <input type="date" placeholder="date" ref={dateRef}/>
            <input type="number" placeholder="distance"  ref={distanceRef}/>
            
            <label for="startTime">Enter Start Time:</label>
            <input type="time" placeholder="time" name="startTime"ref={startTimeRef}/>
            <label for="endTime">Enter End Time:</label>
            <input type="time" placeholder="time" ame="endTime"ref={endTimeRef}/>
            
            <input type="text" placeholder="location" ref={locationRef}/>
            
            <textarea name="description" id="" cols="30" rows="10" placeholder="description" ref={descriptionRef}></textarea>
            <button type="submit" className={classes.center}>Send</button>
            <button onClick={handleClose} className={classes.center}>Close</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default PopupForm;





