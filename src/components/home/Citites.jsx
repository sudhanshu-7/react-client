import React from 'react'

const Citites = () => {
    return (
        <section class="container mb-5 pb-2">
        <div class="d-flex align-items-end align-items-lg-center justify-content-between mb-4 pb-md-2">
            <div class="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
              <h2 class="h3 mb-0 me-md-4">Search Properties By City</h2>
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
        <div class="tns-carousel-wrapper tns-controls-outside-xxl tns-nav-outside tns-nav-outside-flush mx-n2">
          <div class="tns-carousel-inner row gx-4 mx-0 py-md-4 py-3" data-carousel-options="{&quot;items&quot;: 4, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;500&quot;:{&quot;items&quot;:2},&quot;768&quot;:{&quot;items&quot;:3},&quot;992&quot;:{&quot;items&quot;:4}}}">
            {/* <!-- Item--> */}
            <div class="col"><a class="card shadow-sm card-hover border-0" href="real-estate-catalog-sale.html">
                <div class="card-img-top card-img-hover"><span class="img-overlay opacity-65"></span><img src="img/real-estate/city/new-york.jpg" alt="New York" />
                  <div class="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
                    <div class="w-100 p-1">
                      {/* <!-- <div class="mb-2">
                        <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-wallet mt-n1 me-2 fs-sm align-middle"></i>Apartments for sale</h4>
                        <div class="d-flex align-items-center">
                          <div class="progress progress-light w-100">
                            <div class="progress-bar bg-danger" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                          </div><span class="text-light fs-sm ps-1 ms-2">893</span>
                        </div>
                      </div> --> */}
                      <div class="pt-1">
                        <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-home mt-n1 me-2 fs-sm align-middle"></i>Houses for rent</h4>
                        <div class="d-flex align-items-center">
                          <div class="progress progress-light w-100">
                            <div class="progress-bar bg-success" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                          </div><span class="text-light fs-sm ps-1 ms-2">3756</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body text-center">
                  <h3 class="mb-0 fs-base text-nav">Mumbai</h3>
                </div></a></div>
            {/* <!-- Item--> */}
            <div class="col"><a class="card shadow-sm card-hover border-0" href="real-estate-catalog-rent.html">
                <div class="card-img-top card-img-hover"><span class="img-overlay opacity-65"></span><img src="img/real-estate/city/chicago.jpg" alt="Chicago" />
                  <div class="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
                    <div class="w-100 p-1">
                      {/* <!-- <div class="mb-2">
                        <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-wallet mt-n1 me-2 fs-sm align-middle"></i>Apartments for sale</h4>
                        <div class="d-flex align-items-center">
                          <div class="progress progress-light w-100">
                            <div class="progress-bar bg-danger" role="progressbar" style={{width: "37%"}} aria-valuenow="37" aria-valuemin="0" aria-valuemax="100"></div>
                          </div><span class="text-light fs-sm ps-1 ms-2">268</span>
                        </div>
                      </div> --> */}
                      <div class="pt-1">
                        <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-home mt-n1 me-2 fs-sm align-middle"></i>Houses for rent</h4>
                        <div class="d-flex align-items-center">
                          <div class="progress progress-light w-100">
                            <div class="progress-bar bg-success" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                          </div><span class="text-light fs-sm ps-1 ms-2">1540</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body text-center">
                  <h3 class="mb-0 fs-base text-nav">Banglore</h3>
                </div></a></div>
            {/* <!-- Item--> */}
            <div class="col"><a class="card shadow-sm card-hover border-0" href="real-estate-catalog-sale.html">
                <div class="card-img-top card-img-hover"><span class="img-overlay opacity-65"></span><img src="img/real-estate/city/los-angeles.jpg" alt="Los Angeles" />
                  <div class="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
                    <div class="w-100 p-1">
                      {/* <!-- <div class="mb-2">
                        <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-wallet mt-n1 me-2 fs-sm align-middle"></i>Apartments for sale</h4>
                        <div class="d-flex align-items-center">
                          <div class="progress progress-light w-100">
                            <div class="progress-bar bg-danger" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                          </div><span class="text-light fs-sm ps-1 ms-2">2750</span>
                        </div>
                      </div> --> */}
                      <div class="pt-1">
                        <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-home mt-n1 me-2 fs-sm align-middle"></i>Houses for rent</h4>
                        <div class="d-flex align-items-center">
                          <div class="progress progress-light w-100">
                            <div class="progress-bar bg-success" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                          </div><span class="text-light fs-sm ps-1 ms-2">692</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body text-center">
                  <h3 class="mb-0 fs-base text-nav">Pune</h3>
                </div></a></div>
            {/* <!-- Item--> */}
            <div class="col"><a class="card shadow-sm card-hover border-0" href="real-estate-catalog-rent.html">
                <div class="card-img-top card-img-hover"><span class="img-overlay opacity-65"></span><img src="img/real-estate/city/san-diego.jpg" alt="San Diego" />
                  <div class="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
                    <div class="w-100 p-1">
                      {/* <!-- <div class="mb-2">
                        <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-wallet mt-n1 me-2 fs-sm align-middle"></i>Apartments for sale</h4>
                        <div class="d-flex align-items-center">
                          <div class="progress progress-light w-100">
                            <div class="progress-bar bg-danger" role="progressbar" style={{width: "55%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                          </div><span class="text-light fs-sm ps-1 ms-2">1739</span>
                        </div>
                      </div> --> */}
                      <div class="pt-1">
                        <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-home mt-n1 me-2 fs-sm align-middle"></i>Houses for rent</h4>
                        <div class="d-flex align-items-center">
                          <div class="progress progress-light w-100">
                            <div class="progress-bar bg-success" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                          </div><span class="text-light fs-sm ps-1 ms-2">1854</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body text-center">
                  <h3 class="mb-0 fs-base text-nav">Delhi</h3>
                </div></a></div>
            {/* <!-- Item--> */}
            <div class="col"><a class="card shadow-sm card-hover border-0" href="real-estate-catalog-sale.html">
                <div class="card-img-top card-img-hover"><span class="img-overlay opacity-65"></span><img src="img/real-estate/city/dallas.jpg" alt="Dallas" />
                  <div class="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
                    <div class="w-100 p-1">
                      {/* <!-- <div class="mb-2">
                        <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-wallet mt-n1 me-2 fs-sm align-middle"></i>Apartments for sale</h4>
                        <div class="d-flex align-items-center">
                          <div class="progress progress-light w-100">
                            <div class="progress-bar bg-danger" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                          </div><span class="text-light fs-sm ps-1 ms-2">2567</span>
                        </div>
                      </div> --> */}
                      <div class="pt-1">
                        <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-home mt-n1 me-2 fs-sm align-middle"></i>Houses for rent</h4>
                        <div class="d-flex align-items-center">
                          <div class="progress progress-light w-100">
                            <div class="progress-bar bg-success" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                          </div><span class="text-light fs-sm ps-1 ms-2">1204</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body text-center">
                  <h3 class="mb-0 fs-base text-nav">Hydreabad</h3>
                </div></a></div>
                {/* <!-- Item--> */}
            <div class="col"><a class="card shadow-sm card-hover border-0" href="real-estate-catalog-sale.html">
              <div class="card-img-top card-img-hover"><span class="img-overlay opacity-65"></span><img src="img/real-estate/city/dallas.jpg" alt="Dallas" />
                <div class="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
                  <div class="w-100 p-1">
                    {/* <!-- <div class="mb-2">
                      <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-wallet mt-n1 me-2 fs-sm align-middle"></i>Apartments for sale</h4>
                      <div class="d-flex align-items-center">
                        <div class="progress progress-light w-100">
                          <div class="progress-bar bg-danger" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><span class="text-light fs-sm ps-1 ms-2">2567</span>
                      </div>
                    </div> --> */}
                    <div class="pt-1">
                      <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-home mt-n1 me-2 fs-sm align-middle"></i>Houses for rent</h4>
                      <div class="d-flex align-items-center">
                        <div class="progress progress-light w-100">
                          <div class="progress-bar bg-success" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><span class="text-light fs-sm ps-1 ms-2">1204</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body text-center">
                <h3 class="mb-0 fs-base text-nav">Chennai</h3>
              </div></a></div>
              {/* <!-- Item--> */}
            <div class="col"><a class="card shadow-sm card-hover border-0" href="real-estate-catalog-sale.html">
              <div class="card-img-top card-img-hover"><span class="img-overlay opacity-65"></span><img src="img/real-estate/city/dallas.jpg" alt="Dallas" />
                <div class="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
                  <div class="w-100 p-1">
                    {/* <!-- <div class="mb-2">
                      <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-wallet mt-n1 me-2 fs-sm align-middle"></i>Apartments for sale</h4>
                      <div class="d-flex align-items-center">
                        <div class="progress progress-light w-100">
                          <div class="progress-bar bg-danger" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><span class="text-light fs-sm ps-1 ms-2">2567</span>
                      </div>
                    </div> --> */}
                    <div class="pt-1">
                      <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-home mt-n1 me-2 fs-sm align-middle"></i>Houses for rent</h4>
                      <div class="d-flex align-items-center">
                        <div class="progress progress-light w-100">
                          <div class="progress-bar bg-success" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><span class="text-light fs-sm ps-1 ms-2">1204</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body text-center">
                <h3 class="mb-0 fs-base text-nav">Kolkata</h3>
              </div></a></div>
              {/* <!-- Item--> */}
            <div class="col"><a class="card shadow-sm card-hover border-0" href="real-estate-catalog-sale.html">
              <div class="card-img-top card-img-hover"><span class="img-overlay opacity-65"></span><img src="img/real-estate/city/dallas.jpg" alt="Dallas" />
                <div class="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
                  <div class="w-100 p-1">
                    {/* <!-- <div class="mb-2">
                      <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-wallet mt-n1 me-2 fs-sm align-middle"></i>Apartments for sale</h4>
                      <div class="d-flex align-items-center">
                        <div class="progress progress-light w-100">
                          <div class="progress-bar bg-danger" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><span class="text-light fs-sm ps-1 ms-2">2567</span>
                      </div>
                    </div> --> */}
                    <div class="pt-1">
                      <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-home mt-n1 me-2 fs-sm align-middle"></i>Houses for rent</h4>
                      <div class="d-flex align-items-center">
                        <div class="progress progress-light w-100">
                          <div class="progress-bar bg-success" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><span class="text-light fs-sm ps-1 ms-2">1204</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body text-center">
                <h3 class="mb-0 fs-base text-nav">Ahmedabad</h3>
              </div></a></div>
              {/* <!-- Item--> */}
            <div class="col"><a class="card shadow-sm card-hover border-0" href="real-estate-catalog-sale.html">
              <div class="card-img-top card-img-hover"><span class="img-overlay opacity-65"></span><img src="img/real-estate/city/dallas.jpg" alt="Dallas" />
                <div class="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
                  <div class="w-100 p-1">
                    {/* <!-- <div class="mb-2">
                      <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-wallet mt-n1 me-2 fs-sm align-middle"></i>Apartments for sale</h4>
                      <div class="d-flex align-items-center">
                        <div class="progress progress-light w-100">
                          <div class="progress-bar bg-danger" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><span class="text-light fs-sm ps-1 ms-2">2567</span>
                      </div>
                    </div> --> */}
                    <div class="pt-1">
                      <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-home mt-n1 me-2 fs-sm align-middle"></i>Houses for rent</h4>
                      <div class="d-flex align-items-center">
                        <div class="progress progress-light w-100">
                          <div class="progress-bar bg-success" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><span class="text-light fs-sm ps-1 ms-2">1204</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body text-center">
                <h3 class="mb-0 fs-base text-nav">Surat</h3>
              </div></a></div>
              {/* <!-- Item--> */}
            <div class="col"><a class="card shadow-sm card-hover border-0" href="real-estate-catalog-sale.html">
              <div class="card-img-top card-img-hover"><span class="img-overlay opacity-65"></span><img src="img/real-estate/city/dallas.jpg" alt="Dallas" />
                <div class="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
                  <div class="w-100 p-1">
                    {/* <!-- <div class="mb-2">
                      <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-wallet mt-n1 me-2 fs-sm align-middle"></i>Apartments for sale</h4>
                      <div class="d-flex align-items-center">
                        <div class="progress progress-light w-100">
                          <div class="progress-bar bg-danger" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><span class="text-light fs-sm ps-1 ms-2">2567</span>
                      </div>
                    </div> --> */}
                    <div class="pt-1">
                      <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-home mt-n1 me-2 fs-sm align-middle"></i>Houses for rent</h4>
                      <div class="d-flex align-items-center">
                        <div class="progress progress-light w-100">
                          <div class="progress-bar bg-success" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><span class="text-light fs-sm ps-1 ms-2">1204</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body text-center">
                <h3 class="mb-0 fs-base text-nav">Vadodara</h3>
              </div></a></div>
          </div>
        </div>
      </section>
    )
}

export default Citites
