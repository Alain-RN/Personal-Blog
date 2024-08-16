import React, { useState } from 'react'

function Notification() {
  const [notifNumber, setNotifNumber] = useState(2)
  return (
    <div className='text-secondary px-4 py-3'>
      <div className='headerOfNotif pt-2 d-flex align-items-center justify-content-center gap-3'>
        <h4 className='text-white'>Notifications</h4>
        <span className='nbrNotif bg-primary text-white'>{notifNumber}</span>
      </div>
      <hr />
      {(notifNumber == 0) ? <p>No notifications .</p> :
        <div className="allNotif pb-1 px-2 ">
          <div className="notifItem ">
            <span className="userNotif ">User 1</span> like your comment
            <br />
            <span>1 day ago</span>
          </div>
          <div className="notifItem">
            <span className='adminNotif'>The administrator</span> has added new content.
            <br />
            <span>4 days ago</span>
          </div>
          <div className="notifItem">
          <span className="userNotif">User 2</span> has replay on your comment
            <br />
            <span>4 days ago</span>
          </div>
        </div>
      }
    </div>
  )
}

export default Notification