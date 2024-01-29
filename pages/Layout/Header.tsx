import React,{useState} from 'react'
import Link from 'next/link'
import {signIn,signOut,useSession} from "next-auth/react"
import styles from '../../styles/Navbar.module.css'

export default function Header() {
    console.log(process.env.GOOGLE_ID);
     const { data: session, status } = useSession()
     console.log(status)


  return (
    <div className={styles.header}>
      
        <div className={styles.logoContainer}>
          {/* <h1 className={styles.logo1}>
             <span className={styles.text0}>in</span>stanpe
           </h1> */}
          <img src="/instanpe-logo.png" alt="Italian Trulli"/>
        </div>
      
       <div className={styles.headerRight}>
        <div className={styles.mainNav}>
            <h2>{session?.user?.email}</h2>
            <div>
                <Link href='/'>
                <div class="dropdown">
                  <span className={styles.nav}>Home</span>
                    <div className='dropdown-content'>
                       <span>Link 1</span>
                       <span>Link 2</span>
                       <span>Link 3</span>
                   </div>
                </div> 
                </Link>
            </div>
            <div>
                <Link href='/pages/product'>
                    <div className={styles.nav}>Product</div> 
                </Link>
            </div>
            <div>
                <Link href='/pages/company'>
                <div className={styles.nav}>Company</div>
                </Link>
            </div>
            <div>
                <Link href='/pages/resources'>
                   <div className={styles.nav}>Resources</div>
                </Link>
            </div>
            <div>
                <Link href='/pages/contact'>
                <div className={styles.nav}>Contact Us</div>
                </Link>
            </div>
            
        </div>
        <div>
               <button  class="hero-btn1">
                Sign Up 
               </button>
            </div>
        </div>
        
    </div>

  )
}
