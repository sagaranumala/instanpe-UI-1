import React from 'react'
import  styles from '../../styles/directors.module.css'
import Image from 'next/image'
import {motion} from'framer-motion'


const Directores = () => {

    const transition ={type:'spring',duration:3}

  return (
    <div className={styles.container}>
         <div className={styles.box1}>
              <div className={styles.box1Left}>
                    <Image
                       height={290}
                       width={290}
                       style={{borderRadius:"50%"}}
                       src="/contact-img.jpg" alt=""
                     />
               </div>
               <h1>Sameer Nigam</h1>
               <div className={styles.text1}><p>Sameer Nigam founded PhonePe in 2015 and serves as its Chief Executive Officer. Before PhonePe, he served as the SVP Engineering</p></div>
               <span>More</span>
         </div>
    </div>
  )
}

export default Directores
