import React from 'react'

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-left anim1">
            <img  data-aos="fade-left"
             src="https://img.freepik.com/free-vector/e-wallet-concept-illustration_114360-7561.jpg?size=626&ext=jpg&ga=GA1.1.1961434237.1702448463&semt=ais" alt="" />
        </div> 

        <div className="right-hero">
            {/* <img src="./images/6134225.jpg" className="anim" alt="Italian Trulli"/> */}
            
            <div className="text-content">
              <div className="text1-left">
                <h1 >Fast, Secure, and Reliable Payment Processing</h1>
              </div>
              <div className="text2-left">
                <p >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et </p>
             </div>
             <div className="hero-btn-container">
                 <button  className="hero-btn1">
                    View Demo
                 </button>
                 <button  className="hero-btn2">
                    Sign Up
                 </button>
              </div>
              <div className="rating">
                 <div className="rating1">
                    <div className="rating1-text1">4.9<span className="inner-text1">/</span>5</div> 
                    <div>Client Rating</div>
                 </div>
                 <div className="rating2">
                   <div className="rating1-text1"><span id="nbr1">60</span><span className="inner-text">k</span></div> 
                   <div>Global users</div>
                 </div>
                 <div className="rating1">
                    <div className="rating1-text1"><span id="nbr">99</span><span className="inner-text">%</span></div> 
                    <div>Secure Transaction</div>
                </div>
             </div>
         
          </div>
        </div>   
    </section>
  )
}

export default Hero
