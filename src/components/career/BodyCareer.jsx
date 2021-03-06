import React from 'react'

const BodyCareer = () => {
    return (
        <div className="container mt-5 mb-md-2 pt-5 pb-3">
        {/* <!-- Breadcrumb--> */}
        <nav className="mb-4 pt-md-3" aria-label="Breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="job-board-home-v2.html">Home</a></li>
            <li className="breadcrumb-item"><a href="/#">Companies</a></li>
            <li className="breadcrumb-item active" aria-current="page">Rokye</li>
          </ol>
        </nav>
        <div className="row">
          {/* <!-- Content--> */}
          <div className="col-lg-8 order-lg-2 mb-5">
            {/* <!-- Job list--> */}
            <div className="d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2">
              <h1 className="h3 mb-sm-0 me-sm-3">Job openings</h1>
              <div className="d-flex align-items-center">
                <label className="fs-sm me-2 pe-1 text-nowrap" for="sorting"><i className="fi-arrows-sort mt-n1 me-2"></i>Sort by:</label>
                <select className="form-select form-select-sm" id="sorting">
                  <option>Newest</option>
                  <option>Popular</option>
                  <option>Highest Salary</option>
                </select>
              </div>
            </div>
            {/* <!-- Item--> */}
            <div className="card bg-secondary card-hover mb-2">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div className="d-flex align-items-center"><img className="me-2" src="img/job-board/company/zalo.png" width="24" alt="Zalo Logo" /><span className="fs-sm text-dark opacity-80 px-1">Rokye</span></div>
                  <div className="dropdown content-overlay">
                    <button className="btn btn-icon btn-light btn-xs rounded-circle shadow-sm" type="button" id="contextMenu1" data-bs-toggle="dropdown" aria-expanded="false"><i className="fi-dots-vertical"></i></button>
                    <ul className="dropdown-menu my-1" aria-labelledby="contextMenu1">
                      <li>
                        <button className="dropdown-item" type="button"><i className="fi-heart opacity-60 me-2"></i>Add to Saved Jobs</button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button"><i className="fi-x-circle opacity-60 me-2"></i>Not interested</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 className="h6 card-title pt-1 mb-3"><a className="text-nav stretched-link text-decoration-none" href="job-board-single.html">Business Analyst</a></h3>
                <div className="fs-sm"><span className="text-nowrap me-3"><i className="fi-map-pin text-muted me-1"> </i>Ahmedabad </span><span className="text-nowrap me-3"><i className="fi-cash fs-base text-muted me-1"></i>$7,500</span></div>
              </div>
            </div>
            {/* <!-- Item--> */}
            <div className="card bg-secondary card-hover mb-2">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div className="d-flex align-items-center"><img className="me-2" src="img/job-board/company/zalo.png" width="24" alt="Zalo Logo" /><span className="fs-sm text-dark opacity-80 px-1">Rokye</span><span className="badge bg-faded-accent rounded-pill fs-sm ms-2">Featured</span></div>
                  <div className="dropdown content-overlay">
                    <button className="btn btn-icon btn-light btn-xs rounded-circle shadow-sm" type="button" id="contextMenu2" data-bs-toggle="dropdown" aria-expanded="false"><i className="fi-dots-vertical"></i></button>
                    <ul className="dropdown-menu my-1" aria-labelledby="contextMenu2">
                      <li>
                        <button className="dropdown-item" type="button"><i className="fi-heart opacity-60 me-2"></i>Add to Saved Jobs</button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button"><i className="fi-x-circle opacity-60 me-2"></i>Not interested</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 className="h6 card-title pt-1 mb-3"><a className="text-nav stretched-link text-decoration-none" href="job-board-single.html">Partnership Manager</a></h3>
                <div className="fs-sm"><span className="text-nowrap me-3"><i className="fi-map-pin text-muted me-1"> </i>New York</span><span className="text-nowrap me-3"><i className="fi-cash fs-base text-muted me-1"></i>$10,000</span></div>
              </div>
            </div>
            {/* <!-- Item--> */}
            <div className="card bg-secondary card-hover mb-2">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div className="d-flex align-items-center"><img className="me-2" src="img/job-board/company/zalo.png" width="24" alt="Zalo Logo" /><span className="fs-sm text-dark opacity-80 px-1">Rokye</span><span className="badge bg-faded-danger rounded-pill fs-sm ms-2">Hot</span></div>
                  <div className="dropdown content-overlay">
                    <button className="btn btn-icon btn-light btn-xs rounded-circle shadow-sm" type="button" id="contextMenu3" data-bs-toggle="dropdown" aria-expanded="false"><i className="fi-dots-vertical"></i></button>
                    <ul className="dropdown-menu my-1" aria-labelledby="contextMenu3">
                      <li>
                        <button className="dropdown-item" type="button"><i className="fi-heart opacity-60 me-2"></i>Add to Saved Jobs</button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button"><i className="fi-x-circle opacity-60 me-2"></i>Not interested</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 className="h6 card-title pt-1 mb-3"><a className="text-nav stretched-link text-decoration-none" href="job-board-single.html">Senior Credit Analyst</a></h3>
                <div className="fs-sm"><span className="text-nowrap me-3"><i className="fi-map-pin text-muted me-1"> </i>New Jersey</span><span className="text-nowrap me-3"><i className="fi-cash fs-base text-muted me-1"></i>$8,000</span></div>
              </div>
            </div>
            {/* <!-- Item--> */}
            <div className="card bg-secondary card-hover mb-2">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div className="d-flex align-items-center"><img className="me-2" src="img/job-board/company/zalo.png" width="24" alt="Zalo Logo" /><span className="fs-sm text-dark opacity-80 px-1">Rokye</span></div>
                  <div className="dropdown content-overlay">
                    <button className="btn btn-icon btn-light btn-xs rounded-circle shadow-sm" type="button" id="contextMenu4" data-bs-toggle="dropdown" aria-expanded="false"><i className="fi-dots-vertical"></i></button>
                    <ul className="dropdown-menu my-1" aria-labelledby="contextMenu4">
                      <li>
                        <button className="dropdown-item" type="button"><i className="fi-heart opacity-60 me-2"></i>Add to Saved Jobs</button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button"><i className="fi-x-circle opacity-60 me-2"></i>Not interested</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 className="h6 card-title pt-1 mb-3"><a className="text-nav stretched-link text-decoration-none" href="job-board-single.html">Account Manager</a></h3>
                <div className="fs-sm"><span className="text-nowrap me-3"><i className="fi-map-pin text-muted me-1"> </i>New York</span><span className="text-nowrap me-3"><i className="fi-cash fs-base text-muted me-1"></i>$5,000</span></div>
              </div>
            </div>
            {/* <!-- Reviews--> */}
            <h2 className="h3 pt-4 pt-lg-5 my-4 pb-2">Employees reviews (62)</h2>
            {/* <!-- Reviews statistics--> */}
            <div className="d-flex align-items-center mb-2">
              <div className="text-nowrap fs-sm me-3">5<i className="fi-star text-muted ms-1 mt-n1"></i></div>
              <div className="progress w-100">
                <div className="progress-bar bg-warning" role="progressbar" style={{"width": "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2" style={{"width": "3rem"}}>70%</div>
            </div>
            <div className="d-flex align-items-center mb-2">
              <div className="text-nowrap fs-sm me-3">4<i className="fi-star text-muted ms-1 mt-n1"></i></div>
              <div className="progress w-100">
                <div className="progress-bar bg-warning" role="progressbar" style={{"width": "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2" style={{"width": "3rem"}}>15%</div>
            </div>
            <div className="d-flex align-items-center mb-2">
              <div className="text-nowrap fs-sm me-3">3<i className="fi-star text-muted ms-1 mt-n1"></i></div>
              <div className="progress w-100">
                <div className="progress-bar bg-warning" role="progressbar" style={{"width": "0"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2" style={{"width": "3rem"}}>0%</div>
            </div>
            <div className="d-flex align-items-center mb-2">
              <div className="text-nowrap fs-sm me-3">2<i className="fi-star text-muted ms-1 mt-n1"></i></div>
              <div className="progress w-100">
                <div className="progress-bar bg-warning" role="progressbar" style={{"width": "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2" style={{"width": "3rem"}}>10%</div>
            </div>
            <div className="d-flex align-items-center mb-2">
              <div className="text-nowrap fs-sm me-3">1<i className="fi-star text-muted ms-1 mt-n1"></i></div>
              <div className="progress w-100">
                <div className="progress-bar bg-warning" role="progressbar" style={{"width": "5%"}} aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2" style={{"width": "3rem"}}>5%</div>
            </div>
            {/* <!-- Sorting + add review button--> */}
            <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between border-bottom py-4 mt-3 mb-4">
              <div className="d-flex align-items-center me-sm-4 mb-sm-0 mb-3">
                <label className="me-2 pe-1 text-nowrap" for="review-sorting"><i className="fi-arrows-sort text-muted mt-n1 me-2"></i>Sort by:</label>
                <select className="form-select" id="review-sorting">
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Popular</option>
                  <option>High rating</option>
                  <option>Low rating</option>
                </select>
              </div><a className="btn btn-outline-primary rounded-pill" href="#modal-review" data-bs-toggle="modal"><i className="fi-edit me-1"></i>Add review</a>
            </div>
            {/* <!-- Review--> */}
            <div className="mb-4 pb-4 border-bottom">
              <div className="d-flex justify-content-between mb-3">
                <div className="d-flex align-items-center pe-2"><img className="rounded-circle me-1" src="img/avatars/06.jpg" width="48" alt="Avatar" />
                  <div className="ps-2">
                    <h6 className="fs-base mb-0">Kristin Watson</h6><span className="star-rating"><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i></span>
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
                    <h6 className="fs-base mb-0">Darrell Steward</h6><span className="star-rating"><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star"></i><i className="star-rating-icon fi-star"></i><i className="star-rating-icon fi-star"></i></span>
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
                <div className="d-flex align-items-center pe-2"><img className="rounded-circle me-1" src="img/avatars/07.jpg" width="48" alt="Avatar" />
                  <div className="ps-2">
                    <h6 className="fs-base mb-0">Cody Fisher</h6><span className="star-rating"><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i></span>
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
            {/* <!-- Review--> */}
            <div className="mb-4 pb-4 border-bottom">
              <div className="d-flex justify-content-between mb-3">
                <div className="d-flex align-items-center pe-2"><img className="rounded-circle me-1" src="img/avatars/13.png" width="48" alt="Avatar" />
                  <div className="ps-2">
                    <h6 className="fs-base mb-0">Guy Hawkins</h6><span className="star-rating"><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i><i className="star-rating-icon fi-star-filled active"></i></span>
                  </div>
                </div><span className="text-muted fs-sm">Dec 1, 2020</span>
              </div>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis morbi venenatis ut est.</p>
              <div className="d-flex align-items-center">
                <button className="btn-like" type="button"><i className="fi-like"></i><span>(1)</span></button>
                <div className="border-end me-1">&nbsp;</div>
                <button className="btn-dislike" type="button"><i className="fi-dislike"></i><span>(3)</span></button>
              </div>
            </div>
            {/* <!-- Pagination--> */}
            <nav className="mt-2" aria-label="Reviews pagination">
              <ul className="pagination">
                <li className="page-item d-sm-none"><span className="page-link page-link-static">1 / 5</span></li>
                <li className="page-item active d-none d-sm-block" aria-current="page"><span className="page-link">1<span className="visually-hidden">(current)</span></span></li>
                <li className="page-item d-none d-sm-block"><a className="page-link" href="/#">2</a></li>
                <li className="page-item d-none d-sm-block"><a className="page-link" href="/#">3</a></li>
                <li className="page-item d-none d-sm-block">...</li>
                <li className="page-item d-none d-sm-block"><a className="page-link" href="/#">8</a></li>
                <li className="page-item"><a className="page-link" href="/#" aria-label="Next"><i className="fi-chevron-right"></i></a></li>
              </ul>
            </nav>
          </div>
          {/* <!-- Sidebar--> */}
          <aside className="col-lg-4 order-lg-1 pe-xl-4 mb-5">
            <div className="d-flex align-items-start mb-4"><img src="img/job-board/company/zalo-lg.png" width="56" alt="Zalo Logo" />
              <div className="ps-3">
                <h2 className="h4 mb-1">Rokye</h2>
                <p className="d-flex align-items-center fs-sm mb-2"><i className="fi-map-pin me-1"></i><span>Ahmedabad</span></p>
                <p className="fs-sm"><a href="/#"><i className="fi-external-link me-2"></i>Visit wesite</a></p>
                <div className="d-flex"><a className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" href="/#"><i className="fi-facebook"></i></a><a className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" href="/#"><i className="fi-twitter"></i></a><a className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" href="/#"><i className="fi-youtube"></i></a><a className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm" href="/#"><i className="fi-linkedin"></i></a></div>
              </div>
            </div>
            <ul className="list-unstyled py-2">
              <li><strong>Category: </strong>Property Listing Company</li>
              <li><strong>Company size: </strong>more than 50 employees</li>
              <li><strong>Job openings: </strong>4</li>
            </ul>
            <div className="pb-4 mb-2 mb-sm-3">
              <p className="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p>
              <div className="collapse" id="showMore">
                <p className="mb-1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor laudantium, totam rem aperiam, eaque ipsa quae inventore veritatis. Nemo enim ipsam voluptatem quia voluptas.</p>
              </div><a className="collapse-label collapsed" href="#showMore" data-bs-toggle="collapse" data-bs-label-collapsed="Show more" data-bs-label-expanded="Show less" role="button" aria-expanded="false" aria-controls="showMore"></a>
            </div>
            <div className="card card-body shadow-sm mb-4">
              <h3 className="h4">Don???t miss new job openings by this company!</h3>
              <p className="mb-4">We will send you jobs as soon as they are posted in any category, in any city.</p>
              <form className="form-group rounded-pill">
                <div className="input-group input-group-sm"><span className="input-group-text text-muted"><i className="fi-mail"></i></span>
                  <input className="form-control" type="text" placeholder="Your email" required />
                </div>
                <button className="btn btn-primary btn-sm rounded-pill" type="submit">Subscribe</button>
              </form>
              <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox" id="agree-check" />
                <label className="form-check-label fs-sm" for="agree-check">I agree to receive communications.</label>
              </div>
            </div>
            <div className="pt-sm-3">
              <div className="card bg-secondary border-0">
                <div className="card-body">
                  <h3 className="h4">Professional CV is your ticket to dream job</h3>
                  <p className="mb-4">Create a??great resume on??Finder and take a??step toward finding your dream??job!</p><a className="btn btn-primary rounded-pill mb-4" href="job-board-post-resume-1.html">Post resume<i className="fi-chevron-right fs-sm ms-2"></i></a>
                  <div className="pt-3"><img className="d-block mx-auto" src="img/job-board/illustrations/post-resume-cta.svg" width="288" alt="Illustration" /></div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    )
}

export default BodyCareer
