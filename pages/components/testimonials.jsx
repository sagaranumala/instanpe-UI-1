import React,{useState,useEffect} from 'react'
import {testimonialsData} from './testimonialsData'
//import rightArrow from '../../assets/rightArrow.png'
import {motion} from'framer-motion'
import Image from 'next/image'


const Testimonials = () => {
    const [selected,setSelected]=useState(0);
    console.log(testimonialsData[selected].review);
    const tlength=testimonialsData.length;
    const transition ={type:'spring',duration:3}

    useEffect(() => {
      const interval = setInterval(() => {
        if (selected == 2) {
          setSelected(0);
        } else {
          let x = selected;
          x++;
          setSelected(x);
        }
      }, 3000);
  
      return () => clearInterval(interval);
    }, [selected]);
  
  return (
    <div className='Testimonials' id='testimonials'>
        <div className="left-t">
            <h1>Testimonials</h1>
            <span className='stroke-text'>What they</span>
            <span>Say about us </span>
            <motion.span
            key={selected}
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            exit={{opacity:0,x:100}}
            transition={transition}
            >
                 {testimonialsData[selected].review}
            </motion.span>
            <span>
                <span style={{color:'blueviolet'}}>
                     {testimonialsData[selected].name}
                </span>{' '}
                - {testimonialsData[selected].status}
            </span>
        </div>
        
        <div className="right-t">
             <motion.div
             initial={{opacity:0,x:-100}}
             transition={{...transition,duration:2}}
             whileInView={{opacity:1,x:0}}
             ></motion.div>
             <motion.div
             initial={{opacity:0,x:100}}
             transition={{...transition,duration:2}}
             whileInView={{opacity:1,x:0}}
             ></motion.div>
             <motion.div
                initial={{opacity:0,x:100}}
                whileInView={{opacity:1,x:0}}
                exit={{opacity:0,x:-100}}
                transition={transition}
             >
                 <Image
                   key={selected}
                   height={320}
                   width={270}
                   src={testimonialsData[selected].image} alt="" />
             </motion.div>
            
            <div className="arrows">
              <img src="/leftArrow.png" alt="" onClick={()=>{
                selected===0?
                setSelected(tlength-1):setSelected((prev)=>prev-1)
              }}/>
              <img src="/rightArrow.png" alt="" onClick={()=>{

                selected===tlength-1?
                setSelected(0):setSelected((prev)=>prev+1)
              }}/>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
