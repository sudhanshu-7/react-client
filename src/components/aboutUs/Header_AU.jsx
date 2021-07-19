import React from 'react'

const Header_AU = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light fixed-top" data-scroll-header>
        <div class="container"><a class="navbar-brand me-3 me-xl-4" href="real-estate-home.html"><img class="d-block" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1625251080/realestate4/Rokye_3s_oth4y9.png" width="116" alt="Finder" /></a>
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button><a className="btn btn-sm text-primary d-none d-lg-block order-lg-3" href="#signin-modal" data-bs-toggle="modal"><i className="fi-user me-2"></i>Sign in</a><a className="btn btn-primary btn-sm ms-2 order-lg-3" href="real-estate-add-property.html"><i className="fi-plus me-2"></i>Add Property</a>
          <div className="collapse navbar-collapse order-lg-2" id="navbarNav">
            <ul className="navbar-nav navbar-nav-scroll" style={{"maxHeight":"35rem"}}>
              {/* <!-- Demos switcher--> */}
              {/* <!-- Menu items--> */}
              <li className="nav-item"><a className="nav-link" href="real-estate-home.html">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="real-estate-home.html">Our Services</a></li>
              <li className="nav-item"><a className="nav-link" href="real-estate-home.html">Refer and Earn</a></li>
              <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Enquire</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="real-estate-catalog-rent.html">Home Owner</a></li>
                  <li><a className="dropdown-item" href="real-estate-catalog-sale.html">Tenant</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Help</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="real-estate-catalog-rent.html">Careers</a></li>
                  <li><a className="dropdown-item" href="real-estate-catalog-sale.html">FAQ</a></li>
                  <li><a className="dropdown-item" href="real-estate-single.html">Blog</a></li>
                </ul>
              </li>
            
              <li className="nav-item d-lg-none"><a className="nav-link" href="#signin-modal" data-bs-toggle="modal"><i className="fi-user me-2"></i>Sign in</a></li>
            </ul>
          </div>
        </div>
      </header>
    )
}

export default Header_AU
