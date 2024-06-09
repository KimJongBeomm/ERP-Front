import React from 'react'
import '../scss/SignIn.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const SignIn = () => {
  return (
    <>
    <div className='contanior'>
        <div className='box1'>
        </div>
        <div className='logoBox'>
            COFFE
        </div>
        <h1>로그인</h1>
        <div>
        <TextField id="outlined-basic" label="아이디" variant="outlined" className='idBox'/>
        </div>
        <div>
        <TextField id="outlined-basic" label="비밀번호" variant="outlined" className='passwordBox'/>
        </div>
        <div>
            <Button
            className='loginButton'
            type='submit'
            variant='contained'
            sx={{mt: 3, mb: 2}}>로그인</Button>
        </div>
    </div>
    </>
  )
}
