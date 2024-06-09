import React, { useState } from 'react'
import '../scss/SignUp.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



const SignUp = () => {
    const [tel, setTel] = useState('');
    const team = [
        {
            value: 'Production',
            label: '생산',
        },
        {
            value: 'Purchase',
            label: '구매',
        },
        {
            value: 'Sales',
            label: '영업',
        },
    ];

    const position = [
        {
            value: 'Clerk',
            label: '사원',
        },
        {
            value: 'Senior Clerk',
            label: '주임',
        },
        {
            value: 'Assistant Manager',
            label: '대리',
        },
        {
            value: 'Manager',
            label: '과장',
        },
        {
            value: 'Deputy General Manager',
            label: '차장',
        },
        {
            value: 'General Manager',
            label: '부장',
        },
        {
            value: 'Executive Director',
            label: '이사',
        },
        {
            value: 'CEO',
            label: '대표이사',
        },
    ]

    const handlePhoneNumberChange = (event) => {
        const { value } = event.target;
        const formattedValue = value.replace(/\D/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
        setTel(formattedValue);
      };

    return (
        <>
            <div className='contanior'>
                <div className='box1'>
                </div>
                <h1>사원 등록</h1>
                <div className='box2'>
                    <TextField id="id" label="아이디" variant="outlined" className='idBox' />
                </div>
                <div className='box3'>
                    <TextField id="password" label="비밀번호" variant="outlined" className='idBox' type='password' />
                </div>
                <div className='box4'>
                    <TextField id="eno" label="사원번호" variant="outlined" className='idBox' />
                </div>
                <div className='box5'>
                    <TextField id="name" label="이름" variant="outlined" className='idBox' />
                </div>
                <div className='box6'>
                    <TextField
                        id="Department"
                        select
                        label="부서"
                        className='idBox'
                    >
                        {team.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}
                                className='menu'
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className='box7'>
                    <TextField
                        id="position"
                        select
                        label="직급"
                        className='idBox'
                    >
                        {position.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className='box8'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker
                                className='dateBox'
                                label="입사일자" />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
                <div className='box9'>
                    <TextField 
                    id="tel" 
                    label="연락처" 
                    variant="outlined" 
                    className='idBox' 
                    type='tel'
                    onChange={handlePhoneNumberChange}
                    value={tel}
                    InputProps={{inputProps: {maxLength: 11}}}
                    />
                </div>
                <div className='box10'>
                    <TextField id="email" label="이메일" variant="outlined" className='idBox' type='email' />
                </div>
                <div>
                    <Button
                        className='signUpButton'
                        type='submit'
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}>등록</Button>
                </div>
            </div>
        </>
    )
}

export default SignUp