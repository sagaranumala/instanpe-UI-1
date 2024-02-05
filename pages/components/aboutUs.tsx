import React from 'react'
import styles from '../../styles/aboutUs.module.css'
import Image from 'next/image'


const AboutUs = () => {
  return (
    <div>
         <div className={styles.container}>
         <div className={styles.box1Left}>
                    <Image
                       height={390}
                       width={390}
                       style={{borderRadius:"50%",opacity:"transform(1.2)"}}
                       src="/contact-img.jpg" alt=""
                     />
         </div>
         <div className={styles.box1Right}>
            <h1>Srimiti mandanna</h1>
            <p>Sameer Nigam founded PhonePe in 2015 and serves as its Chief Executive Officer. Before PhonePe, he served as the SVP Engineering.Sameer Nigam founded PhonePe in 2015 and serves as its Chief Executive Officer. Before PhonePe, he served as the SVP Engineering</p>
         </div>
        </div>
        <div className={styles.container1}>
         <div className={styles.box1Left1}>
                    <Image
                       height={390}
                       width={390}
                       style={{borderRadius:"50%",opacity:"transform(1.2)"}}
                       src="/contact-img.jpg" alt=""
                     />
         </div>
         <div className={styles.box1Right}>
            <h1>Sachin Nigam</h1>
            <p>Rahul Chari is the Chief Technology officer at PhonePe. He comes with two decades of experience spanning embedded systems,Rahul Chari is the Chief Technology officer at PhonePe. He comes with two decades of experience spanning embedded systems,</p>
         </div>
        </div>
    </div>
  )
}

export default AboutUs
