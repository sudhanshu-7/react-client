import React from 'react'

const Footer = () => {
    return (
        <footer className="footer bg-secondary pt-5">
      <div className="container pt-lg-4 pb-4">
        <div className="row mb-5 pb-md-3 pb-lg-4">
            
          <div className="col mb-lg-0 mb-4">
            <div className="d-flex flex-sm-row flex-column justify-content-between mx-n2">
              <div className="mb-sm-0 mb-4 px-2"><a className="d-inline-block mb-4" href="real-estate-home.html"></a>
                <ul className="nav flex-column mb-sm-4 mb-2">
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="mailto:example@email.com"><i className="fi-real-estate-house mt-n1 me-2 align-middle opacity-70"></i>
                    204, Corporate House <br/>Incometax Ahmedabad - 380009</a></li>
                  <li className="nav-item"><a className="nav-link p-0 fw-normal" href="tel:4065550120"><i className="fi-mail mt-n1 me-2 align-middle opacity-70"></i>service@rokye.com</a></li>
                </ul>
                <div className="pt-2"><a className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="/#"><i className="fi-facebook"></i></a><a className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="/#"><i className="fi-twitter"></i></a><a className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="/#"><i className="fi-viber"></i></a><a className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="/#"><i className="fi-telegram"></i></a></div>
              </div>
              <div className="mb-sm-0 mb-4 px-2">
                <h4 className="h5">Quick Links</h4>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="/#">Our Services</a></li>
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="/#">Refer & Earn</a></li>
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="/#">Terms of Use</a></li>
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="/#">Privacy Policy</a></li>
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="/#">Reviews</a></li>
                </ul>
              </div>
              <div className="px-2">
                <h4 className="h5">About</h4>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="/#">Contact Us</a></li>
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="/#">About Us</a></li>
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="/#">Careers </a></li>
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="/#">FAQ</a></li>
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="/#">Blog</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 offset-xl-1">
            <h4 className="h5">About Us</h4>
            <div>
              <p style={{"margin": "0"}}>Welcome to Rokye!</p>
              <p>Rokye is a online real-estate platform that makes it possible to rent a residential property without paying any brokerage and you can avail our services without any advance payment, We believe in service first and pay later policy.
                 Rokye Group is reimagining online real estate to make it easier to unlock life’s next chapter. As the most-visited real estate website in India, Rokye offer customers an on-demand experience for residential renting with transparency and nearly seam</p>
            </div>
          </div>
          <div> © All rights reserved @ 2021 Rokye Realty LLP</div>
        </div>
      </div>
    </footer>
    )
}

export default Footer
