import React from 'react'

const BodyReferAndEarn = () => {
    return (
        <section className="container mb-5 pb-2 pb-lg-4 w-75">
        <br />
        <br />
        <br />
        <br />
        <nav className="mb-3 pt-md-3" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="real-estate-home.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Refer & Earn</li>
          </ol>
        </nav>
        <h2 style={{"color": "#1f1b2d"}} className="h1 text-center pt-4 mt-3 pb-2"><img src="https://img.icons8.com/dotty/150/fd5631/payroll.png" /><br />Refer & Earn</h2>
        <h6 className=" h5 text-center pt-4 mt-3 pb-2">       Earn Rs.500 in your  <img style={{"height": "30px","width": "60px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" />  for every successfull subscription taken by Your Referral.</h6>
        <div style={{"marginBottom": "6%"}} className="center">
            <button style={{"margin": "10%"}} className="btn btn-outline-primary">Submit Your Referral Details</button>
        </div>
    <div className="row">
      <div className="col-md">
        
        <br/>
        <p className=" h5 text-center pt-4 mt-3 pb-2">How you can do it?</p>

        <p className=" text mb-4 mb-sm-5">Please refer residential properties those are for rent only, you will get referral bonus
            once they use our services.
            <br/>
            <br/>
            How can you do it?
            <br/>
            <br/>
            1. You can refer any one of your neighbour, colleague, friend, relative, family
            member or anyone else.
            <br/>
            <br/>
            2. You can also click and upload a picture of the “TO LET” or “House on rent” or
            “Property on rent” outside any house (make
            sure properties should be residential and for rent only).
        </p>
      </div>
      <div className="col-md mt-4 ml-5">

        <p className=" h5 text-center pt-4 mt-3 pb-2">FAQ</p>

          <div className="accordion" id="accordionExample">

            {/* <!-- Accordion item --> */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading9" w-75>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">I had submitted my listing, but it has been rejected. Why?</button>
              </h2>
              <div className="accordion-collapse collapse show" aria-labelledby="heading9" data-bs-parent="#accordionExample" id="collapse9">
                <div className="accordion-body">We deal in residential properties those are for rent only but if you have referred us
                    any commercial property or residential property for sale, it should be rejected.</div>
              </div>
            </div>
          
            {/* <!-- Accordion item --> */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="heading10">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">I have submitted my listing, but have not received the reward?</button>
                </h2>
                <div className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#accordionExample" id="collapse10">
                  <div className="accordion-body">We offer referral bonus to you once your referral take our services successfully, if
                    they have not used our services, you are not liable to receive referral bonus.</div>
                </div>
              </div>
          
            {/* <!-- Accordion item --> */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading11">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">How will I get the reward money?</button>
              </h2>
              <div className="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#accordionExample" id="collapse11">
                <div className="accordion-body">By UPI on your phone number provided to us by you.</div>
              </div>
            </div>
      </div>
      </div>     
      </div>     
        </section>
    )
}

export default BodyReferAndEarn
