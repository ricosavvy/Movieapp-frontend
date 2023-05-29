import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import state from '../state'

const User = () => {
  const user = useSelector((state) => state.user)
  const token = useSelector((state) => state.token)
  const[watchlist, setWatchlist] = useState([]);
  fetch(`https://movieapp-backend-production-a4be.up.railway.app/api/watchlist/${user._id}`, {
    method: 'GET',
    headers: {
       Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://localhost:3000'
    },
  })
  .then(response => {
    console.log(response.json())
  })
  .then(data => setWatchlist(data))
  .catch(error => {
    console.log(error)
  })
  return (
    // <div className='overlay'>
    //   <h2>`Welcome: ${user.username}`</h2>
    //   <div className="names">
    //     <h3 className="fname">{user.firstName}</h3><h3 className="fname">{user.lirstName}</h3>
    //   </div>
    // </div>
    <div className='overlay'>
      <h2 id='Welcome_text'>Welcome <span style={{color: 'yellow'}}>{user.username}</span></h2>
      <div className="wl">
        {
            watchlist.map(fdbk => (
              <div className="reviews">
                <div className='Review'>
                  <Typography variant='subtitle2'>{fdbk.name}</Typography>
                </div>
              </div>
            ))
          })
      </div>
      
    </div>
  )
}

export default User
