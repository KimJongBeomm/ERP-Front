import React from 'react'
import '../scss/UserModify.scss';
import TextField from '@mui/material/TextField';

const UserModify = () => {
  return (
    <div className='UserModify'>
        <img src={process.env.PUBLIC_URL + `/profile.png`} alt='프로필'/>
        <div className='modifyBox1'>
        <TextField id="userid" label="아이디" variant="outlined" className='userBox1'/>
        </div>
        <div className='modifyBox2'>
        <TextField id="password" label="비밀번호" variant="outlined" className='userBox2' type='password'/>
        </div>
    </div>
  )
}

export default UserModify