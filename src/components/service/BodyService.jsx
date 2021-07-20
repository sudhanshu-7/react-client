import React from 'react'

const BodyService = () => {
    return (
        <section className="container mb-5 pb-2 pb-lg-4 w-75">
        <br />
        <br />
        <br />
        <nav className="mb-3 pt-md-3" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="real-estate-home.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Our Services</li>
          </ol>
        </nav>
        <h2 className="h2 text pt-4 mt-3 pb-2">Contact us to get fast responces</h2>
        <div className="row">
            <div className="col-md mt-4">
            <div className="card">
              
                <div className="card-body">
                  <h2 className="h2 mb-1">Our Package</h2>
                  <br /><br />
                  <h2 className="h5 fw-normal py-1 mb-0">Till You Rent Plan</h2>
                  <div className="d-flex align-items-end mb-4">
                    <div className="h2 mb-0">₹ 5900</div>
                    <div className="pb-2 ps-2">Inc. GST</div>
                    <br/>
                  </div>
                  <ul className="list-unstyled d-block mb-0" style={{"maxWidth": "16rem"}}>
                    <li className="d-flex">
                      <i className="fi-check text-primary fs-sm mt-1 me-2"></i>
                      <span>Unlimited Leads</span>
                    </li>
                    <li className="d-flex">
                      <i className="fi-check text-primary fs-sm mt-1 me-2"></i>
                      <span>No Advance Payment</span>
                    </li>
                    <li className="d-flex">
                      <i className="fi-check text-primary fs-sm mt-1 me-2"></i>
                      <span>Expert Photography</span>
                    </li>
                    <li className="d-flex ">
                      <i className="fi-check text-primary fs-sm mt-1 me-2"></i>
                      <span>Property Verification</span>
                    </li>
                    <li className="d-flex ">
                        <i className="fi-check text-primary fs-sm mt-1 me-2"></i>
                        <span>Property promotion on site</span>
                    </li>
                    <li className="d-flex ">
                      <i className="fi-check text-primary fs-sm mt-1 me-2"></i>
                      <span>Property promotion by email</span>
                    </li>
                  <li className="d-flex ">
                    <i className="fi-check text-primary fs-sm mt-1 me-2"></i>
                    <span>Property promotion by sms</span>
                  </li>
                    <li className="d-flex ">
                        <i className="fi-check text-primary fs-sm mt-1 me-2"></i>
                        <span>Tenant verification</span>
                      </li>
                      <li className="d-flex ">
                        <i className="fi-check text-primary fs-sm mt-1 me-2"></i>
                        <span>Online assistance</span>
                      </li>
                      <li className="d-flex ">
                        <i className="fi-check text-primary fs-sm mt-1 me-2"></i>
                        <span>Field assistance</span>
                      </li>
                      <li className="d-flex ">
                        <i className="fi-check text-primary fs-sm mt-1 me-2"></i>
                        <span>Privacy of your details</span>
                      </li>
                      <li className="d-flex ">
                        <i className="fi-check text-primary fs-sm mt-1 me-2"></i>
                        <span>Rental agreement</span>
                      </li>
                  </ul>
                </div>
                
            </div>
            </div>
            <div className="col-md mt-4 ml-5">
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <div className="d-flex align-items-start justify-content-between">
                    <div>
                      <h2 className="mb-1">Enquire Now</h2>
                      <br /><br />
                  {/* <!-- Contact form--> */}
                  <form className="needs-validation" novalidate>
                    <p> I am</p>
                    <div className="input-group">
  
                      <div>
                        <div className="form-check">
                          <input style={{"width": "22px","height": "22px"}}className="form-check-input " type="radio" id="ex-radio-1" name="radio" />
                          <label style={{"margin": "7px 0 0 5px"}}className="form-check-label " for="ex-radio-1">Owner</label>
                        </div>
                      </div>
                      <br />
                      <div><div style={{"marginLeft": "100px"}} className="form-check">
                        <input style={{"width": "22px","height": "22px"}} className="form-check-input" type="radio" id="ex-radio-2" name="radio" />
                        <label style={{"margin": "7px 0 0 5px"}} className="form-check-label" for="ex-radio-2">Tenant</label>
                      </div></div>
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
                    <div class="form-check mb-4">
                      <input class="form-check-input" id="form-submit" type="checkbox" checked />
                      <label class="form-check-label fs-sm" for="form-submit"> I agree to the Terms of use and Privacy policy</label>
                    </div>
                    <button class="btn btn-lg btn-primary d-block w-100" type="submit">Send request</button>
                  </form>
                </div>
              </div>
            </div>
        </div>
        </div>
        </div>
        </section>
    )
}

export default BodyService
