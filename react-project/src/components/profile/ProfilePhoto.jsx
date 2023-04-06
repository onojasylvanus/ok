import React from 'react'
import IMG from '../picture/syl.jpg'

const ProfilePhoto = () => {
  return (
    <div>
        <img src={IMG} alt='IMAGE OF IMG' style={{width: 250, height:300}}/>
    </div>
  )
}

export default ProfilePhoto