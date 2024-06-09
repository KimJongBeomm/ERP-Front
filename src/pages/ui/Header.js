import React from 'react'
import '../../scss/ui/Header.scss';
const Header = () => {
    const path = window.location.pathname;
    if (path === '/' || path === '/signUp') return null;
  return (
    <div className='containor'>
        <div className='logoBox'>
            COFFE
        </div>
        <p className='logout'>로그아웃</p>
        <p className='signUp'>사원등록</p>
    </div>
  )
}

export default Header