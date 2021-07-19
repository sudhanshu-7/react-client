import React from 'react'

const PropertyList = () => {
    return (
        <div className="container-fluid mt-5 pt-5 p-0">
        
        <div className="row g-0 mt-n3">
          
          {/* <!-- Filters sidebar (Offcanvas on mobile)--> */}
          
          <aside className="col-lg-4 col-xl-3 border-top-lg border-end-lg shadow-sm px-3 px-xl-4 px-xxl-5 pt-lg-2">
            <div className="offcanvas offcanvas-start offcanvas-collapse" id="filters-sidebar">
              <div className="offcanvas-header d-flex d-lg-none align-items-center">
                <h2 className="h5 mb-0">Filters</h2>
                <button className="btn-close" type="button" data-bs-dismiss="offcanvas"></button>
              </div>
              <div className="offcanvas-header d-block border-bottom pt-0 pt-lg-4 px-lg-0">
              </div>
              <div className="offcanvas-body py-lg-4">
                <div className="pb-4 mb-2">
                  <h3 className="h6">Location</h3>
                  <div className="col-sm-12 mb-3">
                    <label className="form-label" for="ap-zip">Choose city <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" id="ap-zip" placeholder="Enter city name" value="" required />
                  </div>
                  <div className="col-sm-12 mb-3">
                    <label className="form-label" for="ap-zip">Choose area <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" id="ap-zip" placeholder="Enter area name" value="" required />
                  </div>
                </div>
                <div className="pb-4 mb-2">
                  <h3 className="h6">Property type</h3>
                  <div className="overflow-auto" data-simplebar data-simplebar-auto-hide="false" style={{"height": "4rem"}}>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="house" />
                      <label className="form-check-label fs-sm" for="house">House</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="apartment" checked />
                      <label className="form-check-label fs-sm" for="apartment">Apartment</label>
                    </div>
                  </div>
                </div>
                <div className="pb-4 mb-2">
                  <h3 className="h6">BHK type</h3>
                  <div className="overflow-auto" data-simplebar data-simplebar-auto-hide="false" style={{"height": "8rem"}}>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="house" />
                      <label className="form-check-label fs-sm" for="house">1 BHK</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="apartment" checked />
                      <label className="form-check-label fs-sm" for="apartment">2 BHK</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="apartment" checked />
                      <label className="form-check-label fs-sm" for="apartment">3 BHK</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="apartment" checked />
                      <label className="form-check-label fs-sm" for="apartment">3+ BHK</label>
                    </div>
                  </div>
                </div>
                <div className="pb-4 mb-2">
                  <h3 className="h6">Furnished Status</h3>
                  <div className="overflow-auto" data-simplebar data-simplebar-auto-hide="false" style={{"height": "6rem"}}>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="house" />
                      <label className="form-check-label fs-sm" for="house">Furnished</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="apartment" checked />
                      <label className="form-check-label fs-sm" for="apartment">Semi Furnished</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="apartment" checked />
                      <label className="form-check-label fs-sm" for="apartment">Unfurnished</label>
                    </div>
                  </div>
                </div>

                <div className="pb-4 mb-2">
                  <h3 className="h6 pt-1">Rent</h3>
                  <div className="d-flex align-items-center">
                    <input className="form-control w-100" type="number" min="20" max="500" step="10" placeholder="Min" />
                    <div className="mx-2">&mdash;</div>
                    <input className="form-control w-100" type="number" min="20" max="500" step="10" placeholder="Max" />
                  </div>
                </div>
                
                <div className="pb-4 mb-2">
                  <h3 className="h6 pt-1">Carpet Area</h3>
                  <div className="d-flex align-items-center">
                    <input className="form-control w-100" type="number" min="20" max="500" step="10" placeholder="Min" />
                    <div className="mx-2">&mdash;</div>
                    <input className="form-control w-100" type="number" min="20" max="500" step="10" placeholder="Max" />
                  </div>
                </div>

                <div className="pb-4 mb-2">
                  <h3 className="h6">Amenities</h3>
                  <div className="overflow-auto" data-simplebar data-simplebar-auto-hide="false" style={{"height": "11rem"}}>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="wifi" checked />
                      <label className="form-check-label" for="wifi">Lift</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="air-condition" checked />
                      <label className="form-check-label" for="air-condition">Gas pipeline</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="balcony" />
                      <label className="form-check-label" for="balcony">25X7 Water Supply</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="garage" />
                      <label className="form-check-label" for="garage">25X7 Security</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gym" />
                      <label className="form-check-label" for="gym">Car Parking</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="free-parking" checked />
                      <label className="form-check-label" for="free-parking">Visitor Parking</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="pets-friendly" />
                        <label className="form-check-label" for="pets-friendly">Children's play area</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="pool" />
                        <label className="form-check-label" for="pool">Landscape Garden</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="bar" />
                      <label className="form-check-label" for="bar">Tree Planting</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="tv" checked />
                      <label className="form-check-label" for="tv">Air conditioning</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="linens" checked />
                      <label className="form-check-label" for="linens">CCTV</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="heating" checked />
                      <label className="form-check-label" for="heating">Fire safety</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="dishwasher" />
                        <label className="form-check-label" for="dishwasher">Internet services</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="iron" checked />
                        <label className="form-check-label" for="iron">Gym</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="hair-dryer" checked />
                        <label className="form-check-label" for="hair-dryer">Club house</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="kitchen" checked />
                        <label className="form-check-label" for="kitchen">Swimming pool</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="breakfast" />
                        <label className="form-check-label" for="breakfast">Rain water harvesting</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="security-cameras" />
                        <label className="form-check-label" for="security-cameras">Sewage treatment plant</label>
                      </div>
                      <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="House keeping" />
                          <label className="form-check-label" for="House keeping">House keeping</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Power backup" />
                          <label className="form-check-label" for="Power backup">Power backup</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Shopping center" />
                          <label className="form-check-label" for="Shopping center">Shopping center</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Park" />
                          <label className="form-check-label" for="Park">Park</label>
                        </div>
                  </div>
                </div>
                
                <div className="pb-4 mb-2">
                  <h3 className="h6">Additional options</h3>
                  <select className="form-select mb-2">
                    <option value="" selected disabled>Tenent preferred</option>
                    <option value="Chicago">Family</option>
                    <option value="Dallas">Bachelors</option>
                    <option value="Los Angeles">Family/Bachelors</option>
                  </select>
                  <select className="form-select">
                    <option value="" selected disabled>Car Parking</option>
                    <option value="Brooklyn">1</option>
                    <option value="Brooklyn">2</option>
                    <option value="Brooklyn">3</option>
                    <option value="Brooklyn">4</option>
                  </select>
                </div>
                <div className="border-top py-4">
                  <button className="btn btn-outline-primary" type="button"><i className="fi-rotate-right me-2"></i>Reset filters</button>
                </div>
              </div>
            </div>
          </aside>

          {/* <!-- Page content--> */}
          <div className="col-lg-8 col-xl-9 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5">
            {/* <!-- Map popup--> */}
            <div className="map-popup invisible" id="map">
              <button className="btn btn-icon btn-light btn-sm shadow-sm rounded-circle" type="button" data-bs-toggle-className="invisible" data-bs-target="#map"><i className="fi-x fs-xs"></i></button>
              <div className="interactive-map" data-map-options-json="json/map-options-real-estate-rent.json"></div>
            </div>
            {/* <!-- Breadcrumb--> */}
            <nav className="mb-4 pt-md-3" aria-label="Breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="real-estate-home.html">Home</a></li>
                <li className="breadcrumb-item"><a href="real-estate-account-info.html">Account</a></li>
                <li className="breadcrumb-item active" aria-current="page">My Properties</li>
              </ol>
            </nav>
            
            {/* <!-- Title--> */}
            <div className="d-sm-flex align-items-center justify-content-between pb-3 pb-sm-4">
              <h1 className="h2 mb-sm-0">Property for rent</h1>
            </div>
            {/* <!-- Sorting--> */}
            <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch my-2">
              <div className="d-flex align-items-center flex-shrink-0">
                <label className="fs-sm me-2 pe-1 text-nowrap" for="sortby"><i className="fi-arrows-sort text-muted mt-n1 me-2"></i>Sort by:</label>
                <select className="form-select form-select-sm" id="sortby">
                  <option>Newest</option>
                  <option>Low - High Price</option>
                  <option>High - Low Price</option>
                </select>
              </div>
              <hr className="d-none d-sm-block w-100 mx-4" />
              <div className="d-none d-sm-flex align-items-center flex-shrink-0 text-muted"><i className="fi-check-circle me-2"></i><span className="fs-sm mt-n1">148 results</span></div>
            </div>
            {/* <!-- Catalog grid--> */}
            <div className="row g-4 py-4">
              {/* <!-- Item--> */}
              <div className="col-sm-6 col-xl-6">
                <div className="card shadow-sm card-hover border-0 h-100">
                  <div className="tns-carousel-wrapper card-img-top card-img-hover"><a className="img-overlay" href="real-estate-single.html"></a>
                    <div className="position-absolute start-0 top-0 pt-3 ps-3"><span className="d-table badge bg-success mb-1">Verified</span><span className="d-table badge bg-info">New</span></div>
                    <div className="content-overlay end-0 top-0 pt-3 pe-3">
                      <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart"></i></button>
                    </div>
                    <div className="tns-carousel-inner"><img src="img/real-estate/catalog/06.jpg" alt="Image" /><img src="img/real-estate/catalog/06.jpg" alt="Image" /></div>
                  </div>
                  <div className="card-body position-relative pb-3">
                    <h4 className="mb-1 fs-xs fw-normal text-uppercase text-primary">For rent</h4>
                    <h3 className="h6 mb-2 fs-base"><a className="nav-link stretched-link" href="real-estate-single.html">2 BHK apartment in usmanpura | 1000 sqft</a></h3>
                    <p className="mb-2 fs-sm text-muted">Address xyz</p>
                    <div className="fw-bold"><i className="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>₹1,650 </div>
                    <p className="mb-2 fs-sm text-muted">See Other Charges*</p>
                </div>

                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td><i className="fi-apartment ms-1 mt-n1 fs-lg text-muted"></i> 2 out of 7 floors</td>
                        <td><i className="fi-bed ms-1 mt-n1 fs-lg text-muted"></i> Semi Furnished</td>
                      </tr>
                      <tr>
                        <td><i className="fi-users ms-1 mt-n1 fs-lg text-muted"></i> Family/Bachelors</td>
                        <td><i className="fi-car ms-1 mt-n1 fs-lg text-muted"></i> 2 Car Parking</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                  
                    <button className="btn btn-primary" type="submit">Enquire Now</button>

                </div>
              </div>
              {/* <!-- Item--> */}
              <div className="col-sm-6 col-xl-6">
                <div className="card shadow-sm card-hover border-0 h-100">
                  <div className="tns-carousel-wrapper card-img-top card-img-hover"><a className="img-overlay" href="real-estate-single.html"></a>
                    <div className="position-absolute start-0 top-0 pt-3 ps-3"><span className="d-table badge bg-info">New</span></div>
                    <div className="content-overlay end-0 top-0 pt-3 pe-3">
                      <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart"></i></button>
                    </div>
                    <div className="tns-carousel-inner"><img src="img/real-estate/catalog/07.jpg" alt="Image" /><img src="img/real-estate/catalog/07.jpg" alt="Image" /></div>
                  </div>
                  <div className="card-body position-relative pb-3">
                    <h4 className="mb-1 fs-xs fw-normal text-uppercase text-primary">For rent</h4>
                    <h3 className="h6 mb-2 fs-base"><a className="nav-link stretched-link" href="real-estate-single.html">…... BHK …….. for rent in ………. | sqft</a></h3>
                    <p className="mb-2 fs-sm text-muted">Address xyz</p>
                    <div className="fw-bold"><i className="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>₹2,000</div>
                  <div className=" pt-3 "><span className="d-inline-block fs-sm"><i className="fi-bed fs-lg text-muted"></i>  3 Bedrooms</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-bath ms-1 mt-n1 fs-lg text-muted"></i> 2 Bathrooms</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-car ms-1 mt-n1 fs-lg text-muted"></i> 1 Parking</span></div>
                  <div className=" pt-3"><span className="d-inline-block  fs-sm"><i className="fi-align-left fs-lg text-muted"></i>  2 Out of 7 Floors</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-tv ms-1 mt-n1 fs-lg text-muted"></i> Furnished</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-man ms-1 mt-n1 fs-lg text-muted"></i> Bachelors</span></div>
                  </div>
                  <button className="btn btn-primary" type="submit">Enquire Now</button>
                
                </div>
              </div>
              {/* <!-- Item--> */}
              <div className="col-sm-6 col-xl-6">
                <div className="card shadow-sm card-hover border-0 h-100">
                  <div className="tns-carousel-wrapper card-img-top card-img-hover"><a className="img-overlay" href="real-estate-single.html"></a>
                    <div className="position-absolute start-0 top-0 pt-3 ps-3"><span className="d-table badge bg-info">New</span></div>
                    <div className="content-overlay end-0 top-0 pt-3 pe-3">
                      <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart"></i></button>
                    </div>
                    <div className="tns-carousel-inner"><img src="img/real-estate/catalog/08.jpg" alt="Image" /><img src="img/real-estate/catalog/08.jpg" alt="Image" /></div>
                  </div>
                  <div className="card-body position-relative pb-3">
                    <h4 className="mb-1 fs-xs fw-normal text-uppercase text-primary">For rent</h4>
                    <h3 className="h6 mb-2 fs-base"><a className="nav-link stretched-link" href="real-estate-single.html">…... BHK …….. for rent in ………. | sqft</a></h3>
                    <p className="mb-2 fs-sm text-muted">Address xyz</p>
                    <div className="fw-bold"><i className="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>₹1,350</div>
                  <div className=" pt-3 "><span className="d-inline-block fs-sm"><i className="fi-bed fs-lg text-muted"></i>  3 Bedrooms</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-bath ms-1 mt-n1 fs-lg text-muted"></i> 2 Bathrooms</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-car ms-1 mt-n1 fs-lg text-muted"></i> 1 Parking</span></div>
                  <div className=" pt-3"><span className="d-inline-block  fs-sm"><i className="fi-align-left fs-lg text-muted"></i>  2 Out of 7 Floors</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-tv ms-1 mt-n1 fs-lg text-muted"></i> Furnished</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-man ms-1 mt-n1 fs-lg text-muted"></i> Bachelors</span></div>
                  </div>
                  <button className="btn btn-primary" type="submit">Enquire Now</button>
               
                </div>
              </div>
              {/* <!-- Item--> */}
              <div className="col-sm-6 col-xl-6">
                <div className="card shadow-sm card-hover border-0 h-100">
                  <div className="tns-carousel-wrapper card-img-top card-img-hover"><a className="img-overlay" href="real-estate-single.html"></a>
                    <div className="position-absolute start-0 top-0 pt-3 ps-3"><span className="d-table badge bg-success">Verified</span></div>
                    <div className="content-overlay end-0 top-0 pt-3 pe-3">
                      <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart"></i></button>
                    </div>
                    <div className="tns-carousel-inner"><img src="img/real-estate/catalog/09.jpg" alt="Image" /><img src="img/real-estate/catalog/09.jpg" alt="Image" /></div>
                  </div>
                  <div className="card-body position-relative pb-3">
                    <h4 className="mb-1 fs-xs fw-normal text-uppercase text-primary">For rent</h4>
                    <h3 className="h6 mb-2 fs-base"><a className="nav-link stretched-link" href="real-estate-single.html">…... BHK …….. for rent in ………. | sqft</a></h3>
                    <p className="mb-2 fs-sm text-muted">Address xyz</p>
                    <div className="fw-bold"><i className="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>₹2,400</div>
                  <div className=" pt-3 "><span className="d-inline-block fs-sm"><i className="fi-bed fs-lg text-muted"></i>  3 Bedrooms</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-bath ms-1 mt-n1 fs-lg text-muted"></i> 2 Bathrooms</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-car ms-1 mt-n1 fs-lg text-muted"></i> 1 Parking</span></div>
                  <div className=" pt-3"><span className="d-inline-block  fs-sm"><i className="fi-align-left fs-lg text-muted"></i>  2 Out of 7 Floors</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-tv ms-1 mt-n1 fs-lg text-muted"></i> Furnished</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-man ms-1 mt-n1 fs-lg text-muted"></i> Bachelors</span></div>
                  </div>
                  <button className="btn btn-primary" type="submit">Enquire Now</button>
               
                </div>
              </div>
              {/* <!-- Item--> */}
              <div className="col-sm-6 col-xl-6">
                <div className="card shadow-sm card-hover border-0 h-100">
                  <div className="tns-carousel-wrapper card-img-top card-img-hover"><a className="img-overlay" href="real-estate-single.html"></a>
                    <div className="position-absolute start-0 top-0 pt-3 ps-3"><span className="d-table badge bg-success mb-1">Verified</span><span className="d-table badge bg-danger">Featured</span></div>
                    <div className="content-overlay end-0 top-0 pt-3 pe-3">
                      <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart"></i></button>
                    </div>
                    <div className="tns-carousel-inner"><img src="img/real-estate/catalog/10.jpg" alt="Image" /><img src="img/real-estate/catalog/10.jpg" alt="Image" /></div>
                  </div>
                  <div className="card-body position-relative pb-3">
                    <h4 className="mb-1 fs-xs fw-normal text-uppercase text-primary">For rent</h4>
                    <h3 className="h6 mb-2 fs-base"><a className="nav-link stretched-link" href="real-estate-single.html">…... BHK …….. for rent in ………. | sqft</a></h3>
                    <p className="mb-2 fs-sm text-muted">Address xyz</p>
                    <div className="fw-bold"><i className="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>From ₹550</div>
                  <div className=" pt-3 "><span className="d-inline-block fs-sm"><i className="fi-bed fs-lg text-muted"></i>  3 Bedrooms</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-bath ms-1 mt-n1 fs-lg text-muted"></i> 2 Bathrooms</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-car ms-1 mt-n1 fs-lg text-muted"></i> 1 Parking</span></div>
                  <div className=" pt-3"><span className="d-inline-block  fs-sm"><i className="fi-align-left fs-lg text-muted"></i>  2 Out of 7 Floors</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-tv ms-1 mt-n1 fs-lg text-muted"></i> Furnished</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-man ms-1 mt-n1 fs-lg text-muted"></i> Bachelors</span></div>
                  </div>
                  <button className="btn btn-primary" type="submit">Enquire Now</button>
               
                </div>
              </div>
              {/* <!-- Item--> */}
              <div className="col-sm-6 col-xl-6">
                <div className="card shadow-sm card-hover border-0 h-100">
                  <div className="tns-carousel-wrapper card-img-top card-img-hover"><a className="img-overlay" href="real-estate-single.html"></a>
                    <div className="position-absolute start-0 top-0 pt-3 ps-3"><span className="d-table badge bg-info">New</span></div>
                    <div className="content-overlay end-0 top-0 pt-3 pe-3">
                      <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart"></i></button>
                    </div>
                    <div className="tns-carousel-inner"><img src="img/real-estate/catalog/11.jpg" alt="Image" /><img src="img/real-estate/catalog/11.jpg" alt="Image" /></div>
                  </div>
                  <div className="card-body position-relative pb-3">
                    <h4 className="mb-1 fs-xs fw-normal text-uppercase text-primary">For rent</h4>
                    <h3 className="h6 mb-2 fs-base"><a className="nav-link stretched-link" href="real-estate-single.html">…... BHK …….. for rent in ………. | sqft</a></h3>
                    <p className="mb-2 fs-sm text-muted">Address xyz</p>
                    <div className="fw-bold"><i className="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>₹680</div>
                  <div className=" pt-3 "><span className="d-inline-block fs-sm"><i className="fi-bed fs-lg text-muted"></i>  3 Bedrooms</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-bath ms-1 mt-n1 fs-lg text-muted"></i> 2 Bathrooms</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-car ms-1 mt-n1 fs-lg text-muted"></i> 1 Parking</span></div>
                  <div className=" pt-3"><span className="d-inline-block  fs-sm"><i className="fi-align-left fs-lg text-muted"></i>  2 Out of 7 Floors</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-tv ms-1 mt-n1 fs-lg text-muted"></i> Furnished</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-man ms-1 mt-n1 fs-lg text-muted"></i> Bachelors</span></div>
                  </div>
                  <button className="btn btn-primary" type="submit">Enquire Now</button>
                
                </div>
              </div>
              {/* <!-- Item--> */}
              <div className="col-sm-6 col-xl-6">
                <div className="card shadow-sm card-hover border-0 h-100">
                  <div className="tns-carousel-wrapper card-img-top card-img-hover"><a className="img-overlay" href="real-estate-single.html"></a>
                    <div className="position-absolute start-0 top-0 pt-3 ps-3"><span className="d-table badge bg-danger">Featured</span></div>
                    <div className="content-overlay end-0 top-0 pt-3 pe-3">
                      <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart"></i></button>
                    </div>
                    <div className="tns-carousel-inner"><img src="img/real-estate/catalog/12.jpg" alt="Image" /><img src="img/real-estate/catalog/12.jpg" alt="Image" /></div>
                  </div>
                  <div className="card-body position-relative pb-3">
                    <h4 className="mb-1 fs-xs fw-normal text-uppercase text-primary">For rent</h4>
                    <h3 className="h6 mb-2 fs-base"><a className="nav-link stretched-link" href="real-estate-single.html">…... BHK …….. for rent in ………. | sqft</a></h3>
                    <p className="mb-2 fs-sm text-muted">Address xyz</p>
                    <div className="fw-bold"><i className="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>From ₹4,000</div>
                  <div className=" pt-3 "><span className="d-inline-block fs-sm"><i className="fi-bed fs-lg text-muted"></i>  3 Bedrooms</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-bath ms-1 mt-n1 fs-lg text-muted"></i> 2 Bathrooms</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-car ms-1 mt-n1 fs-lg text-muted"></i> 1 Parking</span></div>
                  <div className=" pt-3"><span className="d-inline-block  fs-sm"><i className="fi-align-left fs-lg text-muted"></i>  2 Out of 7 Floors</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-tv ms-1 mt-n1 fs-lg text-muted"></i> Furnished</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-man ms-1 mt-n1 fs-lg text-muted"></i> Bachelors</span></div>
                  </div>
                  <button className="btn btn-primary" type="submit">Enquire Now</button>
                
                </div>
              </div>
              {/* <!-- Item--> */}
              <div className="col-sm-6 col-xl-6">
                <div className="card shadow-sm card-hover border-0 h-100">
                  <div className="tns-carousel-wrapper card-img-top card-img-hover"><a className="img-overlay" href="real-estate-single.html"></a>
                    <div className="position-absolute start-0 top-0 pt-3 ps-3"><span className="d-table badge bg-success">Verified</span></div>
                    <div className="content-overlay end-0 top-0 pt-3 pe-3">
                      <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart"></i></button>
                    </div>
                    <div className="tns-carousel-inner"><img src="img/real-estate/catalog/13.jpg" alt="Image" /><img src="img/real-estate/catalog/13.jpg" alt="Image" /></div>
                  </div>
                  <div className="card-body position-relative pb-3">
                    <h4 className="mb-1 fs-xs fw-normal text-uppercase text-primary">For rent</h4>
                    <h3 className="h6 mb-2 fs-base"><a className="nav-link stretched-link" href="real-estate-single.html">…... BHK …….. for rent in ………. | sqft</a></h3>
                    <p className="mb-2 fs-sm text-muted">Address xyz</p>
                    <div className="fw-bold"><i className="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>₹8,000</div>
                  <div className=" pt-3 "><span className="d-inline-block fs-sm"><i className="fi-bed fs-lg text-muted"></i>  3 Bedrooms</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-bath ms-1 mt-n1 fs-lg text-muted"></i> 2 Bathrooms</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-car ms-1 mt-n1 fs-lg text-muted"></i> 1 Parking</span></div>
                  <div className=" pt-3"><span className="d-inline-block  fs-sm"><i className="fi-align-left fs-lg text-muted"></i>  2 Out of 7 Floors</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-tv ms-1 mt-n1 fs-lg text-muted"></i> Furnished</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-man ms-1 mt-n1 fs-lg text-muted"></i> Bachelors</span></div>
                  </div>
                  <button className="btn btn-primary" type="submit">Enquire Now</button>
                
                </div>
              </div>
              {/* <!-- Item--> */}
              <div className="col-sm-6 col-xl-6">
                <div className="card shadow-sm card-hover border-0 h-100">
                  <div className="tns-carousel-wrapper card-img-top card-img-hover"><a className="img-overlay" href="real-estate-single.html"></a>
                    <div className="content-overlay end-0 top-0 pt-3 pe-3">
                      <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart"></i></button>
                    </div>
                    <div className="tns-carousel-inner"><img src="img/real-estate/catalog/15.jpg" alt="Image" /><img src="img/real-estate/catalog/15.jpg" alt="Image" /></div>
                  </div>
                  <div className="card-body position-relative pb-3">
                    <h4 className="mb-1 fs-xs fw-normal text-uppercase text-primary">For rent</h4>
                    <h3 className="h6 mb-2 fs-base"><a className="nav-link stretched-link" href="real-estate-single.html">…... BHK …….. for rent in ………. | sqft</a></h3>
                    <p className="mb-2 fs-sm text-muted">Address xyz</p>
                    <div className="fw-bold"><i className="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>₹1,200</div>
                  <div className=" pt-3 "><span className="d-inline-block fs-sm"><i className="fi-bed fs-lg text-muted"></i>  3 Bedrooms</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-bath ms-1 mt-n1 fs-lg text-muted"></i> 2 Bathrooms</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-car ms-1 mt-n1 fs-lg text-muted"></i> 1 Parking</span></div>
                  <div className=" pt-3"><span className="d-inline-block  fs-sm"><i className="fi-align-left fs-lg text-muted"></i>  2 Out of 7 Floors</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-tv ms-1 mt-n1 fs-lg text-muted"></i> Furnished</span><span className="d-inline-block mx-1 px-2 fs-sm"><i className="fi-man ms-1 mt-n1 fs-lg text-muted"></i> Bachelors</span></div>
                  </div>
                  <button className="btn btn-primary" type="submit">Enquire Now</button>
                
                </div>
              </div>
              
            </div>
            {/* <!-- Pagination--> */}
            <nav className="border-top pb-md-4 pt-4 mt-2" aria-label="Pagination">
              <ul className="pagination mb-1">
                <li className="page-item d-sm-none"><span className="page-link page-link-static">1 / 5</span></li>
                <li className="page-item active d-none d-sm-block" aria-current="page"><span className="page-link">1<span className="visually-hidden">(current)</span></span></li>
                <li className="page-item d-none d-sm-block"><a className="page-link" href="#">2</a></li>
                <li className="page-item d-none d-sm-block"><a className="page-link" href="#">3</a></li>
                <li className="page-item d-none d-sm-block">...</li>
                <li className="page-item d-none d-sm-block"><a className="page-link" href="#">8</a></li>
                <li className="page-item"><a className="page-link" href="#" aria-label="Next"><i className="fi-chevron-right"></i></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

    )
}

export default PropertyList
