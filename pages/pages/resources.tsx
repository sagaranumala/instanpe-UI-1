import React from 'react'
import styles from "../../styles/contanct.module.css"
import Image from 'next/image'
import ImageSlider from '../components/ImageSlider'
import Testimonials from '../components/testimonials'
import Clients from '../components/onboarding/clients'
import ScrollSection from '../components/scroll'

const Resources = () => {
  return (
   <div>
       {/* <ImageSlider/> */}
       <Testimonials/>
       <Clients/>
      <ScrollSection/>
   </div>
  )
}

export default Resources
