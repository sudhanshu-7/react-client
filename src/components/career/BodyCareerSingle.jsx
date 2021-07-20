import React from 'react'

const BodyCareerSingle = () => {
    return (
        <>
        <section class="position-relative bg-white rounded-xxl-4 zindex-5" style={{"marginTop": "150px"}}>
        <div class="container pt-4 pb-5 mb-md-4">
          {/* <!-- Breadcrumb--> */}
          <nav class="pb-4 my-2" aria-label="Breadcrumb">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item"><a href="job-board-home-v1.html">Home</a></li>
              <li class="breadcrumb-item"><a href="job-board-catalog.html">Find jobs</a></li>
              <li class="breadcrumb-item active" aria-current="page">Partnership Manager</li>
            </ol>
          </nav>
          <div class="row">
            {/* <!-- Signle job content--> */}
            <div class="col-lg-7 position-relative pe-lg-5 mb-5 mb-lg-0" style={{zIndex: "1025"}}>
              <div class="d-flex justify-content-between mb-2">
                <h2 class="h3 mb-0">Partnership Manager</h2>
                <div class="text-end"><span class="badge bg-faded-accent rounded-pill fs-sm mb-2">Featured</span>
                  <div class="fs-sm text-muted">2 hours ago</div>
                </div>
              </div>
              <ul class="list-unstyled fs-sm mb-4">
                <li class="mb-2"><a class="d-flex align-items-center text-decoration-none" href="job-board-employer-single.html"><i class="fi-external-link me-2"></i><span class="text-decoration-underline">Zalo Tech Company</span></a></li>
                <li class="d-flex align-items-center mb-2"><i class="fi-map-pin text-muted me-2"></i><span>New York</span></li>
                <li class="d-flex align-items-center mb-2"><i class="fi-cash fs-base text-muted me-2"></i><span>$10,000</span></li>
                <li class="d-flex align-items-center mb-2"><i class="fi-phone text-muted me-2"></i><span class="me-2">Bessie Cooper, HR Manager</span><a href="/#">Show phone</a></li>
                <li class="d-flex align-items-center mb-2"><i class="fi-clock text-muted me-2"></i><span class="me-2">Full-time</span></li>
              </ul>
              <hr class="mb-4" />
              <h3 class="h6">Description:</h3>
              <p>Sit sit viverra aenean nunc. Vestibulum nulla tellus, praesent mi. Eget eu sapien posuere varius nisl. Arcu scelerisque ut venenatis, nec. Sed id etiam nisl nisl, elementum ac odio morbi dolor. Sem mauris turpis ultrices sed porttitor orci, erat. Ultrices ut a mi sem mauris, vitae egestas. Eget suscipit a, consectetur quam sed morbi. Metus, tortor egestas phasellus urna. Lorem eu dictum egestas vitae faucibus congue urna. Sed dolor sed risus duis volutpat ullamcorper.</p>
              <h3 class="h6 pt-2">Requirements:</h3>
              <ul class="list-unstyled">
                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>Placerat id mauris, ac ipsum nulla mi netus vestibulum fringilla.</li>
                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>Turpis venenatis sapien etiam in orci, euismod.</li>
                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>Elit tempor, integer augue aliquam justo.</li>
                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>Ultricies accumsan, malesuada pellentesque malesuada massa sed viverra eget.</li>
                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>Varius mauris netus placerat neque, orci amet odio orci.</li>
                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>Fermentum ut mi sit vel sit dictum mollis turpis.</li>
              </ul>
              <h3 class="h6 pt-2">Company offers:</h3>
              <ul class="list-unstyled">
                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>Et mattis sit imperdiet risus, fermentum ultrices non.</li>
                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>Sed phasellus consequat nunc enim interdum tristique ultrices egestas.</li>
                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>Molestie mus ultrices tellus enim.</li>
                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>Vitae pulvinar massa id lorem aliquam fermentum egestas.</li>
                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>Dictumst blandit sit mauris in consectetur.</li>
                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>Sem purus lorem odio donec faucibus ipsum ultricies.</li>
              </ul>
              <p class="pt-2 mb-1">Please, send your CV marked “Partnership Manager” in the subject via e-mail:</p><a class="nav-link-muted fw-bold" href="mailto:contact@example.com">contact@example.com</a>
              <hr class="my-4" />
              <div class="btn-group btn-group-lg">
                <button class="btn btn-primary rounded-pill rounded-end-0 ps-4 pe-3" type="button">Apply for this position</button>
                <button class="btn btn-primary border-end-0 border-top-0 border-bottom-0 border-light rounded-pill rounded-start-0 px-3" type="button"><i class="fi-heart me-1"></i></button>
              </div>
            </div>
            {/* <!-- Sticky sidebar--> */}
            <aside class="col-lg-5" style={{"marginTop": "-6rem"}}>
              <div class="sticky-top" style={{"paddingTop": "6rem"}}>
                <div class="card shadow-sm mb-3 mb-lg-0">
                  <div class="card-body">
                    <h2 class="h3">Subscribe to our newsletter</h2>
                    <p>Don’t miss any job updates and relevant vacancies info!</p>
                    <form class="form-group rounded-pill mb-3">
                      <div class="input-group"><span class="input-group-text text-muted"><i class="fi-mail text-muted"></i></span>
                        <input class="form-control" type="text" placeholder="Your email" />
                      </div>
                      <button class="btn btn-primary rounded-pill" type="button">Subscribe</button>
                    </form>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="agree" />
                      <label class="form-check-label" for="agree">I agree to receive communications.</label>
                    </div>
                    <hr class="my-4" />
                    <div class="d-flex align-items-end">
                      <div class="fs-lg fw-bold me-3">Like our jobs?<br />Receive vacancies in Whatsapp</div><a style={{"backgroundColor": "#fd5631",color: "white"}} class="btn btn-icon btn-translucent-primary btn-xs rounded-circle" href="/#"><i class="fi-whatsapp"></i></a>
                    </div>
                  </div>
                </div>
                <div class="pt-4 pt-lg-5 ps-4">
                  <h2 class="h3">My last search queries:</h2>
                  <ul class="list-unstyled mb-0">
                    <li class="mb-0"><a class="nav-link d-inline-block fw-normal px-0 py-1" href="/#">Accountant</a></li>
                    <li class="mb-0"><a class="nav-link d-inline-block fw-normal px-0 py-1" href="/#">Manager</a></li>
                    <li class="mb-0"><a class="nav-link d-inline-block fw-normal px-0 py-1" href="/#">Administrator</a></li>
                    <li class="mb-0"><a class="nav-link-muted d-inline-block fw-bold py-1" href="/#">Clear all<i class="fi-x fs-xs ms-2"></i></a></li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      {/* <!-- Related jobs (carousel)--> */}
      <section class="container pt-md-2 pb-5 mb-md-4">
        <div class="d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2">
          <h2 class="h3 mb-sm-0">You may be interested in</h2><a class="btn btn-link fw-normal p-0" href="job-board-catalog.html">View all<i class="fi-arrow-long-right ms-2"></i></a>
        </div>
        <div class="tns-carousel-wrapper tns-controls-outside-xxl tns-nav-outside tns-nav-outside-flush">
          <div class="tns-carousel-inner" data-carousel-options="{&quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1, &quot;gutter&quot;: 16},&quot;600&quot;:{&quot;items&quot;:2, &quot;gutter&quot;: 16},&quot;768&quot;:{&quot;items&quot;:2, &quot;gutter&quot;: 24},&quot;992&quot;:{&quot;items&quot;:3, &quot;gutter&quot;: 24}}}">
            {/* <!-- Item--> */}
            <div class="pb-4">
              <div class="card bg-secondary card-hover h-100">
                <div class="card-body pb-3">
                  <div class="d-flex align-items-center mb-2"><img class="me-2" src="img/job-board/company/it-pro.png" width="24" alt="IT Pro Logo" /><span class="fs-sm text-dark opacity-80 px-1">IT Pro TV</span><span class="badge bg-faded-danger rounded-pill fs-sm ms-auto">Hot</span></div>
                  <h3 class="h6 card-title pt-1 mb-2"><a class="text-nav stretched-link text-decoration-none" href="/#">Business Analyst</a></h3>
                  <p class="fs-sm mb-0"> Blandit a tincidunt arcu nulla. Sem neque, rhoncus non odio nulla maecenas elit praesent. Orci tristique velit mauris cursus nibh. Hendrerit et dictum sed...</p>
                </div>
                <div class="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
                  <div class="fs-sm"><span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>Chicago</span><span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$7,500</span></div>
                  <button class="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay" type="button" data-bs-toggle="tooltip" title="Add to saved jobs"><i class="fi-heart"></i></button>
                </div>
              </div>
            </div>
            {/* <!-- Item--> */}
            <div class="pb-4">
              <div class="card bg-secondary card-hover h-100">
                <div class="card-body pb-3">
                  <div class="d-flex align-items-center mb-2"><img class="me-2" src="img/job-board/company/xbox.png" width="24" alt="Xbox Logo" /><span class="fs-sm text-dark opacity-80 px-1">Xbox Company</span><span class="badge bg-faded-accent rounded-pill fs-sm ms-auto">Featured</span></div>
                  <h3 class="h6 card-title pt-1 mb-2"><a class="text-nav stretched-link text-decoration-none" href="/#">Full-Stack Developer</a></h3>
                  <p class="fs-sm mb-0">Euismod nec sagittis sit arcu libero, metus. Aliquam nisl rhoncus porttitor volutpat, ante cras tincidunt. Nec sit nunc, ornare tincidunt enim, neque...</p>
                </div>
                <div class="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
                  <div class="fs-sm"><span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>Washington</span><span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$13,000</span></div>
                  <button class="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay" type="button" data-bs-toggle="tooltip" title="Add to saved jobs"><i class="fi-heart"></i></button>
                </div>
              </div>
            </div>
            {/* <!-- Item--> */}
            <div class="pb-4">
              <div class="card bg-secondary card-hover h-100">
                <div class="card-body pb-3">
                  <div class="d-flex align-items-center mb-2"><img class="me-2" src="img/job-board/company/xampp.png" width="24" alt="XAMPP Logo" /><span class="fs-sm text-dark opacity-80 px-1">XAMPP Company</span><span class="badge bg-faded-danger rounded-pill fs-sm ms-auto">Hot</span></div>
                  <h3 class="h6 card-title pt-1 mb-2"><a class="text-nav stretched-link text-decoration-none" href="/#">Business Analyst</a></h3>
                  <p class="fs-sm mb-0">Auctor elit in aenean sodales mattis. Ultricies nec eu augue sit. Ornare pulvinar enim fames orci enim in libero. Eu, lorem leo netus velit egestas risus...</p>
                </div>
                <div class="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
                  <div class="fs-sm"><span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>New Jersey</span><span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$6,500</span></div>
                  <button class="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay" type="button" data-bs-toggle="tooltip" title="Add to saved jobs"><i class="fi-heart"></i></button>
                </div>
              </div>
            </div>
            {/* <!-- Item--> */}
            <div class="pb-4">
              <div class="card bg-secondary card-hover h-100">
                <div class="card-body pb-3">
                  <div class="d-flex align-items-center mb-2"><img class="me-2" src="img/job-board/company/zapier.png" width="24" alt="Zapier Logo" /><span class="fs-sm text-dark opacity-80 px-1">Zapier</span><span class="badge bg-faded-info rounded-pill fs-sm ms-auto">New</span></div>
                  <h3 class="h6 card-title pt-1 mb-2"><a class="text-nav stretched-link text-decoration-none" href="/#">Onboarding Specialist</a></h3>
                  <p class="fs-sm mb-0">Blandit a tincidunt arcu nulla. Sem neque, rhoncus non odio nulla maecenas elit praesent. Orci tristique velit mauris cursus nibh. Hendrerit et dictum sed...</p>
                </div>
                <div class="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
                  <div class="fs-sm"><span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>Houston</span><span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$4,000</span></div>
                  <button class="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay" type="button" data-bs-toggle="tooltip" title="Add to saved jobs"><i class="fi-heart"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default BodyCareerSingle
