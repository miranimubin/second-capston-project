import React from 'react'
import './sectionthree.css'
import coursera from "../../asseds/images/coursera.png"
import udemy from "../../asseds/images/udemy.png"
import oxford from "../../asseds/images/oxford.png"
import michigan from "../../asseds/images/michigan.png"
import Image from 'next/image'


const sectionthree = () => {
  return (
    <div>
      <div className='container bg-color '>
        <div className='row p-5 text-center'>
        <div className='col-md-3'>
          <Image src={coursera} alt='' className=' img-fluid' />
        </div>
        <div className='col-md-3 pt-2'>
          <Image src={udemy} alt='' className=' img-fluid ' />
        </div>
        <div className='col-md-3'>
          <Image src={oxford} alt='' className=' img-fluid' />
        </div>
        <div className='col-md-3'>
          <Image src={michigan} alt='' className=' img-fluid' />
        </div>



        </div>
      </div>
    </div>
  )
}

export default sectionthree
