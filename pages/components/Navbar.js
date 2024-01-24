import React,{useState} from 'react'
import Link from 'next/link'
import {signIn,signOut,useSession} from "next-auth/react"
import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
    console.log(process.env.GOOGLE_ID);
     const { data: session, status } = useSession()
     console.log(status)

     function DropdownMenu () {
        return (
          
        <div className="dropdown-menu">
            <ul>
              <li>Menu 1</li>
              <li>Menu 2</li>
             
            </ul>
        </div>
        
        );
      };
      
        const [isDropdownVisible, setDropdownVisible] = useState(false);
      
        const handleMouseEnter = () => {
          setDropdownVisible(true);
        };
      
        const handleMouseLeave = () => {
          setDropdownVisible(false);
        };
      
    
  return (
    <div className={styles.header}>
        <div className={styles.logoContainer}>
          <h1 className={styles.logo1}>
             <span className={styles.text0}>in</span>stanpe
           </h1>
        </div>
        <div className={styles.mainNav}>
            <h2>{session?.user?.email}</h2>
            <div className='drop'>
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
                <Link href='/page/product'>
                    <span className={styles.nav}>Product</span> 
                </Link>
            </div>
            <div>
                <Link href='/page/company'>
                <span className={styles.nav}>Company</span>
                </Link>
            </div>
            <div>
                <Link href='/page/resources'>
                <span className={styles.nav}>Resources</span>
                </Link>
            </div>
            <div>
                <Link href='/page/contact'>
                <span className={styles.nav}>Contact Us</span>
                </Link>
            </div>
             
    
        </div>
    </div>

  )
}
