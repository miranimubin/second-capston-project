import React from 'react'
import './footer.css'
import Image from 'next/image'
import insta from "../../asseds/images/insta.png"
import twitter from "../../asseds/images/twitter.png"
import pintres from "../../asseds/images/pintres.png"
import facebook from "../../asseds/images/facebook.png"
import footerline from "../../asseds/images/footerline.png"
import arrow from "../../asseds/images/arrow.png"

const footer = () => {
  return (
    <div>
      <div className='container position-relative margin-foter'>
        <div className='row footer-bg text-white'>
          <div className='col-md-3 text-center'>
            <h3 className='foter-text-color '><b>eLearning</b></h3>
          </div>

          <div className='col-md-6 px-3  pt-2'>
            <div className='d-flex para-font'>
              <p>Home</p>
              &nbsp;&nbsp;
              <p>Features</p>
              &nbsp;&nbsp;
              <p>Benefits</p>
              &nbsp;&nbsp;
              <p>Courses</p>
              &nbsp;&nbsp;
              <p>Blogs</p>
              &nbsp;&nbsp;
              <p>Login</p>
            </div>
          </div>

          <div className='col-md-3 text-center'>
            <div>
              <Image src={insta} alt='' />
              &nbsp;&nbsp;&nbsp;
              <Image src={twitter} alt='' />
              &nbsp;&nbsp;&nbsp;
              <Image src={pintres} alt='' />
              &nbsp;&nbsp;&nbsp;
              <Image src={facebook} alt='' />
            </div>
          </div>

          <div className='row pt-5 text-center' >
            <Image src={footerline} alt='' />
            <p className='pt-4'>Copyright © 2023 eLearning.com</p>
          </div>

        </div>

        <div className='container bg-foter position-footer translate-middle'>
          <div className='text-white text-center position-absolute top-50 start-50 translate-middle'>
            <p><b>Join Us</b></p>
            <h3>
              Join Us by Creating Account or Start a Free Trial
            </h3>
            <p>Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products.</p>
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

export default footer
