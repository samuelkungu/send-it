import React from 'react'

function Carousel() {
  return (
    <div>
        

    <div id="collapse" class="carousel slide" data-bs-ride="carousel">


        <div class="carousel-indicators">
              <button type="button" data-bs-target="#collapse" data-bs-slide-to="0" class="active"></button>
              <button type="button" data-bs-target="#collapse" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#collapse" data-bs-slide-to="2"></button>
        </div>


    <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/images/1.png" alt="Los Angeles" class="d-block w-100"/>
              </div>
              <div class="carousel-item">
                <img src="/images/2.png" alt="Chicago" class="d-block w-100"/>
              </div>
              <div class="carousel-item">
                <img src="/images/3.png" alt="New York" class="d-block w-100"/>
              </div>
    </div>


        <button class="carousel-control-prev" type="button" data-bs-target="#collapse" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#collapse" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
        </button>
        
    </div>



    </div>
  )
}

export default Carousel