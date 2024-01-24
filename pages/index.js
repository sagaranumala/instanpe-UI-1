import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import ImageSlider from './components/ImageSlider'


const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  

  return (
    <div className={styles.main}>
        <ImageSlider/>
    </div>
  );
}

{/* <header className="App-header">
        <div
          className="menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>Dropdown Menu</span>
           <DropdownMenu />
          {isDropdownVisible && DropdownMenu()}
        </div>
      </header> 
    */}