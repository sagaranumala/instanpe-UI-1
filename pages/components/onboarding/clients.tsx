import Image from 'next/image'
import React from 'react'

const Clients = () => {
  return (
    <div className="clients">
             <h1>Our Clients</h1>
             <div className="clientLogos">
             
             <Image
                   height={100}
                   width={200}
                   src="/client1.png" alt="" />
             <Image
                   height={100}
                   width={200}
                   src="/client2.png" alt="" />
             <Image
                   height={100}
                   width={200}
                   src="/client3.png" alt="" />
             <Image
                   height={100}
                   width={200}
                   src="/client4.png" alt="" />
             {/* <Image
                   height={100}
                   width={150}
                   src="/client3.png" alt="" />
             <Image
                   height={100}
                   width={150}
                   src="/client5.png" alt="" /> */}
             </div>
     </div>
  )
}

export default Clients
