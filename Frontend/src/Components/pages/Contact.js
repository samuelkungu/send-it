import React from 'react'

function Contact() {
  return (
<div className='page '>
<div class="home pt-2 container-fluid">
<div className='card mt-4 mx-4  pt-4  '>
<div className='card-body'>
<div className='d-flex flex-column' >
            <div className='contact p-3'>
                <h3> Contact Us </h3>
                  <p> Next day deliveries to Nairobi, ,Nyeri towns. <br/>
                    Quote a price and get best parcel delivery offers only</p>
            </div>

            <div className='contact d-flex flex-row p-1 '>
                    <div className='m-2 p-2 col '>
                          <p>Company code: 300151980</p>
                          <p>Company VAT No.: LT100001986013</p>
                    </div>
                    <div className='m-2 p-2 col '>
                          <p>NAIROBI</p>
                          <p>Monday to Friday – 08:00-17:00 (GMT+3)</p>
                    </div>
                    <div className='m-2 p-2 col '>
                          <p>NYERI</p>
                          <p>Monday to Friday – 08:00-17:00 (GMT+3)</p>
                    </div>
                    
            </div>
            <div className='contact d-flex flex-row p-1 '>
                    <div className='m-2 p-2 col  '>
                          <h5>Customer service</h5>
                          <p>+254 700 350 300</p>
                          <p>info@sendit.com</p>
                    </div>
                    <div className='m-2 p-2 col '>
                          <h5>Sales</h5>
                          <p>+254 700 773 041</p>
                          <p>sales@sendit.com</p>
                    </div>
                    <div className='m-2 p-2 col  '>
                          <h5>Book Keeping</h5>
                          <p>+254 745 434 767</p>
                          <p>finance@sendit.com</p>
                    </div>
                    
            </div >

            <div className='contact d-flex flex-row ps-4 '>
                <p>What would you like to talk to us about?</p>
            </div>

            <div className='contact-cards d-flex flex-row '>
                  <div className='column'>
                      <div className='card-contact'>
                      <p>How much does it cost?</p>
                      </div>
                  </div>
                  <div className='column'>
                      <div className='card-contact'>
                      <p>Online booking</p>
                      </div>
                  </div><div className='column'>
                      <div className='card-contact'>
                      <p>Collection and delivery</p>
                      </div>
                  </div>
                  <div className='column'>
                      <div className='card-contact'>
                      <p>Other questions</p>
                      </div>
                  </div>
                  <div className='column '>
                      <div className='card-contact'>
                      <p>Lost and damaged parcels</p>
                      </div>
                  </div>
                  
            </div>

            <div className='card-body d-flex flex-row justify-content-center '>
                <button className='btn btn btn-outline-success '>Book Now</button>
              </div>

</div>
</div>
</div>
</div>
</div>)
}

export default Contact