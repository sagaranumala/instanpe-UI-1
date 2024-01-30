import React from 'react'
import styles from '../../styles/Footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <section className={styles.footer}>
          <div className={styles.footerBox}>
              <div className='red-rose-500'>
                    <img src="/instanpe-logo.png" alt="Italian Trulli"/>
              </div>
              <div>
              </div>
              <div className={styles.footerBox1}>
                  <div><h1>General</h1></div>
                  <div>About Us</div>
                  <div>Careers</div>
                  <div>Contact Us</div>
              </div>
              <div className={styles.footerBox1}>
                  <div><h1>Legal</h1></div>
                  <div>Terms & Conditions</div>
                  <div>Privacy Policy</div>
                  
              </div>
              
          </div>
          <div className={styles.footerIcons}>
              
              <LinkedInIcon className={styles.icons}/>
              <EmailIcon className={styles.icons}/>
          </div>
          <div className={styles.bottom}>2024, All rights reserved</div>
          <div className='black-rose-500'></div>
    </section>
  )
}

export default Footer
