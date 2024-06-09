import React from 'react'
import '../../scss/ui/SideBar.scss';

const SideBar = () => {
  const path = window.location.pathname;
  if (path === '/' || path === '/signUp') return null;
  return (
    <div className='containor1'>
      <div className='box1'>
        <p>마이페이지</p>
      </div>
      <div className='box1'>
        <p>제품 등록</p>
      </div>
      <div className='box1'>
        <p>제품 현황</p>
      </div>
      <div className='box1'>
        <p>BOM 등록</p>
      </div>
      <div className='box1'>
        <p>BOM 현황</p>
      </div>
      <div className='box1'>
        <p>구매처 등록</p>
      </div>
      <div className='box1'>
        <p>구매처 관리</p>
      </div>
      <div className='box1'>
        <p>발주 등록</p>
      </div>
      <div className='box1'>
        <p>발주 현황</p>
      </div>
      <div className='box1'>
        <p>재고 등록</p>
      </div>
      <div className='box1'>
        <p>재고 현황</p>
      </div>
      <div className='box1'>
        <p>판매 등록</p>
      </div>
      <div className='box1'>
        <p>판매 현황</p>
      </div>
    </div>
  )
}

export default SideBar;