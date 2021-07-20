import React from 'react'

const BodypostProperty = () => {
    return (
        <>
            <div class="modal fade" id="preview-modal" tabindex="-1">
        <div class="modal-dialog modal-fullscreen" role="document">
          <div class="modal-content">
            <div class="modal-header d-block d-sm-flex">
              <h3 class="h5 text-muted fw-normal modal-title d-none d-sm-block">Property preview</h3>
              <div class="d-flex align-items-center"><a class="btn btn-primary btn-sm me-4" href="real-estate-property-promotion.html">Save and continue</a><span class="fs-xs text-muted ms-auto me-2">[ESC]</span>
                <button class="btn-close ms-0" type="button" data-bs-dismiss="modal"></button>
              </div>
            </div>
            <div class="modal-body p-0">
              <div class="container mt-2 mt-sm-0 py-4 py-sm-5">
                <h1 class="h2 mb-2">Pine Apartments</h1>
                <p class="mb-2 pb-1 fs-lg">28 Jackson Ave Long Island City, NY 67234</p>
                <ul class="d-flex mb-4 list-unstyled">
                  <li class="me-3 pe-3 border-end"><b class="me-1">4</b><i class="fi-bed mt-n1 lead align-middle text-muted"></i></li>
                  <li class="me-3 pe-3 border-end"><b class="me-1">2</b><i class="fi-bath mt-n1 lead align-middle text-muted"></i></li>
                  <li class="me-3 pe-3 border-end"><b class="me-1">2</b><i class="fi-car mt-n1 lead align-middle text-muted"></i></li>
                  <li><b>56 </b>sq.m</li>
                </ul>
                <div class="overflow-auto pb-3 px-2 mx-n2 mb-4" data-simplebar>
                  <div class="row g-2 g-md-3" style={{"minWidth": "30rem;"}}>
                    <div class="col-8"><img class="rounded rounded-md-3" src="img/real-estate/single/01.jpg" alt="Gallery thumbnail" /></div>
                    <div class="col-4"><img class="rounded rounded-md-3 mb-2 mb-md-3" src="img/real-estate/single/02.jpg" alt="Gallery thumbnail" /><img class="rounded rounded-md-3" src="img/real-estate/single/03.jpg" alt="Gallery thumbnail" /></div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-7 mb-md-0 mb-4"><span class="badge bg-success me-2 mb-3">Verified</span><span class="badge bg-info me-2 mb-3">New</span>
                    <h2 class="h3 mb-4 pb-4 border-bottom">$2,000<span class="d-inline-block ms-1 fs-base fw-normal text-body">/month</span></h2>
                    {/* <!-- Overview--> */}
                    <div class="mb-4 pb-md-3">
                      <h3 class="h4">Overview</h3>
                      <p class="mb-1">Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non scelerisque turpis sed etiam ultrices. Blandit mollis dignissim egestas consectetur porttitor. Vulputate dolor pretium, dignissim eu augue sit ut convallis. Lectus est, magna urna feugiat sed ultricies sed in lacinia. Fusce potenti sit id pharetra vel ornare. Vestibulum sed tellus ullamcorper arcu.</p>
                      <div class="collapse" id="seeMoreOverview">
                        <p class="mb-1">Asperiores eos molestias, aspernatur assumenda vel corporis ex, magni excepturi totam exercitationem quia inventore quod amet labore impedit quae distinctio? Officiis blanditiis consequatur alias, atque, sed est incidunt accusamus repudiandae tempora repellendus obcaecati delectus ducimus inventore tempore harum numquam autem eligendi culpa.</p>
                      </div><a class="collapse-label collapsed" href="#seeMoreOverview" data-bs-toggle="collapse" data-bs-label-collapsed="Show more" data-bs-label-expanded="Show less" role="button" aria-expanded="false" aria-controls="seeMoreOverview"></a>
                    </div>
                    {/* <!-- Property Details--> */}
                    <div class="mb-4 pb-md-3">
                      <h3 class="h4">Property Details</h3>
                      <ul class="list-unstyled mb-0">
                        <li><b>Type: </b>apartment</li>
                        <li><b>Apartment area: </b>56 sq.m</li>
                        <li><b>Built: </b>2015</li>
                        <li><b>Bedrooms: </b>4</li>
                        <li><b>Bathrooms: </b>2</li>
                        <li><b>Parking places: </b>2</li>
                        <li><b>Pets allowed: </b>No</li>
                      </ul>
                    </div>
                    {/* <!-- Amenities--> */}
                    <div class="mb-sm-3">
                      <h3 class="h4">Amenities</h3>
                      <ul class="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li class="col"><i class="fi-wifi mt-n1 me-2 fs-lg align-middle"></i>WiFi</li>
                        <li class="col"><i class="fi-thermometer mt-n1 me-2 fs-lg align-middle"></i>Heating</li>
                        <li class="col"><i class="fi-dish mt-n1 me-2 fs-lg align-middle"></i>Dishwasher</li>
                        <li class="col"><i class="fi-parking mt-n1 me-2 fs-lg align-middle"></i>Parking place</li>
                        <li class="col"><i class="fi-snowflake mt-n1 me-2 fs-lg align-middle"></i>Air conditioning</li>
                        <li class="col"><i class="fi-iron mt-n1 me-2 fs-lg align-middle"></i>Iron</li>
                        <li class="col"><i class="fi-tv mt-n1 me-2 fs-lg align-middle"></i>TV</li>
                        <li class="col"><i class="fi-laundry mt-n1 me-2 fs-lg align-middle"></i>Laundry</li>
                        <li class="col"><i class="fi-cctv mt-n1 me-2 fs-lg align-middle"></i>Security cameras</li>
                      </ul>
                      <div class="collapse" id="seeMoreAmenities">
                        <ul class="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                          <li class="col"><i class="fi-no-smoke mt-n1 me-2 fs-lg align-middle"></i>No smocking</li>
                          <li class="col"><i class="fi-pet mt-n1 me-2 fs-lg align-middle"></i>Cats</li>
                          <li class="col"><i class="fi-swimming-pool mt-n1 me-2 fs-lg align-middle"></i>Swimming pool</li>
                          <li class="col"><i class="fi-double-bed mt-n1 me-2 fs-lg align-middle"></i>Double bed</li>
                          <li class="col"><i class="fi-bed mt-n1 me-2 fs-lg align-middle"></i>Single bed</li>
                        </ul>
                      </div><a class="collapse-label collapsed" href="#seeMoreAmenities" data-bs-toggle="collapse" data-bs-label-collapsed="Show more" data-bs-label-expanded="Show less" role="button" aria-expanded="false" aria-controls="seeMoreAmenities"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page container--> */}
      <div class="container mt-5 mb-md-4 py-5">
        <div class="row">
          {/* <!-- Page content--> */}
          <div class="col-lg-8">
            {/* <!-- Breadcrumb--> */}
            <nav class="mb-3 pt-md-3" aria-label="Breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="real-estate-home.html">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Add property</li>
              </ol>
            </nav>
            {/* <!-- Title--> */}
            <div class="mb-4">
              <h1 class="h2 mb-0">Add property</h1>
              <div class="d-lg-none pt-3 mb-2">65% content filled</div>
              <div class="progress d-lg-none mb-4" style={{"height": ".25rem"}}>
                <div class="progress-bar bg-warning" role="progressbar" style={{"width": "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            {/* <!-- Basic info--> */}
            <section class="card card-body border-0 shadow-sm p-4 mb-4" id="basic-info">
              <h2 class="h4 mb-4"><i class="fi-info-circle text-primary fs-5 mt-n1 me-2"></i>Basic info</h2>
              <div class="mb-3">
                <label class="form-label" for="ap-title">Title <span class="text-danger">*</span></label>
                <input class="form-control" type="text" id="ap-title" placeholder="Title for your property" value="" required />
              </div>
              <div class="row">
                <div class="col-sm-6 mb-3">
                  <label class="form-label" for="ap-category">Category <span class="text-danger">*</span></label>
                  <select class="form-select" id="ap-category" required>
                    <option value="" disabled hidden>Choose category</option>
                    <option value="Rent">For rent</option>
                  </select>
                </div>
                <div class="col-sm-6 mb-3">
                  <label class="form-label" for="ap-type">Property type <span class="text-danger">*</span></label>
                  <select class="form-select" id="ap-type" required>
                    <option value="" disabled hidden>Choose property type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                  </select>
                </div>
              </div>
              <div class="form-label fw-bold pt-3 pb-2">Are you home owner? <span class="text-body  ">- Brokers are not allowed to add property.</span></div>
              
              <div class="form-check">
                <input class="form-check-input" type="radio" id="ap-company" name="ap-business-type" />
                <label class="form-check-label" for="ap-company">Yes</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" id="ap-individual" name="ap-business-type" checked />
                <label class="form-check-label" for="ap-individual">Posting on behalf of home owner</label>
              </div>
            </section>
            {/* <!-- Location--> */}
            <section class="card card-body border-0 shadow-sm p-4 mb-4" id="location">
              <h2 class="h4 mb-4"><i class="fi-map-pin text-primary fs-5 mt-n1 me-2"></i>Location</h2>
              <div class="row">
                <div class="mb-3">
                    <label class="form-label" for="ap-address">Street address <span class="text-danger">*</span></label>
                    <input class="form-control" type="text" id="ap-address" value="" required />
                  </div>
                <div class="col-sm-8 mb-3">
                  <label class="form-label" for="ap-zip">City  <span class="text-danger">*</span></label>
                  <input class="form-control" type="text" id="ap-zip" placeholder="Enter your city" value="" required />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-8 mb-3">
                  <label class="form-label" for="ap-zip">Area  <span class="text-danger">*</span></label>
                  <input class="form-control" type="text" id="ap-zip" placeholder="Enter your area" value="" required />
                </div>
                <div class="col-sm-4 mb-3">
                  <label class="form-label" for="ap-zip">Zip code  <span class="text-danger">*</span></label>
                  <input class="form-control" type="text" id="ap-zip" placeholder="Enter Zip code" value="" required />
                </div>
              </div>
              
             </section>
            {/* <!-- Property details--> */}
            <section class="card card-body border-0 shadow-sm p-4 mb-4" id="details">
              <h2 class="h4 mb-4"><i class="fi-edit text-primary fs-5 mt-n1 me-2"></i>Property details</h2>
              <div class="mb-4" style={{"max-width": "25rem"}}>
                <label class="form-label" for="ap-area">Total area, sqft</label>
                <input class="form-control" type="number" id="ap-area" min="20" placeholder="Enter your area" value="56" required />
              </div>
              <div class="mb-4" style={{"max-width": "25rem"}}>
                <label class="form-label" for="ap-area">Carpet area, sqft</label>
                <input class="form-control" type="number" id="ap-area" min="20" placeholder="Enter your Carpet area" value="26" required />
              </div>
              <div class="mb-4">
                <label class="form-label d-block fw-bold mb-2 pb-1">Facing</label>
                <div class="btn-group btn-group-sm" role="group" aria-label="Choose number of bedrooms">
                  <input class="btn-check" type="radio" id="studio" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="studio">East</label>
                  <input class="btn-check" type="radio" id="bedrooms-1" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-1">West</label>
                  <input class="btn-check" type="radio" id="bedrooms-2" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-2">North</label>
                  <input class="btn-check" type="radio" id="bedrooms-3" name="bedrooms"checked />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-3">South</label>
                </div>
              </div>
              <div class="mb-4">
                <label class="form-label d-block fw-bold mb-2 pb-1">Bedrooms</label>
                <div class="btn-group btn-group-sm" role="group" aria-label="Choose number of bedrooms">
                  <input class="btn-check" type="radio" id="studio" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-1">1</label>
                  <input class="btn-check" type="radio" id="bedrooms-2" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-2">2</label>
                  <input class="btn-check" type="radio" id="bedrooms-3" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-3">3</label>
                  <input class="btn-check" type="radio" id="bedrooms-4" name="bedrooms" checked />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-4">4</label>
                  <input class="btn-check" type="radio" id="bedrooms-5" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-5">5+</label>
                </div>
              </div>
              <div class="mb-4">
                <label class="form-label d-block fw-bold mb-2 pb-1">Balconies</label>
                <div class="btn-group btn-group-sm" role="group" aria-label="Choose number of bedrooms">
                  <input class="btn-check" type="radio" id="studio" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-1">0</label>
                  <input class="btn-check" type="radio" id="bedrooms-2" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-2">1</label>
                  <input class="btn-check" type="radio" id="bedrooms-3" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-3">2</label>
                  <input class="btn-check" type="radio" id="bedrooms-4" name="bedrooms" checked />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-4">3</label>
                  <input class="btn-check" type="radio" id="bedrooms-5" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-5">4+</label>
                </div>
              </div>
              <div class="mb-4">
                <label class="form-label d-block fw-bold mb-2 pb-1">Bathrooms</label>
                <div class="btn-group btn-group-sm" role="group" aria-label="Choose number of bathrooms">
                  <input class="btn-check" type="radio" id="bathrooms-1" name="bathrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bathrooms-1">1</label>
                  <input class="btn-check" type="radio" id="bathrooms-2" name="bathrooms" checked />
                  <label class="btn btn-outline-secondary fw-normal" for="bathrooms-2">2</label>
                  <input class="btn-check" type="radio" id="bathrooms-3" name="bathrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bathrooms-3">3</label>
                  <input class="btn-check" type="radio" id="bathrooms-4" name="bathrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bathrooms-4">4</label>
                </div>
              </div>
              <div class="mb-4">
                <label class="form-label d-block fw-bold mb-2 pb-1">Floor No-</label>
                <div class="btn-group btn-group-sm" role="group" aria-label="Choose number of bedrooms">
                  <input class="btn-check" type="radio" id="studio" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-1">Lower Basement</label>
                  <input class="btn-check" type="radio" id="bedrooms-2" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-2">Upper Basement</label>
                  <input class="btn-check" type="radio" id="bedrooms-3" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-3">Ground</label>
                  <input class="btn-check" type="radio" id="studio" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-1">1</label>
                  <input class="btn-check" type="radio" id="bedrooms-2" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-2">2</label>
                  <input class="btn-check" type="radio" id="bedrooms-3" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-3">3</label>
                  <input class="btn-check" type="radio" id="bedrooms-4" name="bedrooms" checked />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-4">4</label>
                  <input class="btn-check" type="radio" id="bedrooms-5" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-5">5+</label>
                </div>
              </div>
              <div class="mb-4">
                <label class="form-label d-block fw-bold mb-2 pb-1">Total Floors-</label>
                <div class="btn-group btn-group-sm" role="group" aria-label="Choose number of bedrooms">
                  <input class="btn-check" type="radio" id="studio" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-1">1</label>
                  <input class="btn-check" type="radio" id="bedrooms-2" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-2">2</label>
                  <input class="btn-check" type="radio" id="bedrooms-3" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-3">3</label>
                  <input class="btn-check" type="radio" id="bedrooms-4" name="bedrooms"  />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-4">4</label>
                  <input class="btn-check" type="radio" id="bedrooms-5" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-5">5</label>
                  <input class="btn-check" type="radio" id="studio" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-6">6</label>
                  <input class="btn-check" type="radio" id="bedrooms-2" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-7">7</label>
                  <input class="btn-check" type="radio" id="bedrooms-3" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-8">8</label>
                  <input class="btn-check" type="radio" id="bedrooms-4" name="bedrooms"  />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-9">9</label>
                  <input class="btn-check" type="radio" id="bedrooms-5" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-10">10</label>
                  <input class="btn-check" type="radio" id="bedrooms-2" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-11">11</label>
                  <input class="btn-check" type="radio" id="bedrooms-3" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-12">12</label>
                  <input class="btn-check" type="radio" id="bedrooms-4" name="bedrooms" checked />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-13">13</label>
                  <input class="btn-check" type="radio" id="bedrooms-5" name="bedrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bedrooms-14">13+</label>
                </div>
              </div>
              <div class="mb-4">
                <label class="form-label d-block fw-bold mb-2 pb-1">Furnished Status</label>
                <div class="btn-group btn-group-sm" role="group" aria-label="Choose number of bathrooms">
                  <input class="btn-check" type="radio" id="bathrooms-1" name="bathrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bathrooms-1">Furnished</label>
                  <input class="btn-check" type="radio" id="bathrooms-2" name="bathrooms" checked />
                  <label class="btn btn-outline-secondary fw-normal" for="bathrooms-2">Unfrnished</label>
                  <input class="btn-check" type="radio" id="bathrooms-3" name="bathrooms" />
                  <label class="btn btn-outline-secondary fw-normal" for="bathrooms-3">Semi-Furnished</label>
                </div>
              </div>
              <div class="mb-4">
                <label class="form-label d-block fw-bold mb-2 pb-1">Property Available</label>
                <div class="btn-group btn-group-sm" role="group" aria-label="Choose number of parking spots">
                  <input class="btn-check" type="radio" id="parking-1" name="parking" checked />
                  <label class="btn btn-outline-secondary fw-normal" for="parking-1">Immediately</label>
                  <div class="input-group">
                    <input class="form-control date-picker rounded pe-5" type="text" placeholder="Choose date" data-datepicker-options='{"altInput": true, "altFormat": "F j, Y", "dateFormat": "Y-m-d"}' />
                    <i class="fi-calendar position-absolute top-50 end-0 translate-middle-y me-3"></i>
                    </div>
                </div>
              </div>
                <div class="mb-4">
                    <label class="form-label d-block fw-bold mb-2 pb-1">Age of construction -</label>
                    <div class="btn-group btn-group-sm" role="group" aria-label="Choose number of bathrooms">
                      <input class="btn-check" type="radio" id="age-1" name="age" checked />
                      <label class="btn btn-outline-secondary fw-normal" for="age-1">New construction</label>
                      <input class="btn-check" type="radio" id="age-2" name="age"  />
                      <label class="btn btn-outline-secondary fw-normal" for="age-2">Less than 5 years</label>
                      <input class="btn-check" type="radio" id="age-3" name="age" />
                      <label class="btn btn-outline-secondary fw-normal" for="age-3">5 to 10 years</label>
                      <input class="btn-check" type="radio" id="age-4" name="age" />
                      <label class="btn btn-outline-secondary fw-normal" for="age-4">10 to 15 years</label>
                      <input class="btn-check" type="radio" id="age-5" name="age" />
                      <label class="btn btn-outline-secondary fw-normal" for="age-5">15 to 20 years</label>
                      
                      <input class="btn-check" type="radio" id="age-25" name="age" />
                      <label class="btn btn-outline-secondary fw-normal" for="age-25">20+ years</label>
                      

                    </div>
                  </div>
              <div class="mb-4">
                <label class="form-label d-block fw-bold mb-2 pb-1">Amenities</label>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="wifi" checked />
                      <label class="form-check-label" for="wifi">Lift</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="air-condition" checked />
                      <label class="form-check-label" for="air-condition">Gas pipeline</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="balcony" />
                      <label class="form-check-label" for="balcony">25X7 Water Supply</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="garage" />
                      <label class="form-check-label" for="garage">25X7 Security</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="gym" />
                      <label class="form-check-label" for="gym">Car Parking</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="free-parking" checked />
                      <label class="form-check-label" for="free-parking">Visitor Parking</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="pets-friendly" />
                        <label class="form-check-label" for="pets-friendly">Children's play area</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="pool" />
                        <label class="form-check-label" for="pool">Landscape Garden</label>
                      </div>
                  </div>
                  <div class="col-sm-4">
                    
                    
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="bar" />
                      <label class="form-check-label" for="bar">Tree Planting</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="tv" checked />
                      <label class="form-check-label" for="tv">Air conditioning</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="linens" checked />
                      <label class="form-check-label" for="linens">CCTV</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="heating" checked />
                      <label class="form-check-label" for="heating">Fire safety</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="dishwasher" />
                        <label class="form-check-label" for="dishwasher">Internet services</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="iron" checked />
                        <label class="form-check-label" for="iron">Gym</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="hair-dryer" checked />
                        <label class="form-check-label" for="hair-dryer">Club house</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="kitchen" checked />
                        <label class="form-check-label" for="kitchen">Swimming pool</label>
                      </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="breakfast" />
                      <label class="form-check-label" for="breakfast">Rain water harvesting</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="security-cameras" />
                      <label class="form-check-label" for="security-cameras">Sewage treatment plant</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="House keeping" />
                        <label class="form-check-label" for="House keeping">House keeping</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="Power backup" />
                        <label class="form-check-label" for="Power backup">Power backup</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="Shopping center" />
                        <label class="form-check-label" for="Shopping center">Shopping center</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="Park" />
                        <label class="form-check-label" for="Park">Park</label>
                      </div>
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <label class="form-label d-block fw-bold mb-2 pb-1">Tenants preferred </label>
                <div class="btn-group btn-group-sm" role="group" aria-label="Choose number of parking spots">
                  <input class="btn-check" type="radio" id="Family" name="parking" checked />
                  <label class="btn btn-outline-secondary fw-normal" for="Family">Family</label>
                  <input class="btn-check" type="radio" id="Bachelors" name="parking"  />
                  <label class="btn btn-outline-secondary fw-normal" for="Bachelors">Bachelors</label>
                  <input class="btn-check" type="radio" id="Any" name="parking"  />
                  <label class="btn btn-outline-secondary fw-normal" for="Bachelors/Family">Family/Bachelors</label><br/>
                </div>
              </div>
              <div class="mb-4">
                <label class="form-label d-block fw-bold mb-2 pb-1">Pets</label>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="allow-cats" />
                      <label class="form-check-label" for="allow-cats">Yes</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="allow-dogs" />
                      <label class="form-check-label" for="allow-dogs">No</label>
                    </div>
                  </div>
                </div>
              </div>
              <label class="form-label" for="ap-description">Description </label>
              <textarea class="form-control" id="ap-description" rows="5" placeholder="Describe your property"></textarea><span class="form-text">1500 characters left</span>
            </section>
            {/* <!-- Price--> */}
            <section class="card card-body border-0 shadow-sm p-4 mb-4" id="price">
              <h2 class="h4 mb-4"><i class="fi-cash text-primary fs-5 mt-n1 me-2"></i>Monthly Rent</h2>
              <label class="form-label" for="ap-price">Monthly Rent <span class="text-danger">*</span></label>
                  <div class="d-sm-flex">
                    <select class="form-select w-25 me-2 mb-2">
                      <option value="Rs">₹
                      </option>
                    </select>
                    <input class="form-control w-100 me-2 mb-2" type="number" id="ap-price" min="200" step="50" required />
                    <select class="form-select w-50 mb-2">
                      <option value="day">per day</option>
                      <option value="week">per week</option>
                      <option value="month" selected>per month</option>
                      <option value="year">per year</option>
                    </select>
                  </div>
                <label class="form-label" for="ap-price">Security Amount <span class="text-danger">*</span></label>
                  <div class="d-sm-flex">
                    <select class="form-select w-25 me-2 mb-2">
                      <option value="Rs">₹
                      </option>
                    </select>
                    <input class="form-control w-100 me-2 mb-2" type="number" id="ap-price" min="200" step="50" required />
                  </div>
            <label class="form-label" for="ap-price">Monthly Charges <span class="text-danger">*</span></label>
           <div class="d-sm-flex">
             <select class="form-select w-25 me-2 mb-2">
               <option value="Rs">₹
               </option>
             </select>
             <input class="form-control w-100 me-2 mb-2" type="number" id="ap-price" min="200" step="50" required />
             <select class="form-select w-50 mb-2">
                <option value="day">Monthly</option>
                <option value="week">Quarterly</option>
                <option value="month" selected>Yearly</option>
                <option value="year">One time</option>
                <option value="year">Per sq. Unit monthly</option>
              </select>
            </div>
           
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="allow-cats" />
                          <label class="form-check-label" for="allow-cats">Electricity & Water charges excluded.</label>
                        </div>
            </section>
            {/* <!-- Photos / video--> */}
            <section class="card card-body border-0 shadow-sm p-4 mb-4" id="photos">
              <h2 class="h4 mb-4"><i class="fi-image text-primary fs-5 mt-n1 me-2"></i>Photos / video</h2>
              <div class="alert alert-info mb-4" role="alert">
                <div class="d-flex"><i class="fi-alert-circle me-2 me-sm-3"></i>
                  <p class="fs-sm mb-1">The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the main picture first.<br />The maximum video size is 10 MB. Formats: mp4, mov.</p>
                </div>
              </div>
              <input class="file-uploader file-uploader-grid" type="file" multiple data-max-file-size="10MB" accept="image/png, image/jpeg, video/mp4, video/mov" data-label-idle="&lt;div class=&quot;btn btn-primary mb-3&quot;&gt;&lt;i class=&quot;fi-cloud-upload me-1&quot;&gt;&lt;/i&gt;Upload photos / video&lt;/div&gt;&lt;br&gt;or drag them in" />
            </section>
            {/* <!-- Contacts--> */}
            <section class="card card-body border-0 shadow-sm p-4 mb-4" id="contacts">
              <h2 class="h4 mb-4"><i class="fi-phone text-primary fs-5 mt-n1 me-2"></i>Contacts</h2>
              <div class="row">
                <div class="col-sm-6 mb-3">
                  <label class="form-label" for="ap-fn">First name <span class="text-danger">*</span></label>
                  <input class="form-control" type="text" id="ap-fn" value="" placeholder="Enter your first name" required />
                </div>
                <div class="col-sm-6 mb-3">
                  <label class="form-label" for="ap-sn">Last name <span class="text-danger">*</span></label>
                  <input class="form-control" type="text" id="ap-sn" value="" placeholder="Enter your second name" required />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6 mb-3">
                  <label class="form-label" for="ap-email">Email<span class="text-danger">*</span></label>
                  <input class="form-control" type="text" id="ap-email" value="" placeholder="Enter your email" />
                </div>
                <div class="col-sm-6 mb-3">
                  <label class="form-label" for="ap-phone">Phone number <span class="text-danger">*</span></label>
                  <input class="form-control" type="tel" id="ap-phone" data-format="custom" data-delimiter="-" data-blocks="3 3 4" value="" placeholder="000-000-0000" />
                </div>
              </div>
              <label class="form-label" for="ap-company-name">Company</label>
              <input class="form-control" type="text" id="ap-company-name" placeholder="Enter company name" />
              
            </section>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="allow-cats" />
              <label class="form-check-label" for="allow-cats">By joining, I agree to the Terms of use and Privacy policy</label>
            </div>
            {/* <!-- Action buttons --> */}
            <section class="d-sm-flex justify-content-between pt-2"><a class="btn btn-outline-primary btn-lg d-block ps-3 mb-3 mb-sm-2" href="#preview-modal" data-bs-toggle="modal"><i class="fi-eye-on me-2"></i>Preview</a><a class="btn btn-primary btn-lg d-block mb-2" href="real-estate-property-promotion.html">Login & Add Property</a></section>
          </div>
          {/* <!-- Progress of completion--> */}
          <aside class="col-lg-3 offset-lg-1 d-none d-lg-block">
            <div class="sticky-top pt-5">
              <h6 class="pt-5 mt-3 mb-2">65% content filled</h6>
              <div class="progress mb-4" style={{"height": ".25rem"}}>
                <div class="progress-bar bg-warning" role="progressbar" style={{"width": "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <ul class="list-unstyled">
                <li class="d-flex align-items-center"><i class="fi-check text-primary me-2"></i><a class="nav-link fw-normal ps-1 p-0" href="#basic-info" data-scroll data-scroll-offset="20">Basic info</a></li>
                <li class="d-flex align-items-center"><i class="fi-check text-primary me-2"></i><a class="nav-link fw-normal ps-1 p-0" href="#location" data-scroll data-scroll-offset="20">Location</a></li>
                <li class="d-flex align-items-center"><i class="fi-check text-primary me-2"></i><a class="nav-link fw-normal ps-1 p-0" href="#details" data-scroll data-scroll-offset="20">Property details</a></li>
                <li class="d-flex align-items-center"><i class="fi-check text-muted me-2"></i><a class="nav-link fw-normal ps-1 p-0" href="#price" data-scroll data-scroll-offset="20">Price</a></li>
                <li class="d-flex align-items-center"><i class="fi-check text-muted me-2"></i><a class="nav-link fw-normal ps-1 p-0" href="#photos" data-scroll data-scroll-offset="20">Photos / video</a></li>
                <li class="d-flex align-items-center"><i class="fi-check text-primary me-2"></i><a class="nav-link fw-normal ps-1 p-0" href="#contacts" data-scroll data-scroll-offset="20">Contacts</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
        </>
    )
}

export default BodypostProperty
