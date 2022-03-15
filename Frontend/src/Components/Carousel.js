import React from 'react'

function Carousel() {
  return (
    <div>
        
        <div className="carousel slide" data-bs-ride="carousel"> 
              <div className='carousel-indicators'>
                    <button className='active' data-bs-slide-to='0 '></button>
                    <button className=' ' data-bs-slide-to='1 '></button>
                    <button className=' ' data-bs-slide-to='2 '></button>
                    <button className=' ' data-bs-slide-to='3 '></button>
              </div>
              <div className='carousel-inner'>
                        <div className='carousel-item active'>
                        <img src='/images/login.png' alt='0' className='d-block w-100'></img>
                        </div>

                        <div className='carousel-item '>
                        <img src='/images/register.png' alt='1' className='d-block w-100'></img>
                        </div>

                        <div className='carousel-item'>
                          <img src='/images/register.png' alt='2' className='d-block w-100'></img>
                        </div>

                        <div className='carousel-item '>
                          <img src='' alt='3' className='d-block w-100'></img>
                        </div>
              </div>
              </div>

              <button className='carousel-control-prev' type='button' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon'></span>
              </button>

              <button className='carousel-control-next' type='button' data-bs-slide='next'>
                    <span className='carousel-control-next-icon'></span>
              </button>

              

    </div>
  )
}

export default Carousel