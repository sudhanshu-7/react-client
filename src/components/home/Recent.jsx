import React from 'react'

const Recent = () => {
    return (
        <section class="container pb-4 pt-1 mb-5">
        <div class="d-flex align-items-end align-items-lg-center justify-content-between mb-4 pb-md-2">
          <div class="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
            <h2 class="h3 mb-0 me-md-4">Added Last Week</h2>
            <div class="dropdown d-md-none" data-bs-toggle="select">
              <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"><span class="dropdown-toggle-label">Houses</span></button>
              <input type="hidden" />
              <div class="dropdown-menu"><a class="dropdown-item" href="#"><span class="dropdown-item-label">Apartments</span></a><a class="dropdown-item" href="#"><span class="dropdown-item-label">Houses</span></a><a class="dropdown-item" href="#"><span class="dropdown-item-label">Rooms</span></a><a class="dropdown-item" href="#"><span class="dropdown-item-label">Commercial</span></a></div>
            </div>
            <ul class="nav nav-tabs d-none d-md-flex ps-lg-2 mb-0">
              <li class="nav-item"><a class="nav-link fs-sm mb-2 mb-md-0" href="#">Apartments</a></li>
              <li class="nav-item"><a class="nav-link fs-sm  mb-2 mb-md-0" href="#">Houses</a></li>
            </ul>
          </div><a class="btn btn-link fw-normal d-none d-lg-block p-0" href="real-estate-catalog-rent.html">View all<i class="fi-arrow-long-right ms-2"></i></a>
        </div>
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card bg-size-cover bg-position-center border-0 overflow-hidden h-100" style= {{backgroundImage:"url(img/real-estate/recent/01.jpg)"}}><span class="img-gradient-overlay"></span>
              <div class="card-body content-overlay pb-0">
                <div class="d-flex"><span class="badge bg-success fs-sm me-2">Verified</span><span class="badge bg-info fs-sm">New</span></div>
              </div>
              <div class="card-footer content-overlay border-0 pt-0 pb-4">
                <div class="d-sm-flex justify-content-between align-items-end pt-5 mt-2 mt-sm-5"><a class="text-decoration-none text-light pe-2" href="real-estate-single.html">
                    <div class="fs-sm text-uppercase pt-2 mb-1">For rental</div>
                    <h3 class="h5 text-light mb-1">Luxury Rental Villa</h3>
                    <div class="fs-sm opacity-70"><i class="fi-map-pin me-1"></i>118-11 Sutphin Blvd Jamaica, NY 11434</div></a>
                  <div class="btn-group ms-n2 ms-sm-0 mt-3"><a class="btn btn-primary px-3" href="real-estate-single.html" style={{height:"2.75rem"}} >From $3,850</a>
                    <button class="btn btn-primary btn-icon border-end-0 border-top-0 border-bottom-0 border-light fs-sm" type="button"><i class="fi-heart"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card bg-size-cover bg-position-center border-0 overflow-hidden mb-4" style= {{backgroundImage:"url(img/real-estate/recent/02.jpg)"}}><span class="img-gradient-overlay"></span>
              <div class="card-body content-overlay pb-0"><span class="badge bg-info fs-sm">New</span></div>
              <div class="card-footer content-overlay border-0 pt-0 pb-4">
                <div class="d-sm-flex justify-content-between align-items-end pt-5 mt-2 mt-sm-5"><a class="text-decoration-none text-light pe-2" href="real-estate-single.html">
                    <div class="fs-sm text-uppercase pt-2 mb-1">For sale</div>
                    <h3 class="h5 text-light mb-1">Duplex with Garage</h3>
                    <div class="fs-sm opacity-70"><i class="fi-map-pin me-1"></i>21 Pulaski Road Kings Park, NY 11754</div></a>
                  <div class="btn-group ms-n2 ms-sm-0 mt-3"><a class="btn btn-primary px-3" href="real-estate-single.html" style={{height:"2.75rem"}}>$200,410</a>
                    <button class="btn btn-primary btn-icon border-end-0 border-top-0 border-bottom-0 border-light fs-sm" type="button"><i class="fi-heart"></i></button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bg-size-cover bg-position-center border-0 overflow-hidden" style= {{backgroundImage:"url(img/real-estate/recent/02.jpg)"}}><span class="img-gradient-overlay"></span>
              <div class="card-body content-overlay pb-0"><span class="badge bg-info fs-sm">New</span></div>
              <div class="card-footer content-overlay border-0 pt-0 pb-4">
                <div class="d-sm-flex justify-content-between align-items-end pt-5 mt-2 mt-sm-5"><a class="text-decoration-none text-light pe-2" href="real-estate-single.html">
                    <div class="fs-sm text-uppercase pt-2 mb-1">For sale</div>
                    <h3 class="h5 text-light mb-1">Country House</h3>
                    <div class="fs-sm opacity-70"><i class="fi-map-pin me-1"></i>6954 Grand AveMaspeth, NY 11378</div></a>
                  <div class="btn-group ms-n2 ms-sm-0 mt-3"><a class="btn btn-primary px-3" href="real-estate-single.html" style={{height:"2.75rem"}}>$162,000</a>
                    <button class="btn btn-primary btn-icon border-end-0 border-top-0 border-bottom-0 border-light fs-sm" type="button"><i class="fi-heart"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Recent
