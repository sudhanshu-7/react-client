import React from 'react'

const BodyCU = () => {
    return (
        <section className="container mb-5 pb-2 pb-lg-4 w-75">
        <br />
        <br />
        <br />
        <br />
        <nav className="mb-3 pt-md-3" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="real-estate-home.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
          </ol>
        </nav>
        <h2 class="h2 text pt-4 mt-3 pb-2">Contact Us</h2>
        <div class="row">
            <div class="col-md">
              <br/>
              <br/>
              <h6 class=" h5 text pb-2">
                Get In Touch
            </h6>
            <p class=" mb-4 mb-sm-5"> We provide end to end services for the rental of real estate. Moreover, you can avail our services without paying any brokerage and without making any advance payment. Search thousands of apartments and houses on Rokye.</p>
            <div class="col-xl-7 col-lg-6 col-md-5 order-md-2 mb-4 mb-lg-3"><i class="fi-real-estate-house  "></i>  <span style={{"marginLeft": "20px"}}><b>Reach Us</b></span><br/><span>204, CORPORATE HOUSE INCOMETAX AHMEDABAD - 380009</span>
            </div>
            <div class="col-xl-7 col-lg-6 col-md-5 order-md-2 mb-4 mb-lg-3"><i class="fi-mail "></i> <span style={{"marginLeft": "20px"}}><b>Drop A Mail</b></span><br/><span>service@rokye.com</span></div>
            <div class="col-xl-7 col-lg-6 col-md-5 order-md-2 mb-4 mb-lg-3"><i class="fi-calendar "></i> <span style={{"marginLeft": "20px"}}><b>Open Hours</b></span><br/>
              <span>
                <table style={{"width":"80%"}}>
                  <tr>
                    <td>Monday</td>
                    <td>10 AM-7 PM</td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td>10 AM-7 PM</td>
                  </tr>
                  <tr>
                    <td>Wednesday</td>
                    <td>10 AM-7 PM</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td>10 AM-7 PM</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>10 AM-7 PM</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>10 AM-7 PM</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>10 AM-7 PM</td>
                  </tr>
                </table>
              </span>
            </div>
            
               
            </div>
            <aside className="col-lg-5 col-md-5 ms-lg-auto pb-1">
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
                          <label style={{"margin":"7px 0 0 5px"}} className="form-check-label " for="ex-radio-1">Owner</label>
                        </div>
                      </div>
                      <br/>
                      <div><div style={{marginLeft: "100px"}} className="form-check">
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
    )
}

export default BodyCU
