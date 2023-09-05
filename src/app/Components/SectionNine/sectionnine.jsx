import React from 'react'
import './sectionnine.css'
import Image from 'next/image'

import laptop from "../../asseds/images/laptop.png"
import tablet from "../../asseds/images/tablet.png"
import computer from "../../asseds/images/computer.png"
import tags from "../../asseds/images/tags.png"
import icon from "../../asseds/images/icon.png"
import card from "../../asseds/images/card.png"
import linee from "../../asseds/images/linee.png"
import arrow from "../../asseds/images/arrow.png"
const sectionnine = () => {
  return (
    <div>
      <div className='container sec-nine-bg py-4'>
        <div className='row text-center py-5'>
           <span className='txt-clr'>Our Courses</span>
           <h5 className='hding-clr'>Our Best Courses Offered and Teach</h5>
           <h5 className='hding-clr'> By Best of The Instructors</h5>
          
           <p className='per-clr pt-3'>Install our top-rated dropshipping app to your e-commerce site and get <br /> access to US Suppliers,
             AliExpress vendors, and the best.</p>
        </div>

        <div className='row px-4'>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <div className='col-md-3  sec-nine-card py-3 '>
                <div className='text-center'>
                    <Image src={laptop} alt='' className='img-fluid' />
                </div>
              
                    <h6 className='fw-bold pt-3 px-2'>Basics of JAVA <Image src={tags} alt='' className='d-flex float-end' /> </h6>
              
                    <p className='card-pra pt-3'>
                    Java is a class-based object-oriented simple programming language. 
                    Though we can not consider it to be fully ... 
                    </p>
                        <div className='d-flex'>
                    <h3 className='nmbr-clr'>125.65</h3> &nbsp; <p className='pt-2'>AED</p>
                    </div>

                    <button className='px-5 p-3 rounded-5 btn-nine'>View Course</button>
                    <Image src={icon} alt='' className=' img-fluid d-flex float-end' />

                </div>

                &nbsp; &nbsp; &nbsp;

                <div className='col-md-3  sec-nine-card py-3 '>
                <div className='text-center'>
                    <Image src={tablet} alt='' className='img-fluid' />
                </div>
              
                    <h6 className='fw-bold pt-3'>OOPFundamentals <Image src={tags} alt='' className='d-flex float-end' /> </h6>
              
                    <p className='card-pra pt-3'>
                    Java is a class-based object-oriented simple programming language. 
                    Though we can not consider it to be fully ... 
                    </p>
                        <div className='d-flex'>
                    <h3 className='nmbr-clr'>15.65</h3> &nbsp; <p className='pt-2'>AED</p>
                    </div>

                    <button className='px-5 p-3 rounded-5 btn-nine'>View Course</button>
                    <Image src={icon} alt='' className=' img-fluid d-flex float-end' />

                </div>
            
             &nbsp; &nbsp; &nbsp;

                <div className='col-md-3  sec-nine-card py-3 '>
                <div className='text-center'>
                    <Image src={computer} alt='' className='img-fluid' />
                </div>
              
                    <h6 className='fw-bold pt-3'>Intro to UI/UX<Image src={tags} alt='' className='d-flex float-end' /> </h6>
              
                    <p className='card-pra pt-3'>
                    Java is a class-based object-oriented simple programming language. 
                    Though we can not consider it to be fully ... 
                    </p>
                        <div className='d-flex'>
                    <h3 className='nmbr-clr'>16.58</h3> &nbsp; <p className='pt-2'>AED</p>
                    </div>

                    <button className='px-5 p-3 rounded-5 btn-nine'>View Course</button>
                    <Image src={icon} alt='' className=' img-fluid d-flex float-end' />


                </div>
                
                &nbsp;
                <div className='col-md-2'>
                <Image src={card} alt='' height={430} className=' img-fluid d-felx float-end' />
                </div>


            
                <div className='row py-4 pt-5 text-center'>

                <div className='col-md-2'>
                <h6 className='fw-bold sec-nine-txt'>View All Courses</h6>
                </div>

                <div className='col-md-8'>
                  <Image src={linee} alt=''  />
                </div>

                <div className='col-md-2'>
                  <button className='rounded-5 p-2 butn-nin'>All Courses <Image src={arrow} alt='' /></button>
                </div>
            
                </div>
              


            
        
        </div>
        

      </div>
    </div>
  )
}

export default sectionnine
