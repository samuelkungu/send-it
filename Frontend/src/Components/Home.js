import React from 'react'
import NavBar from './NavBar';

function Home() {
  return (
<div>
<NavBar/>
<div class="home pt-5">
<div className='container-fluid'>
      
         <h3>
           Quickest and Safest Delivery
        </h3>

        <div className='card mt-4 pt-4 '>
          <div className='card-body'>
            <p>
              We guarantee fast and safe transport for your package
            </p>
            <p>
            If you want to track all of your deliveries, without wasting time checking websites - Parcel is the right app for you.
              <br/>
            This app will track your deliveries and do even more.
            </p>
          </div>
        </div>

        <div className='card mt-4 pt-2 '>
          <div className='card-body'>
                    <div>
                        <p className=''>Collection From</p> 
                  
                        <input type=" text" className='' placeholder='Area'/>
                        <input type=" text" className='ms-2' placeholder='Address'/>
                    </div>
                    <div>
                        <p className=''>Delivery To</p> 
                  
                        <input type=" text" className='' placeholder='Area'/>
                        <input type=" text" className='ms-2' placeholder='Address'/>
                    </div>
          </div>
        </div>

         
    

</div>
</div>
</div>
  )
}

export default Home;