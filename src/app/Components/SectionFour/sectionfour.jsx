import React from 'react'
import './sectionfour.css'
import arrow from "../../asseds/images/arrow.png"
import picfour from "../../asseds/images/picfour.png"

import Image from 'next/image'

const sectionfour = () => {
  return (
    <div>
      <div className='container'>
        <div className='row p-5'>
            <div className='col-md-6 p-5 '>
                <span className='spn font-family'><b>About Us</b></span>
                <br />
                <br />
                <h2>
                <b>eLearning providing the best opportunities to the students around the glob.</b>
                </h2>
                <br />
                <p className='pera-size'>
                Install our top-rated dropshipping app to your e-commerce site and get <br /> access to US Suppliers, AliExpress vendors, and the best dropshipping and <br /> custom products. 
                Start selling the right products to the customer base that <br /> you know best. We connect you to inventory, 
                so you can focus on creating <br /> a catalog of profitable products for your online store.
                </p>
                
               
               
                <p className='pera-size'>
                Install our top-rated dropshipping app to your e-commerce site and get <br /> access to US Suppliers, AliExpress vendors, and the best dropshipping and <br /> custom products. 
                Start selling the right products to the customer base that <br /> you know best. We connect you to inventory, 
                so you can focus on creating <br /> a catalog of profitable products for your online store.
                </p>

                <button className='btn1 rounded-5 p-3'>Join Us <Image src={arrow} alt="" /> </button>
                
            </div>

            <div className='col-md-6'>
              <Image src={picfour} alt='' className='img-fluid p-4 pt-5' />
            </div>
                
        </div>

      </div>
    </div>
  )
}

export default sectionfour
