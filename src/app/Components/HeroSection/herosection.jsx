import React, { Fragment } from 'react'
import './herosection.css'
import Frame from "../../asseds/images/Frame.png"
import arrow from "../../asseds/images/arrow.png"
import arrw from "../../asseds/images/arrw.png"
import heroImg from "../../asseds/images/material-symbols.svg"
import surchicon from "../../asseds/images/surchicon.png"
import Image from 'next/image'

const herosection = () => {
  return (
    <div>

      <div className='container mb-5'>
        <div className='row position-relative py-3'>
          <div className='col-md-6'>
            <h1 className='pt-5'>
              You bring  the<br />
              <span className='text-color'>expertise</span>, we'll make <br />
              it unforgettable.
            </h1>
            <br />
            <p className='pera'>
              Using highly personalised activities,
              videos and <br /> animations you can energise your
              students and <br /> motivate them to achieve their learning goals as <br /> they progress through a journey.
            </p>
            <br />
            <button className='btn1 rounded-5 p-3'>Register   <Image src={arrow} alt="" className=' img-fluid' />  </button>&nbsp;&nbsp;
            <button className='btn2 rounded-5 p-3'>Login <Image src={arrw} alt="" className=' img-fluid ' /> </button>

            <div className='py-3 hero-position rounded-5'>
              <span className='px-5'>Select Course</span>
              <span className=''><Image src={heroImg} /></span>&nbsp;&nbsp;
              <span className='border'></span>
              <span className='px-5'>Select Instructor</span>
              <span className=''><Image src={heroImg} /></span> &nbsp;&nbsp;
              <span className='border'></span>
              <button className='btn-margin'>Search <Image src={surchicon} /> </button>
            </div>
          </div>

          <div className='col-md-6 '>
            <div className='pt-4'><Image src={Frame} alt="" className='pic-size img-fluid' /></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default herosection
