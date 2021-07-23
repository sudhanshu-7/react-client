import React from 'react'

const Header = () => {
    return (
        <>
        <header class="navbar navbar-expand-lg navbar-light bg-light fixed-top" data-scroll-header>
        <div class="container"><a class="navbar-brand me-3 me-xl-4" href="real-estate-home.html"><img class="d-block" src="logo.png" width="116" height="40" alt="Finder" /></a>
          <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><a class="btn btn-sm text-primary d-none d-lg-block order-lg-3" href="#signin-modal" data-bs-toggle="modal"><i class="fi-user me-2"></i>Sign in</a><a class="btn btn-primary btn-sm ms-2 order-lg-3" href="real-estate-add-property.html"><i class="fi-plus me-2"></i>Add Property</a>
          <div class="collapse navbar-collapse order-lg-2" id="navbarNav">
            <ul class="navbar-nav navbar-nav-scroll" style = {{"maxHeight":"35rem"}}>
              {/* <!-- Demos switcher-->
              <!-- Menu items-->
              <!-- <li class="nav-item"><a class="nav-link" href="real-estate-home.html">Home</a></li> --> */}
              <li class="nav-item"><a class="nav-link" href="real-estate-home.html">Our Services</a></li>
              <li class="nav-item"><a class="nav-link" href="real-estate-home.html">Refer and Earn</a></li>
              {/* <!-- <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Enquire</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="real-estate-catalog-rent.html">Home Owner</a></li>
                  <li><a class="dropdown-item" href="real-estate-catalog-sale.html">Tenant</a></li>
                </ul>
              </li> --> */}
              <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Help</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="real-estate-catalog-rent.html">Careers</a></li>
                  <li><a class="dropdown-item" href="real-estate-catalog-sale.html">FAQ</a></li>
                  <li><a class="dropdown-item" href="real-estate-single.html">Blog</a></li>
                </ul>
              </li>
            
              <li class="nav-item d-lg-none"><a class="nav-link" href="/#" data-bs-toggle="modal"><i class="fi-user me-2"></i>Sign in</a></li>
            </ul>
          </div>
        </div>
      </header>
        </>
    )
}

export default Header
