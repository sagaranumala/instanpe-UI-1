'use client'

import React from 'react'
import styles from "../../styles/contanct.module.css"
import Image from 'next/image'
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import dynamic from "next/dynamic";

const Map = dynamic(() => import('../Map'), { 
     ssr: false 
   });

const Contact = () => {
  return (
    <div className={styles.contact}>
         <div className={styles.container}>
              <div className={styles.containerLeft}>
                 <div className={styles.titleBox}>
                    <div className={styles.title}>
                      <span className={styles.text1}> Instan</span>pe Digital Systems Pvt.Ltd
                    </div>
                 </div>
                 <div>
                     <span className={styles.wellcome}>
                       Contact Us
                     </span>
                 </div>
                 <div>
                     <span className={styles.help}>
                        We are here to help you
                     </span>
                 </div>
                 </div>
                 <div>
                 <Image
                     src="/contact-img.jpg"
                     width={800}
                     height={500}
                     alt='contact'
                  />
                 </div>
             
        </div>
        <div className={styles.box1}>
             <div className={styles.box1Left}>
                  <span className={styles.text5}>Grievances</span>
                  <p>Get in touch with us to escalate any existing complaints, and we will ensure a quick resolution.</p>
                  <div className={styles.iconCotainer}><MailIcon style={{ color: "rgb(91, 32, 240)",fontSize:"35px" }}/><span className={styles.text6}>Send a message</span></div>
             </div>
             <div className={styles.box1Left}>
                  <span className={styles.text5}>Ombudsman</span>
                     <p>You can direct your complaints to our regulating authority by sending them a message.</p>
                  <span className={styles.text6}>Know More</span>
             </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.adressContainer}>
             <div className={styles.adressLeft}>
                  <h2>Registered Address</h2>
                  <div style={{height:"10px",width:"50px",backgroundColor:"aqua",marginBottom:"10px"}}></div>
                  <div className={styles.adressBox}>
                      <span>instanpe Digital Systems Private Limited</span>
                      <span>Meera One,3rd floor</span>
                      <span>Image garden road,Madhapur</span>
                      <span>Hyderabad, Telangana, India, 500081</span>
                      <span>CIN: U67190KA2012PTC176031</span>
                      <div className={styles.iconCotainer}><LocationOnIcon style={{ color: "rgb(91, 32, 240)",fontSize:"35px" }}/><div className={styles.text7}>View in Maps </div></div>
                  </div>
              </div>
              <div className={styles.adressRight}>
               <div className=''>
                    <Map center={[17.4478, 78.3861]}/>
               </div>  
               <div className={styles.adress}>
                    <div className={styles.adressHead}><span>Meera One</span></div>
                    <span>WMFC+P24, Service Rd,</span>
                    <span>Green Glen Layout, Bellandur,</span>
                    <span>Bengaluru, Karnataka 560103</span>   
               </div>
         </div>
   </div>
   <div className={styles.line}></div>
    </div>
  )
}

export default Contact
