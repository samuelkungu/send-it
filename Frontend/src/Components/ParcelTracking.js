import React from 'react'
import NavBar from './NavBar'

function ParcelTracking() {
  return (
    <div>
     
     <NavBar/>
     <div class="home pt-5"> <div className='container-fluid'> 
     <div className='card mt-4 pt-4 col-6'>
         <div className='card-title '> 
              <h4 className='ps-3'>Enter Your Tracking Number</h4>

              <div className='card-body '>
                <input type="text" className='form-group p-2 col-8' placeholder='Tracking Number' />
                <button className='btn btn-outline-secondary  p-2 ms-2'> Track Your Parcel </button>
              </div>
          </div>
     </div>
     
    </div> 
    </div> </div>
  )
}

export default ParcelTracking