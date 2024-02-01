import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";


function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
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
                   src="/client5.png" alt="" />
          </div>
          <div className="scroll-section">
             <Image
                   height={100}
                   width={200}
                   src="/client4.png" alt="" />
             <Image
                   height={100}
                   width={200}
                   src="/client3.png" alt="" />
             <Image
                   height={100}
                   width={200}
                   src="/client5.png" alt="" />
             <Image
                   height={100}
                   width={200}
                   src="/client4.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;