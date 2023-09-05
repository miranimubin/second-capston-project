import Image from 'next/image'
import './section.css'
import React from 'react'
import arrow from "../../asseds/images/arrow.png"

const sectionsix = () => {
  return (
    <div>
      <div className='container p-4'>
        <div className='position-relative bg-image'>

          <div className='text-white text-center position-absolute top-50 start-50 translate-middle'>
            <p className='pra-six'><b>Join Us</b></p>
            <h3 className='para-font'>
              Join Us by Creating Account <br /> or Start a Free Trial
            </h3>
            <p className='peera-six'>Install our top-rated dropshipping app to your e-commerce <br /> site and get access to US Suppliers, AliExpress vendors, and <br /> the best dropshipping and custom products.</p>
            <div>
              <button className='rounded-5 p-3 sec-six-btn'>Start Free Trial <Image src={arrow} /> </button>
              &nbsp;&nbsp;
              <button className='rounded-5 p-3 six-btn'>Contact Us <Image src={arrow} /> </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default sectionsix
