import React from 'react'

const BodyReview = () => {
    return (
        <>
    <br/>
      <br/>
      {/* <!-- Review modal--> */}
      <div class="modal fade" id="modal-review" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header d-block position-relative border-0 pb-0 px-sm-5 px-4">
              <h3 class="modal-title mt-4 text-center">Leave a review</h3>
              <button class="btn-close position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body px-sm-5 px-4">
              <form class="needs-validation" novalidate>
                <div class="mb-3">
                  <label class="form-label" for="review-name">Name <span class='text-danger'>*</span></label>
                  <input class="form-control" type="text" id="review-name" placeholder="Your name" required />
                  <div class="invalid-feedback">Please let us know your name.</div>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="review-email">Email <span class='text-danger'>*</span></label>
                  <input class="form-control" type="email" id="review-email" placeholder="Your email address" required />
                  <div class="invalid-feedback">Please provide a valid email address.</div>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="review-rating">Rating <span class='text-danger'>*</span></label>
                  <select class="form-control form-select" id="review-rating" required>
                    <option value="" selected disabled hidden>Choose rating</option>
                    <option value="5 stars">5 stars</option>
                    <option value="4 stars">4 stars</option>
                    <option value="3 stars">3 stars</option>
                    <option value="2 stars">2 stars</option>
                    <option value="1 star">1 star</option>
                  </select>
                  <div class="invalid-feedback">Please rate the property.</div>
                </div>
                <div class="mb-4">
                  <label class="form-label" for="review-text">Email <span class='text-danger'>*</span></label>
                  <textarea class="form-control" id="review-text" rows="5" placeholder="Your review message" required></textarea>
                  <div class="invalid-feedback">Please write your review.</div>
                </div>
                <button class="btn btn-primary d-block rounded-pill w-100 mb-4" type="submit">Submit a review</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page header--> */}
      <section class="container pt-5 mt-5">
        {/* <!-- Breadcrumb--> */}
        <nav class="mb-3 pt-md-3" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="city-guide-home-v1.html">Home</a></li>
            <li class="breadcrumb-item"><a href="city-guide-catalog.html">Find accommodation</a></li>
            <li class="breadcrumb-item active" aria-current="page">Testimonials</li>
          </ol>
        </nav>
        <div class="d-sm-flex align-items-center justify-content-between mb-4 pb-sm-2">
          <h1 class="h2 me-3 mb-sm-0">Testimonials</h1>
          <div class="text-nowrap">
            <button class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle" type="button" data-bs-toggle="tooltip" title="Add to Wishlist"><i class="fi-heart"></i></button>
            <div class="dropdown d-inline-block" data-bs-toggle="tooltip" title="Share">
              <button class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2" type="button" data-bs-toggle="dropdown"><i class="fi-share"></i></button>
              <div class="dropdown-menu dropdown-menu-end my-1">
                <button class="dropdown-item" type="button"><i class="fi-facebook fs-base opacity-75 me-2"></i>Facebook</button>
                <button class="dropdown-item" type="button"><i class="fi-twitter fs-base opacity-75 me-2"></i>Twitter</button>
                <button class="dropdown-item" type="button"><i class="fi-instagram fs-base opacity-75 me-2"></i>Instagram</button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Nav pills--> */}
        {/* <!-- <ul class="nav nav-pills border-bottom pb-3 mb-4">
          <li class="nav-item"><a class="nav-link d-flex align-items-center" href="city-guide-single.html"><i class="fi-image me-2"></i>Gallery</a></li>
          <li class="nav-item"><a class="nav-link d-flex align-items-center" href="city-guide-single-info.html"><i class="fi-info-circle me-2"></i>Info</a></li>
          <li class="nav-item"><a class="nav-link d-flex align-items-center active" href="city-guide-single-reviews.html"><i class="fi-edit me-2"></i>Reviews</a></li>
        </ul> --> */}
      </section>
       {/* <!-- Page content--> */}
      <section class="container pb-5 mb-md-4">
        <div class="row">
          {/* <!-- Left column--> */}
          <div class="col-md-7 mb-md-0 mb-4 pb-md-0 pb-2">
            <h2 class="h4 mb-4">Average rating</h2>
            <div class="row mb-md-5 mb-4">
              {/* <!-- Rating breakdown--> */}
              <div class="col-sm-8 order-sm-1 order-2">
                <div class="d-flex align-items-center mb-2 fs-sm">
                  <div class="text-nowrap">5<i class="fi-star mt-n1 ms-1 align-middle opacity-70"></i></div>
                  <div class="progress w-100 mx-3">
                    <div class="progress-bar bg-warning" role="progressbar" style={{"width":"80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div><span style={{"minWidth": "48px"}}>80%</span>
                </div>
                <div class="d-flex align-items-center mb-2 fs-sm">
                  <div class="text-nowrap">4<i class="fi-star mt-n1 ms-1 align-middle opacity-70"></i></div>
                  <div class="progress w-100 mx-3">
                    <div class="progress-bar bg-warning" role="progressbar" style={{"width":"10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                  </div><span style={{"minWidth": "48px"}}>10%</span>
                </div>
                <div class="d-flex align-items-center mb-2 fs-sm">
                  <div class="text-nowrap">3<i class="fi-star mt-n1 ms-1 align-middle opacity-70"></i></div>
                  <div class="progress w-100 mx-3">
                    <div class="progress-bar bg-warning" role="progressbar" style={{"width":"0%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                  </div><span style={{"minWidth": "48px"}}>0%</span>
                </div>
                <div class="d-flex align-items-center mb-2 fs-sm">
                  <div class="text-nowrap">2<i class="fi-star mt-n1 ms-1 align-middle opacity-70"></i></div>
                  <div class="progress w-100 mx-3">
                    <div class="progress-bar bg-warning" role="progressbar" style={{"width":"0%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                  </div><span style={{"minWidth": "48px"}}>0%</span>
                </div>
                <div class="d-flex align-items-center mb-2 fs-sm">
                  <div class="text-nowrap">1<i class="fi-star mt-n1 ms-1 align-middle opacity-70"></i></div>
                  <div class="progress w-100 mx-3">
                    <div class="progress-bar bg-warning" role="progressbar" style={{"width":"10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                  </div><span style={{"minWidth": "48px"}}>10%</span>
                </div>
              </div>
              {/* <!-- Score--> */}
              <div class="col-sm-4 order-sm-2 order-1 mb-sm-0 mb-3 text-center">
                <h5 class="display-4 mb-2">4,7</h5>
                <div><span class="star-rating"><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i></span>
                </div><span class="fs-sm">48 reviews</span>
              </div>
            </div>
            {/* <!-- Add review btn + Reviews sort--> */}
            <div class="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-4 pb-4 border-bottom"><a class="btn btn-outline-primary rounded-pill mb-sm-0 mb-3" href="#modal-review" data-bs-toggle="modal"><i class="fi-edit mt-n1 me-1 align-middle"></i>Add review</a>
              <div class="d-flex align-items-center ms-sm-4">
                <label class="d-inline-block me-2 pe-1 text-muted text-nowrap" for="reviews-sort"><i class="fi-arrows-sort mt-n1 me-1 align-middle opacity-80"></i>Sort by:</label>
                <select class="form-select" id="reviews-sort" style={{"minWidth": "180px"}}>
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Popular</option>
                  <option>High rating</option>
                  <option>Low rating</option>
                </select>
              </div>
            </div>
            {/* <!-- Review--> */}
            <div class="mb-4 pb-4 border-bottom">
              <div class="d-flex justify-content-between mb-3">
                <div class="d-flex align-items-center pe-2"><img class="rounded-circle me-1" src="img/avatars/03.jpg" width="48" alt="Avatar" />
                  <div class="ps-2">
                    <h6 class="fs-base mb-0">Annette Black</h6><span class="star-rating"><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i></span>
                  </div>
                </div><span class="text-muted fs-sm">Jan 17, 2021</span>
              </div>
              <p>Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.</p>
              <div class="d-flex align-items-center">
                <button class="btn-like" type="button"><i class="fi-like"></i><span>(3)</span></button>
                <div class="border-end me-1">&nbsp;</div>
                <button class="btn-dislike" type="button"><i class="fi-dislike"></i><span>(0)</span></button>
              </div>
            </div>
            {/* <!-- Review--> */}
            <div class="mb-4 pb-4 border-bottom">
              <div class="d-flex justify-content-between mb-3">
                <div class="d-flex align-items-center pe-2"><img class="rounded-circle me-1" src="img/avatars/13.png" width="48" alt="Avatar" />
                  <div class="ps-2">
                    <h6 class="fs-base mb-0">Darrell Steward</h6><span class="star-rating"><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star"></i></span>
                  </div>
                </div><span class="text-muted fs-sm">Dec 1, 2020</span>
              </div>
              <p>Vel dictum nunc ut tristique. Egestas diam amet, ut proin hendrerit. Dui accumsan at phasellus tempus consequat dignissim.</p>
              <div class="d-flex align-items-center">
                <button class="btn-like" type="button"><i class="fi-like"></i><span>(0)</span></button>
                <div class="border-end me-1">&nbsp;</div>
                <button class="btn-dislike" type="button"><i class="fi-dislike"></i><span>(1)</span></button>
              </div>
            </div>
            {/* <!-- Review--> */}
            <div class="mb-4 pb-4 border-bottom">
              <div class="d-flex justify-content-between mb-3">
                <div class="d-flex align-items-center pe-2"><img class="rounded-circle me-1" src="img/avatars/13.png" width="48" alt="Avatar" />
                  <div class="ps-2">
                    <h6 class="fs-base mb-0">Floyd Miles</h6><span class="star-rating"><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i></span>
                  </div>
                </div><span class="text-muted fs-sm">Oct  28, 2020</span>
              </div>
              <p>Viverra nunc blandit sapien non imperdiet sit. Purus tempus elementum aliquam eu urna. A aenean duis non egestas at libero porttitor integer eget. Sed dictum lobortis laoreet gravida.</p>
              <div class="d-flex align-items-center">
                <button class="btn-like" type="button"><i class="fi-like"></i><span>(2)</span></button>
                <div class="border-end me-1">&nbsp;</div>
                <button class="btn-dislike" type="button"><i class="fi-dislike"></i><span>(1)</span></button>
              </div>
            </div>
            {/* <!-- Review--> */}
            <div class="mb-4 pb-4 border-bottom">
              <div class="d-flex justify-content-between mb-3">
                <div class="d-flex align-items-center pe-2"><img class="rounded-circle me-1" src="img/avatars/04.jpg" width="48" alt="Avatar" />
                  <div class="ps-2">
                    <h6 class="fs-base mb-0">Ralph Edwards</h6><span class="star-rating"><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star"></i></span>
                  </div>
                </div><span class="text-muted fs-sm">Sep 14, 2020</span>
              </div>
              <p>Elementum nisl, egestas nam consectetur nisl, at pellentesque cras. Non sed ac vivamus dolor dignissim ut. Nisl sapien blandit pulvinar sagittis donec sociis ipsum arcu est. Tempus, rutrum morbi scelerisque tempor mi. Etiam urna, cras bibendum leo nec faucibus velit. Tempor lectus dignissim at auctor integer neque quam amet.</p>
              <div class="d-flex align-items-center">
                <button class="btn-like" type="button"><i class="fi-like"></i><span>(0)</span></button>
                <div class="border-end me-1">&nbsp;</div>
                <button class="btn-dislike" type="button"><i class="fi-dislike"></i><span>(0)</span></button>
              </div>
            </div>
            {/* <!-- Review pagination + Add review btn--> */}
            <div class="d-flex align-items-center justify-content-between">
              <nav aria-label="Reviews pagination">
                <ul class="pagination mb-0">
                  <li class="page-item d-sm-none"><span class="page-link page-link-static">1 / 8</span></li>
                  <li class="page-item active d-none d-sm-block" aria-current="page"><span class="page-link">1<span class="visually-hidden">(current)</span></span></li>
                  <li class="page-item d-none d-sm-block"><a class="page-link" href="/#">2</a></li>
                  <li class="page-item d-none d-sm-block"><a class="page-link" href="/#">3</a></li>
                  <li class="page-item d-none d-sm-block">...</li>
                  <li class="page-item d-none d-sm-block"><a class="page-link" href="/#">8</a></li>
                  <li class="page-item"><a class="page-link" href="/#" aria-label="Next"><i class="fi-chevron-right"></i></a></li>
                </ul>
              </nav><a class="btn btn-outline-primary rounded-pill ms-4" href="#modal-review" data-bs-toggle="modal"><i class="fi-edit mt-n1 me-1 align-middle"></i>Add review</a>
            </div>
          </div>
          {/* <!-- Sidebar--> */}
          <aside class="col-md-5">
            {/* <!-- Place card--> */}
            <div class="card mb-4 p-2 shadow-sm">
              <div class="card-body">
                {/* <!-- Place info--> */}
                <div class="d-flex align-items-start mb-3 pb-2 border-bottom"><img src="img/city-guide/brands/hotel.svg" width="60" alt="Thumbnail" />
                  <div class="ps-2 ms-1">
                    <h3 class="h5 mb-2">  Rokye</h3>
                    <ul class="list-unstyled d-flex flex-wrap fs-sm">
                      <li class="me-2 mb-1 pe-1"><i class="fi-star-filled mt-n1 me-1 text-warning align-middle opacity-70"></i><b>4.9 </b>(48)</li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Place contacts--> */}
                <div class="mb-3 pb-3 border-bottom">
                  <h4 class="h5 mb-2">Contacts:</h4>
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a class="nav-link p-0 fw-normal" href="mailto:example@email.com"><i class="fi-real-estate-house mt-n1 me-2 align-middle opacity-70"></i>
                      204, Corporate House <br />Incometax Ahmedabad - 380009</a>
                    </li>
                    <li class="nav-item"><a class="nav-link p-0 fw-normal" href="tel:4065550120"><i class="fi-mail mt-n1 me-2 align-middle opacity-70"></i>service@rokye.com</a></li>
                  </ul>
                </div>
                {/* <!-- Place pricing--> */}
                <div class="mb-3 pb-4 border-bottom">
                  <div class="row row-cols-1">
                    <div class="col mb-3">
                      <h2 class="h2 mb-0"><span class="fs-4">₹ 5900 </span><span class="fs-base fw-normal text-body"> Inc. GST&nbsp;-Till You Rent</span></h2>
                    </div>
                    <div class="col"><a class="btn btn-primary btn-lg rounded-pill w-sm-auto w-100" href="/#">Enquire now<i class="fi-chevron-right fs-sm ms-2"></i></a></div>
                  </div>
                </div>
                {/* <!-- Place following--> */}
                <div class="d-flex align-items-center">
                  <h4 class="h5 mb-0 me-3">Follow:</h4>
                  <div class="text-nowrap"><a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2" href="/#"><i class="fi-facebook"></i></a><a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2" href="/#"><i class="fi-instagram"></i></a><a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle" href="/#"><i class="fi-twitter"></i></a></div>
                </div>
              </div>
            </div>
            
          </aside>
        </div>
      </section>
      {/* <!-- Recently viewed--> */}
      <section class="container pb-5 mb-lg-4">
        <div class="d-flex align-items-center justify-content-between mb-4 pb-2">
          <h2 class="h3 mb-0">Recently viewed</h2><a class="btn btn-link fw-normal ms-sm-3 p-0" href="city-guide-catalog.html">View all<i class="fi-arrow-long-right ms-2"></i></a>
        </div>
        <div class="tns-carousel-wrapper tns-controls-outside-xxl tns-nav-outside mb-xxl-2">
          <div class="tns-carousel-inner" data-carousel-options="{&quot;items&quot;: 3, &quot;gutter&quot;: 24, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1,&quot;nav&quot;:true},&quot;500&quot;:{&quot;items&quot;:2},&quot;850&quot;:{&quot;items&quot;:3},&quot;1400&quot;:{&quot;items&quot;:3,&quot;nav&quot;:false}}}">
            {/* <!-- Item--> */}
            <div>
              <div class="position-relative">
                <div class="position-relative mb-3">
                  <button class="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i class="fi-heart"></i></button><img class="rounded-3" src="img/city-guide/catalog/09.jpg" alt="Article img" />
                </div>
                <h3 class="mb-2 fs-lg"><a class="nav-link stretched-link" href="/#">Repose Hotel</a></h3>
                <ul class="list-inline mb-0 fs-xs">
                  <li class="list-inline-item pe-1"><i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>5.0</b><span class="text-muted">&nbsp;(48)</span></li>
                  <li class="list-inline-item pe-1"><i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$$</li>
                  <li class="list-inline-item pe-1"><i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>1.4 km from center</li>
                </ul>
              </div>
            </div>
            {/* <!-- Item--> */}
            <div>
              <div class="position-relative">
                <div class="position-relative mb-3">
                  <button class="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i class="fi-heart"></i></button><img class="rounded-3" src="img/city-guide/catalog/05.jpg" alt="Article img" />
                </div>
                <h3 class="mb-2 fs-lg"><a class="nav-link stretched-link" href="/#">Leisure Inn</a></h3>
                <ul class="list-inline mb-0 fs-xs">
                  <li class="list-inline-item pe-1"><i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>4.8</b><span class="text-muted">&nbsp;(24)</span></li>
                  <li class="list-inline-item pe-1"><i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$$$</li>
                  <li class="list-inline-item pe-1"><i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>0.5 km from center</li>
                </ul>
              </div>
            </div>
            {/* <!-- Item--> */}
            <div>
              <div class="position-relative">
                <div class="position-relative mb-3">
                  <button class="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i class="fi-heart"></i></button><img class="rounded-3" src="img/city-guide/catalog/11.jpg" alt="Article img" />
                </div>
                <h3 class="mb-2 fs-lg"><a class="nav-link stretched-link" href="/#">Soothe &amp; Stay</a></h3>
                <ul class="list-inline mb-0 fs-xs">
                  <li class="list-inline-item pe-1"><i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>4.9</b><span class="text-muted">&nbsp;(43)</span></li>
                  <li class="list-inline-item pe-1"><i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$$$</li>
                  <li class="list-inline-item pe-1"><i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>1.8 km from center</li>
                </ul>
              </div>
            </div>
            {/* <!-- Item--> */}
            <div>
              <div class="position-relative">
                <div class="position-relative mb-3">
                  <button class="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i class="fi-heart"></i></button><img class="rounded-3" src="img/city-guide/catalog/04.jpg" alt="Article img" />
                </div>
                <h3 class="mb-2 fs-lg"><a class="nav-link stretched-link" href="/#">Merry Berry Motel</a></h3>
                <ul class="list-inline mb-0 fs-xs">
                  <li class="list-inline-item pe-1"><i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>4.5</b><span class="text-muted">&nbsp;(13)</span></li>
                  <li class="list-inline-item pe-1"><i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$$</li>
                  <li class="list-inline-item pe-1"><i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>0.4 km from center</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


        </>
    )
}

export default BodyReview
