import React from 'react'
import './Footer.css'
import Image from "../../../assets/Home/shape-bg.png"
export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-parent'>
            <img src={Image} 
            alt='no internet connection' />
        </div>
    </div>
  )
}
