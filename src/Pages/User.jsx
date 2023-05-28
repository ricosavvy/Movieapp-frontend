import React from 'react'
import { useSelector } from 'react-redux'
import state from '../state'

const User = () => {
  const user = useSelector((state) => state.user)
  return (
    // <div className='overlay'>
    //   <h2>`Welcome: ${user.username}`</h2>
    //   <div className="names">
    //     <h3 className="fname">{user.firstName}</h3><h3 className="fname">{user.lirstName}</h3>
    //   </div>
    // </div>
    <div className='overlay'>
      <h2 id='Welcome_text'>Welcome <span style={{color: 'yellow'}}>{user.username}</span></h2>
      {/* <div className="names">
        <h3 className="fname">Patrick</h3><h3 className="fname">Lungu</h3>
      </div> */}
    </div>
  )
}

export default User
