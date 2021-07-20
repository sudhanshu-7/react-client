import React from 'react'

const SignUp = () => {
    return (
        <>
        <div className ="page-loading active">
      <div className ="page-loading-inner">
        <div className ="page-spinner"></div><span>Loading...</span>
      </div>
    </div>
    
      {/* <!-- Sign In Modal--> */}
      <div className ="modal fade" id="signin-modal" tabindex="-1" aria-hidden="true">
        <div className ="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto" style={{"maxWidth": "950px"}}>
          <div className ="modal-content">
            <div className ="modal-body px-0 py-2 py-sm-0">
              <button className ="btn-close position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal"></button>
              <div className ="row mx-0 align-items-center">
                <div className ="col-md-6 border-end-md p-4 p-sm-5">
                  <h2 className ="h3 mb-4 mb-sm-5">Hey there!<br />Welcome back.</h2><img className ="d-block mx-auto" src="img/signin-modal/signin.svg" width="344" alt="Illustartion" />
                  <div className ="mt-4 mt-sm-5">Don't have an account? <a href="#signup-modal" data-bs-toggle="modal" data-bs-dismiss="modal">Sign up here</a></div>
                </div>
                <div className ="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5"><a className ="btn btn-outline-info w-100 mb-3" href="/#"><i className ="fi-google fs-lg me-1"></i>Sign in with Google</a><a className ="btn btn-outline-info w-100 mb-3" href="/#"><i className ="fi-facebook fs-lg me-1"></i>Sign in with Facebook</a>
                  <div className ="d-flex align-items-center py-3 mb-3">
                    <hr className ="w-100" />
                    <div className ="px-3">Or</div>
                    <hr className ="w-100" />
                  </div>
                  <form className ="needs-validation" novalidate>
                    <div className ="mb-4">
                      <label className ="form-label mb-2" for="signin-email">Email address</label>
                      <input className ="form-control" type="email" id="signin-email" placeholder="Enter your email" required />
                    </div>
                    <div className ="mb-4">
                      <div className ="d-flex align-items-center justify-content-between mb-2">
                        <label className ="form-label mb-0" for="signin-password">Password</label><a className ="fs-sm" href="/#">Forgot password?</a>
                      </div>
                      <div className ="password-toggle">
                        <input className ="form-control" type="password" id="signin-password" placeholder="Enter password" required />
                        <label className ="password-toggle-btn" aria-label="Show/hide password">
                          <input className ="password-toggle-check" type="checkbox" /><span className ="password-toggle-indicator"></span>
                        </label>
                      </div>
                    </div>
                    <button className ="btn btn-primary btn-lg w-100" type="submit">Sign in         </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Sign Up Modal--> */}
      <div className ="modal fade" id="signup-modal" tabindex="-1" aria-hidden="true">
        <div className ="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto" style={{"maxWidth": "950px"}}>
          <div className ="modal-content">
            <div className ="modal-body px-0 py-2 py-sm-0">
              <button className ="btn-close position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal"></button>
              <div className ="row mx-0 align-items-center">
                <div className ="col-md-6 border-end-md p-4 p-sm-5">
                  <h3 className =" mb-4 mb-sm-5">Welcome to No Brokerage property site </h3>
                   <p className =" mb-4 mb-sm-5">We provide end to end services for the rental of real estate. Moreover, you can avail
                    our services without making any advance payment. Search thousands of apartments
                    and houses on Rokye.</p>
                  <ul className ="list-unstyled mb-4 mb-sm-5">
                    <li className ="d-flex mb-2"><i className ="fi-check-circle text-primary mt-1 me-2"></i><span>No Brokerage</span></li>
                    <li className ="d-flex mb-2"><i className ="fi-check-circle text-primary mt-1 me-2"></i><span>No advance payment</span></li>
                    <li className ="d-flex mb-0"><i className ="fi-check-circle text-primary mt-1 me-2"></i><span>Thousands of listings available</span></li>
                  </ul><img className ="d-block mx-auto" src="img/signin-modal/signup.svg" width="344" alt="Illustartion" />
                  <div className ="mt-sm-4 pt-md-3">Already have an account? <a href="#signin-modal" data-bs-toggle="modal" data-bs-dismiss="modal">Sign in</a></div>
                </div>
                <div className ="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5"><a className ="btn btn-outline-info w-100 mb-3" href="/#"><i className ="fi-google fs-lg me-1"></i>Sign in with Google</a><a className ="btn btn-outline-info w-100 mb-3" href="/#"><i className ="fi-facebook fs-lg me-1"></i>Sign in with Facebook</a>
                  <div className ="d-flex align-items-center py-3 mb-3">
                    <hr className ="w-100" />
                    <div className ="px-3">Or</div>
                    <hr className ="w-100" />
                  </div>
                  <form className ="needs-validation" novalidate>
                    <div className ="mb-4">
                      <label className ="form-label" for="signup-name">Full name</label>
                      <input className ="form-control" type="text" id="signup-name" placeholder="Enter your full name" required />
                    </div>
                    <div className ="mb-4">
                      <label className ="form-label" for="signup-email">Email address</label>
                      <input className ="form-control" type="email" id="signup-email" placeholder="Enter your email" required />
                    </div>
                    <div className ="mb-4">
                      <label className ="form-label" for="signup-password">Password <span className ='fs-sm text-muted'>min. 8 char</span></label>
                      <div className ="password-toggle">
                        <input className ="form-control" type="password" id="signup-password" minlength="8" required />
                        <label className ="password-toggle-btn" aria-label="Show/hide password">
                          <input className ="password-toggle-check" type="checkbox" /><span className ="password-toggle-indicator"></span>
                        </label>
                      </div>
                    </div>
                    <div className ="mb-4">
                      <label className ="form-label" for="signup-password-confirm">Confirm password</label>
                      <div className ="password-toggle">
                        <input className ="form-control" type="password" id="signup-password-confirm" minlength="8" required />
                        <label className ="password-toggle-btn" aria-label="Show/hide password">
                          <input className ="password-toggle-check" type="checkbox" /><span className ="password-toggle-indicator"></span>
                        </label>
                      </div>
                    </div>
                    <div className ="form-check mb-4">
                      <input className ="form-check-input" type="checkbox" id="agree-to-terms" required />
                      <label className ="form-check-label" for="agree-to-terms">By joining, I agree to the <a href='/#'>Terms of use</a> and <a href='/#'>Privacy policy</a></label>
                    </div>
                    <button className ="btn btn-primary btn-lg w-100" type="submit">Sign up         </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default SignUp
