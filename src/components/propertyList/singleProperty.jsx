import React from 'react'

const SingleProperty = () => {
    return (
        <>
        <div className="modal fade" id="modal-review" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header d-block position-relative border-0 pb-0 px-sm-5 px-4">
              <h3 className="modal-title mt-4 text-center">Leave a review</h3>
              <button className="btn-close position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body px-sm-5 px-4">
              <form className="needs-validation" novalidate>
                <div className="mb-3">
                  <label className="form-label" for="review-name">Name <span className='text-danger'>*</span></label>
                  <input className="form-control" type="text" id="review-name" placeholder="Your name" required />
                  <div className="invalid-feedback">Please let us know your name.</div>
                </div>
                <div className="mb-3">
                  <label className="form-label" for="review-email">Email <span className='text-danger'>*</span></label>
                  <input className="form-control" type="email" id="review-email" placeholder="Your email address" required />
                  <div className="invalid-feedback">Please provide a valid email address.</div>
                </div>
                <div className="mb-3">
                  <label className="form-label" for="review-rating">Rating <span className='text-danger'>*</span></label>
                  <select className="form-control form-select" id="review-rating" required>
                    <option value="" selected disabled hidden>Choose rating</option>
                    <option value="5 stars">5 stars</option>
                    <option value="4 stars">4 stars</option>
                    <option value="3 stars">3 stars</option>
                    <option value="2 stars">2 stars</option>
                    <option value="1 star">1 star</option>
                  </select>
                  <div className="invalid-feedback">Please rate the property.</div>
                </div>
                <div className="mb-4">
                  <label className="form-label" for="review-text">Email <span className='text-danger'>*</span></label>
                  <textarea className="form-control" id="review-text" rows="5" placeholder="Your review message" required></textarea>
                  <div className="invalid-feedback">Please write your review.</div>
                </div>
                <button className="btn btn-primary d-block w-100 mb-4" type="submit">Submit a review</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <section className="container pt-5 mt-5">
        {/* <!-- Breadcrumb--> */}
        <nav className="mb-3 pt-md-3" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="real-estate-home.html">Home</a></li>
            <li className="breadcrumb-item"><a href="real-estate-catalog-rent.html">Property for rent</a></li>
            <li className="breadcrumb-item active" aria-current="page">Pine Apartments</li>
          </ol>
        </nav>
        <h1 className="h2 mb-2">Pine Apartments</h1>
        <p className="mb-2 pb-1 fs-lg">28 Jackson Ave Long Island City, NY 67234</p>
        {/* <!-- Features + Sharing--> */}
        <div className="d-flex justify-content-between align-items-center">
          
          
        </div>
      </section>
      <br/>
      <section style={{"padding-left": "30px"}} className="container mb-4 pb-3" data-simplebar>
        <div className="tns-carousel-wrapper card-img-top card-img-hover"><a className="img-overlay" href="real-estate-single.html"></a>
          <div className="content-overlay end-0 top-0 pt-3 pe-3">
            <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart"></i></button>
          </div>
          <div className="tns-carousel-inner">
            <img style={{"height": "550px"}} src="img/real-estate/single/01.jpg" alt="Image" />
            <img style={{"height": "550px"}} src="img/real-estate/single/02.jpg" alt="Image" />
            <img style={{"height": "550px"}} src="img/real-estate/single/03.jpg" alt="Image" />
            <img style={{"height": "550px"}} src="img/real-estate/single/04.jpg" alt="Image" />
            <img style={{"height": "550px"}} src="img/real-estate/single/05.jpg" alt="Image" />
            <img style={{"height": "550px"}} src="img/real-estate/single/06.jpg" alt="Image" />
            <img style={{"height": "550px"}} src="img/real-estate/single/07.jpg" alt="Image" />
            <img style={{"height": "550px"}} src="img/real-estate/single/08.jpg" alt="Image" /></div>
        </div>
        
      </section>
      <section className="container mb-5 pb-1">
        <div className="row">
          <div className="col-md-7 mb-md-0 mb-4"><span className="badge bg-success me-2 mb-3">Verified</span><span className="badge bg-info me-2 mb-3">New</span>
            
            <h2 className="h2 mb-4 pb-4 border-bottom"><span className="h2 mb-4 pb-4 border-bottom"> ₹ 2,000</span><span className="d-inline-block ms-1 fs-base fw-normal text-body">/month</span></h2>
            
            {/* <!-- Property Details--> */}
            <div className="mb-4 pb-md-3">
              <h3 className="h4">Property Details</h3>
              <ul className="list-unstyled mb-0">
                <div className="row">
                  <div style={{"margin-right": "190px"} } className="col-md">
                    <table style={{"width":"100%",paddingLeft: "500px"}}>
                      <tr>
                        <td><b>Bedrooms: </b></td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td><b>Bathrooms: </b></td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td><b>Balconies: </b></td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td><b>Store Room: </b></td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td><b>Furnished status:</b></td>
                        <td>Furnished</td>
                      </tr>
                      <tr>
                        <td><b>Property Type: </b></td>
                        <td>Home</td>
                      </tr>
                      <tr>
                        <td><b>Age of Building: </b></td>
                        <td>4 Years</td>
                      </tr>
                      <tr>
                        <td><b>Super area: </b></td>
                        <td>200</td>
                      </tr>
                    </table>
                  </div>  
                  <div className="col-md">
                    <table style={{"width":"100%"}}>
                      <tr>
                        <td><b>Carpet Area: </b></td>
                        <td>400</td>
                      </tr>
                      <tr>
                        <td><b>Floor:  </b></td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td><b>Facing:  </b></td>
                        <td>North</td>
                      </tr>
                      <tr>
                        <td><b>Overlooking: </b></td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td><b>Availability: </b></td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td><b>Parking:</b></td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td><b>Preferred Tenant: </b></td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <td><b>Non-Veg Allowed: </b></td>
                        <td>Yes</td>
                      </tr>
                    </table>
              </div>
              </div>
              </ul>
            </div>
            {/* <!-- Overview--> */}
            <div className="mb-4 pb-md-3">
              <h3 className="h4">Overview</h3>
              <p className="mb-1">Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non scelerisque turpis sed etiam ultrices. Blandit mollis dignissim egestas consectetur porttitor. Vulputate dolor pretium, dignissim eu augue sit ut convallis. Lectus est, magna urna feugiat sed ultricies sed in lacinia. Fusce potenti sit id pharetra vel ornare. Vestibulum sed tellus ullamcorper arcu.</p>
              <div className="collapse" id="seeMoreOverview">
                <p className="mb-1">Asperiores eos molestias, aspernatur assumenda vel corporis ex, magni excepturi totam exercitationem quia inventore quod amet labore impedit quae distinctio? Officiis blanditiis consequatur alias, atque, sed est incidunt accusamus repudiandae tempora repellendus obcaecati delectus ducimus inventore tempore harum numquam autem eligendi culpa.</p>
              </div><a className="collapse-label collapsed" href="#seeMoreOverview" data-bs-toggle="collapse" data-bs-label-collapsed="Show more" data-bs-label-expanded="Show less" role="button" aria-expanded="false" aria-controls="seeMoreOverview"></a>
            </div>
            {/* <!-- Amenities--> */}
            <div className="mb-4 pb-md-3">
              <h3 className="h4">Amenities</h3>
              <ul className="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                <li className="col"><i className="fi-wifi mt-n1 me-2 fs-lg align-middle"></i>WiFi</li>
                <li className="col"><i className="fi-thermometer mt-n1 me-2 fs-lg align-middle"></i>Heating</li>
                <li className="col"><i className="fi-dish mt-n1 me-2 fs-lg align-middle"></i>Dishwasher</li>
                <li className="col"><i className="fi-parking mt-n1 me-2 fs-lg align-middle"></i>Parking place</li>
                <li className="col"><i className="fi-snowflake mt-n1 me-2 fs-lg align-middle"></i>Air conditioning</li>
                <li className="col"><i className="fi-iron mt-n1 me-2 fs-lg align-middle"></i>Iron</li>
                <li className="col"><i className="fi-tv mt-n1 me-2 fs-lg align-middle"></i>TV</li>
                <li className="col"><i className="fi-laundry mt-n1 me-2 fs-lg align-middle"></i>Laundry</li>
                <li className="col"><i className="fi-cctv mt-n1 me-2 fs-lg align-middle"></i>Security cameras</li>
              </ul>
              <div className="collapse" id="seeMoreAmenities">
                <ul className="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                  <li className="col"><i className="fi-no-smoke mt-n1 me-2 fs-lg align-middle"></i>No smocking</li>
                  <li className="col"><i className="fi-pet mt-n1 me-2 fs-lg align-middle"></i>Cats</li>
                  <li className="col"><i className="fi-swimming-pool mt-n1 me-2 fs-lg align-middle"></i>Swimming pool</li>
                  <li className="col"><i className="fi-double-bed mt-n1 me-2 fs-lg align-middle"></i>Double bed</li>
                  <li className="col"><i className="fi-bed mt-n1 me-2 fs-lg align-middle"></i>Single bed</li>
                </ul>
              </div><a className="collapse-label collapsed" href="#seeMoreAmenities" data-bs-toggle="collapse" data-bs-label-collapsed="Show more" data-bs-label-expanded="Show less" role="button" aria-expanded="false" aria-controls="seeMoreAmenities"></a>
            </div>
            {/* <!-- Post meta--> */}
            <div className="mb-lg-5 mb-md-4 pb-lg-2 py-4 border-top">
              <ul className="d-flex mb-4 list-unstyled fs-sm">
                <li className="me-3 pe-3 border-end">Published: <b>Dec 9, 2020</b></li>
                <li className="me-3 pe-3 border-end">Ad number: <b>681013232</b></li>
                <li className="me-3 pe-3">Views: <b>48</b></li>
              </ul>
            </div>
            {/* <!-- Reviews--> */}
            <div className="mb-4 pb-4 border-bottom">
              <h3 className="h4 pb-3"><i className="fi-star-filled mt-n1 me-2 lead align-middle text-warning"></i>4,9 (32 reviews)</h3>
              <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between"><a className="btn btn-outline-primary mb-sm-0 mb-3" href="#modal-review" data-bs-toggle="modal"><i className="fi-edit me-1"></i>Add review</a>
                <div className="d-flex align-items-center ms-sm-4">
                  <label className="me-2 pe-1 text-nowrap" for="reviews-sorting"><i className="fi-arrows-sort text-muted mt-n1 me-2"></i>Sort by:</label>
                  <select className="form-select" id="reviews-sorting">
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Popular</option>
                    <option>High rating</option>
                    <option>Low rating</option>
                  </select>
                </div>
              </div>
            </div>
            {/* <!-- Review--> */}
            <div className="mb-4 pb-4 border-bottom">
              <div className="d-flex justify-content-between mb-3">
                <div className="d-flex align-items-center pe-2"><img className="rounded-circle me-1" src="img/avatars/03.jpg" width="48" alt="Avatar" />
                  <div className="ps-2">
                    <h6 className="fs-base mb-0">Annette Black</h6><span className="star-rating"><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i></span>
                  </div>
                </div><span className="text-muted fs-sm">Jan 17, 2021</span>
              </div>
              <p>Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.</p>
              <div className="d-flex align-items-center">
                <button className="btn-like" type="button"><i className="fi-like"></i><span>(3)</span></button>
                <div className="border-end me-1">&nbsp;</div>
                <button className="btn-dislike" type="button"><i className="fi-dislike"></i><span>(0)</span></button>
              </div>
            </div>
            {/* <!-- Review--> */}
            <div className="mb-4 pb-4 border-bottom">
              <div className="d-flex justify-content-between mb-3">
                <div className="d-flex align-items-center pe-2"><img className="rounded-circle me-1" src="img/avatars/13.png" width="48" alt="Avatar" />
                  <div className="ps-2">
                    <h6 className="fs-base mb-0">Darrell Steward</h6><span className="star-rating"><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star"></i><i className="star-rating-icon fi-star"></i></span>
                  </div>
                </div><span className="text-muted fs-sm">Dec 1, 2020</span>
              </div>
              <p>Vel dictum nunc ut tristique. Egestas diam amet, ut proin hendrerit. Dui accumsan at phasellus tempus consequat dignissim.</p>
              <div className="d-flex align-items-center">
                <button className="btn-like" type="button"><i className="fi-like"></i><span>(0)</span></button>
                <div className="border-end me-1">&nbsp;</div>
                <button className="btn-dislike" type="button"><i className="fi-dislike"></i><span>(1)</span></button>
              </div>
            </div>
            {/* <!-- Review--> */}
            <div className="mb-4 pb-4 border-bottom">
              <div className="d-flex justify-content-between mb-3">
                <div className="d-flex align-items-center pe-2"><img className="rounded-circle me-1" src="img/avatars/05.jpg" width="48" alt="Avatar" />
                  <div className="ps-2">
                    <h6 className="fs-base mb-0">Floyd Miles</h6><span className="star-rating"><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i></span>
                  </div>
                </div><span className="text-muted fs-sm">Oct  28, 2020</span>
              </div>
              <p>Viverra nunc blandit sapien non imperdiet sit. Purus tempus elementum aliquam eu urna. A aenean duis non egestas at libero porttitor integer eget. Sed dictum lobortis laoreet gravida.</p>
              <div className="d-flex align-items-center">
                <button className="btn-like" type="button"><i className="fi-like"></i><span>(2)</span></button>
                <div className="border-end me-1">&nbsp;</div>
                <button className="btn-dislike" type="button"><i className="fi-dislike"></i><span>(1)</span></button>
              </div>
            </div>
            {/* <!-- Review--> */}
            <div className="mb-4 pb-4 border-bottom">
              <div className="d-flex justify-content-between mb-3">
                <div className="d-flex align-items-center pe-2"><img className="rounded-circle me-1" src="img/avatars/04.jpg" width="48" alt="Avatar" />
                  <div className="ps-2">
                    <h6 className="fs-base mb-0">Ralph Edwards</h6><span className="star-rating"><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star"></i></span>
                  </div>
                </div><span className="text-muted fs-sm">Sep 14, 2020</span>
              </div>
              <p>Elementum nisl, egestas nam consectetur nisl, at pellentesque cras. Non sed ac vivamus dolor dignissim ut. Nisl sapien blandit pulvinar sagittis donec sociis ipsum arcu est. Tempus, rutrum morbi scelerisque tempor mi. Etiam urna, cras bibendum leo nec faucibus velit. Tempor lectus dignissim at auctor integer neque quam amet.</p>
              <div className="d-flex align-items-center">
                <button className="btn-like" type="button"><i className="fi-like"></i><span>(0)</span></button>
                <div className="border-end me-1">&nbsp;</div>
                <button className="btn-dislike" type="button"><i className="fi-dislike"></i><span>(0)</span></button>
              </div>
            </div>
            {/* <!-- Pagination--> */}
            <nav className="mt-2 mb-4" aria-label="Reviews pagination">
              <ul className="pagination">
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
          {/* <!-- Sidebar--> */}
          <aside className="col-lg-4 col-md-5 ms-lg-auto pb-1">
            {/* <!-- Contact card--> */}
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between">
                  <div>
                    <h5 className="mb-1">Rokye</h5>
                    <div className="mb-1"><span className="star-rating"><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i></span><span className="ms-1 fs-sm text-muted">(5 reviews)</span>
                    </div>
                    <p>Rokye Property Group </p>
                  </div>
                  <div className="ms-4 flex-shrink-0"><a className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2" href="#"><i className="fi-facebook"></i></a><a className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2" href="#"><i className="fi-linkedin"></i></a></div>
                </div>
                <ul className="list-unstyled border-bottom mb-4 pb-4">
                  <li><a className="nav-link fw-normal p-0" href="tel:3025550107"><i className="fi-real-estate-house mt-n1 me-2 align-middle opacity-60"></i>204, Corporate House <br/>Income Tax Ahmedabad - 380009</a></li>
                  <li><a className="nav-link fw-normal p-0" href="mailto:rokye@email.com"><i className="fi-mail mt-n1 me-2 align-middle opacity-60"></i>service@rokye.com</a></li>
                </ul>
                {/* <!-- Contact form--> */}
                <form className="needs-validation" novalidate>
                  <p> I am</p>
                  <div className="input-group">

                    <div>
                      <div className="form-check">
                        <input style={{"width": "22px","height": "22px"}} className="form-check-input " type="radio" id="ex-radio-1" name="radio" />
                        <label style={{"margin": "7px 0 0 5px"}} className="form-check-label " for="ex-radio-1">Owner</label>
                      </div>
                    </div>
                    <br/>
                    <div>
                        <div style={{"marginLeft": "100px"}} className="form-check">
                      <input style={{"width": "22px","height": "22px"}}  className="form-check-input" type="radio" id="ex-radio-2" name="radio" />
                      <label style={{"margin": "7px 0 0 5px"}}  className="form-check-label" for="ex-radio-2">Tenant</label>
                    </div>
                    </div>

                </div>
                <br/>
                  <div className="mb-3">
                    <input className="form-control" type="text" placeholder="Your name*" required />
                    <div className="invalid-feedback">Please enter your name!</div>
                  </div>
                  <div className="mb-3">
                    <input className="form-control" type="email" placeholder="Email*" required />
                    <div className="invalid-feedback">Please provide valid email address!</div>
                  </div>
                  <input className="form-control mb-3" type="tel" placeholder="Phone*" />

                  
                  <textarea className="form-control mb-3" rows="3" placeholder="Message" style={{"resize": "none"}}></textarea>
                  <div className="form-check mb-4">
                    <input className="form-check-input" id="form-submit" type="checkbox" checked />
                    <label className="form-check-label fs-sm" for="form-submit">I agree to the Terms of use and Privacy policy</label>
                  </div>
                  <button className="btn btn-lg btn-primary d-block w-100" type="submit">Send request</button>
                </form>
              </div>
            </div>
        
          </aside>
    
        </div>
      </section>
    
     </>
    )
}

export default SingleProperty
