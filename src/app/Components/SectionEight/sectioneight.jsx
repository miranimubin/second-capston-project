import React from 'react'
import './sectioneight.css'
import Image from 'next/image'
import one from "../../asseds/images/one.png"
import two from "../../asseds/images/two.png"
import three from "../../asseds/images/three.png"
import four from "../../asseds/images/four.png"
import five from "../../asseds/images/five.png"
import six from "../../asseds/images/six.png"
import line from "../../asseds/images/line.png"
import arrow from "../../asseds/images/arrow.png"
import circle from "../../asseds/images/circle.png"
const sectioneight = () => {
  return (
    <div>
      <div className='container px-4'>

        <div className='row p-5'>
            <div className='col-md-4 card-bg'>
                <Image src={one} alt='' />
                <h4><b>Standardization</b></h4>
                <p className='e-pera'>
                When working in a global workplace, 
                it’s often difficult to gauge learners’ training experiences, which are ... <span className='sec-eight-color'><b>Read More</b></span>
                </p>
            </div>

            <div className='col-md-4'>
                <Image src={two} alt='' />
                <h4><b>Reduced Costs</b></h4>
                <p className='sec-e-pera'>
                With eLearning, there’s no cost to reproduce materials and, 
                thanks to mobile learning and microlearning, learners can ...<span className='sec-eight-color'><b>Read More</b></span>
                </p>
            </div>

            <div className='col-md-4 card-bg'>
                <Image src={three} alt='' />
                <h4><b>More Customization</b></h4>
                <p className='sec-e-pera'>
                Wust like learners aren’t one-size-fits-all, 
                learning is not a one-size-fits-all experience. By using different ... <span className='sec-eight-color'><b>Read More</b></span>
                </p>
            </div>

        </div>

        <div className='row p-5 pt-0'>
            <div className='col-md-4'>
                <Image src={four} alt='' />
                <h4><b>Affordable Pricing</b></h4>
                <p className='sec-e-pera'>
                With eLearning, there’s no cost to reproduce materials and, 
                thanks to mobile learning and microlearning, learners can ...<span className='sec-eight-color'><b>Read More</b></span>
                </p>
            </div>

            <div className='col-md-4 card-bg'>
                <Image src={five} alt='' />
                <h4><b>Learner Satisfaction</b></h4>
                <p className='e-pera'>
                If you really want students to retain what they learn, 
                you’ll need to aim for high satisfaction rates. Bad ... <span className='sec-eight-color'><b>Read More</b></span>
                </p>
            </div>

            <div className='col-md-4'>
                <Image src={six} alt='' />
                <h4><b>Multimedia Materials</b></h4>
                <p className='e-pera'>
                One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method for ...<span className='sec-eight-color'><b>Read More</b></span>
                </p>
            </div>

        </div>

        <div className='row py-3 text-center'>
           <div className='col-md-2'> <h6><b>View All Features</b></h6> </div>
           <div className='col-md-8'>   <Image src={line} alt='' className='imgifluid ' /> </div>
           <div className='col-md-2'> 
                <button className='rounded-5 p-2 text-end butn'>All Features <Image src={arrow} alt='' className='imgifluid ' /> </button> 
                </div>
          
          <div className='row text-start'>
           <div className='px-3 py-5'>
           <Image src={circle} alt='' className='img-fluid' />
           </div>
          </div>
           
           </div>
        </div>
      
      
      </div>
    
  )
}

export default sectioneight
