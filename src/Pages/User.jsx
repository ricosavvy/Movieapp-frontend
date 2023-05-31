import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { setWatchLater } from '../state'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// window.scrollTo(0,0)
const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)
  const token = useSelector((state) => state.token)
  const[watchlists, setWatchlist] = useState([]);
  const watchArray = watchlists.watchlist;

  const watchLaterList = () => {
  fetch(`https://movieapp-backend-production-a4be.up.railway.app/api/watchlist/${user._id}`, {
    method: 'GET',
    headers: {
       Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://localhost:3000'
    },
  })
  .then(response => response.json())
  .then(data => {setWatchlist(data)
    dispatch(setWatchLater({
      watchlater: watchlists,})
      )
  const element = document.getElementById('wll');
  element.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
})
  .catch(error => {
    console.log(error)
  })
}

  return (
    // <div className='overlay'>
    //   <h2>`Welcome: ${user.username}`</h2>
    //   <div className="names">
    //     <h3 className="fname">{user.firstName}</h3><h3 className="fname">{user.lirstName}</h3>
    //   </div>
    // </div>
    <>
    <div className='overlay'>
      <h2 id='Welcome_text'>Welcome <span style={{color: 'yellow'}}>{user.username}</span></h2>
      <br />
      <div className="like_btn">
              <button id='smtbtns' type="submit" value={true} onClick={watchLaterList}> 
               My Watchlater <ArrowDownwardIcon/>
              </button>
       </div>
        {/* {
            watchlist.map(fdbk => (
              <div className="reviews">
                <div className='Review'>
                  <Typography variant='subtitle2'>{fdbk.name}</Typography>
                </div>
              </div>
            ))
          }

       {/* {console.log(watchlist)} */}
       </div>

       <div className="wl" id='wll'>

        {
              (Array.isArray(watchArray) ?
                watchArray.map(fdbk => (
                  <Link style={{textDecoration: 'none', color:'white'}} to={`/movie/${fdbk.movieId}`}>
                  <div className="watchlater">
                    <div className='watchlater_movie'>
                      <Typography variant='subtitle2'>{fdbk.movieName}</Typography>
                    </div>
                  </div>
                  </Link>
                  // console.log(fdbk.movieName)
                )) : " "
              )
              // console.log(watchArray)
        }
       </div>
      
    </>
  )
}

export default User
