import React from 'react'
import './sectionten.css'
import Image from 'next/image'
import arrw from "../../asseds/images/arrw.png"
import newspaper from "../../asseds/images/newspaper.png"
import glasses from "../../asseds/images/glasses.png"
import books from "../../asseds/images/books.png"
import cup from "../../asseds/images/cup.png"
import pad from "../../asseds/images/pad.png"
import surch from "../../asseds/images/surch.png"
import dot from "../../asseds/images/dot.png"
const sectionten = () => {
    return (
        <div>
            <div className='container p-5'>
                <div className='row pt-5'>
                    <div className='text-center pt-5'>
                        <span className='font-clr'><b>Blog Posts</b></span>
                        <h3 className='pt-3'><b>Articles will help to to stay up to <br /> date with all the knowledge</b></h3>
                        <p className='pera-ten pt-2'>
                            Install our top-rated dropshipping app to your e-commerce site and get <br /> access to US Suppliers,
                            AliExpress vendors, and the best.
                        </p>
                    </div>
                </div>

                <div className='row p-3'>
                    <div className='col-md-4  mt-2'>
                        <Image src={newspaper} alt='' className='img-fluid' />
                        <h5 className='pt-3'><b>Why Java is best programming language?</b></h5>
                        <p className='ten-pra pt-2'>
                            Java is a class-based object-oriented simple programming language.
                            Though we can not consider it to be fully ...
                        </p>
                        <button className='rounded-5 p-3 btn-ten'>Read Article &nbsp; <Image src={arrw} alt='' /> </button>
                    </div>
                     
                    <div className='col-md-4 mt-2'>
                        <Image src={glasses} alt='' className='img-fluid' />
                        <h5 className='pt-3'><b>Why Java is best programming language?</b></h5>
                        <p className='ten-pra pt-2'>
                            Java is a class-based object-oriented simple programming language.
                            Though we can not consider it to be fully ...
                        </p>
                        <button className='rounded-5 p-3 btn-ten'>Read Article &nbsp; <Image src={arrw} alt='' /> </button>
                    </div>
                  
                    <div className='col-md-4 mt-2'>
                        <Image src={books} alt='' className='img-fluid' />
                        <h5 className='pt-3'><b>Why Java is best programming language?</b></h5>
                        <p className='ten-pra pt-2'>
                            Java is a class-based object-oriented simple programming language.
                            Though we can not consider it to be fully ...
                        </p>
                        <button className='rounded-5 p-3 btn-ten'>Read Article &nbsp; <Image src={arrw} alt='' /> </button>
                    </div>

                </div>
               
                <div className='row p-3 pt-2'>
                    <div className='col-md-4  mt-2'>
                        <Image src={cup} alt='' className='img-fluid' />
                        <h5 className='pt-3'><b>Why Java is best programming language?</b></h5>
                        <p className='ten-pra pt-2'>
                            Java is a class-based object-oriented simple programming language.
                            Though we can not consider it to be fully ...
                        </p>
                        <button className='rounded-5 p-3 btn-ten'>Read Article &nbsp; <Image src={arrw} alt='' /> </button>
                    </div>
                    
                    <div className='col-md-4  mt-2'>
                        <Image src={pad} alt='' className='img-fluid' />
                        <h5 className='pt-3'><b>Why Java is best programming language?</b></h5>
                        <p className='ten-pra pt-2'>
                            Java is a class-based object-oriented simple programming language.
                            Though we can not consider it to be fully ...
                        </p>
                        <button className='rounded-5 p-3 btn-ten'>Read Article &nbsp; <Image src={arrw} alt='' /> </button>
                    </div>
                   
                    <div className='col-md-4  mt-2'>
                        <Image src={surch} alt='' className='img-fluid' />
                        <h5 className='pt-3'><b>Why Java is best programming language?</b></h5>
                        <p className='ten-pra pt-2'>
                            Java is a class-based object-oriented simple programming language.
                            Though we can not consider it to be fully ...
                        </p>
                        <button className='rounded-5 p-3 btn-ten'>Read Article &nbsp; <Image src={arrw} alt='' /> </button>
                    </div>

                </div>


                <div className='py-4 px-0'>
                    <Image src={dot} alt='' className='img-fluid' />
                </div>

            </div>

        </div>
    )
}

export default sectionten
