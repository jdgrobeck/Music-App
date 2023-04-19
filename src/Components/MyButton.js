import React from 'react'
import Button from "@mui/material/Button"
export default function myButton() {

  // const handleClick = () => {
  //   console.log("Clicked")
  // }
  return (
    <div>
    <Button variant="text" onClick={() => console.log("clicked")}>Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
    </div>
  )
}
