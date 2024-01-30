import React from 'react'
import styles from '../../styles/Footer.module.css'

const Footer = () => {
  return (
    <section className={styles.footer}>
          <div className={styles.footerBox}>
              <div>
                    <img src="/instanpe-logo.png" alt="Italian Trulli"/>
              </div>
              <div className={styles.footerBox1}>
                  <div><h1>Business Solutions</h1></div>
                  <div>Payment Gateway</div>
                  <div>Guardian by instanpe</div>
                  <div>Market Analysis</div>
                  <div>Investment & marketing</div>
                  <div>Capital venture</div>
                  <div>Real estate</div>
              </div>
              <div className={styles.footerBox1}>
                  <div><h1>General</h1></div>
                  <div>About Us</div>
                  <div>Careers</div>
                  <div>Contact Us</div>
                  <div>Press</div>
                  <div>Ethics</div>
                  <div>Blog</div>
              </div>
              <div className={styles.footerBox1}>
                  <div><h1>Legal</h1></div>
                  <div>Terms & Conditions</div>
                  <div>Privacy Policy</div>
                  <div>Grievance Policy</div>
                  <div>Trust & Safety</div>
                  <div>Global Anti-Corruption Policy</div>
              </div>
              
          </div>
    </section>
  )
}

export default Footer
