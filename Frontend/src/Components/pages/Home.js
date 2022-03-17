import React from 'react'
import Carousel from './Carousel';

function Home() {
  return (<div className='home-page '>
  <div class="home pt-2 container-fluid">
 
    <div className=' card mt-4 mx-4  pt-4  '>
              <div className='card-body d-flex flex-row justify-content-between'>

                <div className='d-flex'>
                    
                          <div className='align-self-start'>
                            <h3> Quickest and Safest Delivery</h3>
                          </div>     
                          <div className='align-self-end'>
                            <p> We guarantee fast and safe transport for your package</p>
                              <p> If you want to track all of your deliveries, without wasting time checking websites 
                              <br/>  Parcel is the right app for you.
                              <br/>This app will track your deliveries and do even more.</p>
                          </div>        

               </div>
                
                <div className='col-md-4 px-0'>
                      <img  className='img-fluid rounded-circle' src='/images/parcel1.jpg ' alt='logo'/>
                </div>

              </div>
    </div>

    

      
        <div className='card mt-4 ms-4 pt-2 w-80 d-flex align-self-center '>
              <h4 className='d-flex justify-content-center'>How It Works?</h4>
              {/* ------------------------
                      Carousel
              ------------------------- */}

              <Carousel/>
              
        </div>
  </div>

</div>)
}

export default Home;