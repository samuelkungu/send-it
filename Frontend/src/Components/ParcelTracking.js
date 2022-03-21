import React from 'react'

function ParcelTracking() {
  return (
<div className='page '>

     <div class="home container-fluid"> 

     <div className='d-flex align-self-center'>
            <h4>Parcel Tracking</h4>
      </div>

     <div className='card d-flex align-self-center border border-info col-8'>
         <div className='card-title '> 
              <h4 className='ps-3'>Enter Your Tracking Number</h4>

              <div className='card-body flex-row '>
                <input type="text" className='form-group p-2 col-9' placeholder=' Order No.' />
                <button className='btn btn-outline-success  p-2 ms-2'> Track Your Parcel </button>

                <p className='pt-5'>
                There is nothing simpler than tracking your parcel online,
                 simply enter tracking number into section Parcel tracking to track your package.
                 You will instantly get detailed information on parcel’s movement to feel secure. 
                </p>
              </div>
          </div>
     </div>
     
    </div> 

</div>)
}

export default ParcelTracking