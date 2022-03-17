import React from 'react'

function CreateParcel() {
    return (
    <div className='page '>
       
        
        <div className='home pt-2 container-fluid'>
     
            <div className='card d-flex  flex-column border border-info mt-4 ms-4 pt-2 col-10 '>
              <div className='card-body d-flex flex-row '>
                        <div className='col-5'>
                            <p className=''>Collection From</p>               
                            <input type=" text" className='' placeholder='Area'/>
                            <input type=" text" className='ms-2' placeholder='Address'/>
                        </div>
                        <div className='col-5'>
                            <p className=''>Delivery To</p> 
                            <input type=" text" className='' placeholder='Area'/>
                            <input type=" text" className='ms-2' placeholder='Address'/>
                        </div>
              </div>
              <div className='card-body d-flex flex-row'>
                        <p className='me-4'>Package</p>
                        <button className='btn btn-outline-secondary  p-2 ms-2' data-bs-toggle="tooltip" data-bs-placement="top" title="Envelope for Small items">
                        Envelope</button>
                        <button className='btn btn-outline-secondary  p-2 ms-2'>Box</button>
                        <button className='btn btn-outline-secondary  p-2 ms-2'>Documents</button>
                        <button className='btn btn-outline-secondary  p-2 ms-2'>Pallet</button>
              </div>
              <div className='card-body d-flex flex-row '>
                    <div className='d-flex flex-column pe-2 aria-describedby="input-group-right"'>
                          <p>Weight</p>
                          <div className='d-flex flex-row'>
                          <input type="text" className=''/><span className='input-group-text'>kg</span>
                          </div>
                    </div>
                    <div className='d-flex flex-column pe-2'>
                          <p>Length</p>
                          <div className='d-flex flex-row'>
                            <input type="text" className=''/> <span className='input-group-text'>cm</span>
                            </div>
                    </div>
                    <div className='d-flex flex-column pe-2'>
                          <p>Width</p>
                          <div className='d-flex flex-row'>
                            <input type="text" className=''/> <span className='input-group-text'>cm</span>
                          </div>
                    </div>
                    <div className='d-flex flex-column pe-2'>
                          <p>Height</p>
                              <div className='d-flex flex-row'>
                                <input type="text" className=''/> <span className='input-group-text'>cm</span>
                              </div>
                    </div>
              </div>
              <div className='card-body d-flex flex-row justify-content-center '>
                <button className='btn btn btn-outline-success '>Book Now</button>
              </div>
          </div>
    
    </div>
    </div>)
     }

export default CreateParcel