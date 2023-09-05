import Image from 'next/image'
import React from 'react'
import './sectionfive.css'
import bulbs from "../../asseds/images/bulbs.png"
import arrow from "../../asseds/images/arrow.png"

const sectionfive = () => {
  return (
    <div>
      <div className='container'>
        <div className='row p-5'>
            <div className='col-md-6 pt-4 px-5'>
                <Image src={bulbs} alt='' className='img-fluid pic-sec-five' />
            </div>
            <div className='col-md-6 pt-4 px-5 '>
                <span className='t-colr '><b>Features</b></span>
                <br />
                <br />
                <h3 className='para-font'>
                We are always working to  provide you best of the features in all aspects.
                </h3>
                <p className='sec-five-pera'>
                Install our top-rated dropshipping app to your e-commerce site and get <br /> access to US Suppliers, AliExpress vendors, and the best dropshipping and <br /> custom products. Start selling the right products to the customer base that <br /> you know best. We connect you to inventory, 
                so you can focus on creating <br /> a catalog of profitable products for your online store.
                </p>
                <p className='sec-five-pera'>
                Install our top-rated dropshipping app to your e-commerce site and get <br /> access to US Suppliers, AliExpress vendors, and the best dropshipping and <br /> custom products. Start selling the right products to the customer base that <br /> you know best. We connect you to inventory, 
                so you can focus on creating <br /> a catalog of profitable products for your online store.
                </p>
                <button className='btn1 rounded-5 p-3'>Learn More <Image src={arrow} alt="" className=' img-fluid' /> </button>
            </div>


        </div>
      </div>
    </div>
  )
}

export default sectionfive
