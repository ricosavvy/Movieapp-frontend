import React from 'react'
// import { Typography } from '@mui/material/styles/createTypography'
import { Typography } from '@mui/material'

const Footer = () => {
  return (
    <div>
      <Typography variant='subtitle 2' 
      style={{display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#000000', color:'white', height:'10vh'}}>
      &copy; Javascript Paradigms Crew
      </Typography>
    </div>
  )
}

export default Footer
