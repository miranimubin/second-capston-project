import React from 'react'
import "./navbar.css"
import arrow from "../../asseds/images/arrow.png"
import searchbar from "../../asseds/images/searchbar.png"

import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
<div className='container nav-bg'>
<nav class="navbar navbar-expand-lg rounded nav-bg" aria-label="Thirteenth navbar example">
      <div class="container-fluid">
        <h2 className='h-color'>eLearning</h2>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <h2 className=' me-0 col-lg-3'></h2>
          <ul class="navbar-nav col-lg-6 justify-content-lg-center">
            
            {/* <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"><span className='h-color'><u> Home</u> </span></a>
            </li> */}

            <li class="nav-item">
              <a class="nav-link" href="#"><span className='h-color'><u> Home</u> </span> </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Features </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Benefits</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Courses </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Blogs </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Login </a>
            </li>

            {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> */}


          </ul>
          
          
          <div class="d-lg-flex col-lg-3 justify-content-lg-end text-end">
          <Image src={searchbar} alt='' />&nbsp;&nbsp;
            <button class="  rounded-5 p-3 btn-colr">Start Free Trial <Image src={arrow} alt=''  /> </button>
          </div>
        </div>
      </div>
    </nav>
    </div>
    </div>
  )
}

export default Navbar
