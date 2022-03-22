import React from 'react'
import Carousel from './Carousel';
import './css/main.css'

function HomeView() {
  return (<div className='home-page '>
  <div class="home container-fluid">
 
    <div className='card'>
              <div className='card-body flex-column justify-content-between'>

                <div className='align-self-center'>
                    
                          <div className=''>
                            <h3> Quickest and Safest Delivery</h3>
                          </div>     
                          <div className=''>
                            <p> We guarantee fast and safe transport for your package</p>
                              <p> If you want to track all of your deliveries, without wasting time checking websites 
                              <br/>  Parcel is the right app for you.
                              <br/>This app will track your deliveries and do even more.</p>
                          </div>        

               </div>
                
                {/* <div className='col-md-4 px-0'>
                      <img  className='img-fluid rounded-circle' src='/images/parcel1.jpg ' alt='logo'/>
                </div> */}

              </div>
    </div>

    

      
        <div className='card align-self-center '>
              <h4 className='d-flex w-80 justify-content-center'>How It Works?</h4>
              

              <Carousel/>
              
        </div>
  </div>

</div>)
}

export default HomeView;