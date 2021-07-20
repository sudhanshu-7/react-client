import React from 'react'

const BodyFAQ = () => {
    return (
        <section className="container mb-5 pb-2 pb-lg-4 w-75">
        <br />
        <br />
        <br />
        <br />
        <nav className="mb-3 pt-md-3" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="real-estate-home.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">FAQ</li>
          </ol>
        </nav>
        <h2 style={{"textDecoration": "underline"}} className="h2 text pt-4 mt-3 pb-2">Frequently Asked Questions</h2>
        <br /><br />
        <p style={{"textDecoration": "underline"}} className=" h2 text pt-4 mt-3 pb-2">For Owners</p>


        <div className="accordion" id="accordionExample">

            {/* <!-- Accordion item --> */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne" w-75>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How soon you will find tenant after I list the property?</button>
              </h2>
              <div className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" id="collapseOne">
                <div className="accordion-body">After you post your property, we will do verification of your property and find
                    suitable tenant for your property that won’t take more than couple of hours or
                    maximum 2-3 days.</div>
              </div>
            </div>
          
            {/* <!-- Accordion item --> */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Do I need to pay anything in advance to use your services?</button>
              </h2>
              <div className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" id="collapseTwo">
                <div className="accordion-body">No, in order to rent a residential property, you no need to pay any brokerage and
                    you can avail our services without any advance payment too, We believe in service
                    first and pay later policy.</div>
              </div>
            </div>
          
            {/* <!-- Accordion item --> */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">What's the rent that I can get for my property?</button>
              </h2>
              <div className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" id="collapseThree">
                <div className="accordion-body">Your Relationship Manager has city level knowledge of rents in various localities,
                    they will guide you about the correct rent to be quoted for your property.</div>
              </div>
            </div>

            {/* <!-- Accordion item --> */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Will I get good tenants as per my expectation for my property?</button>
                </h2>
                <div className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample" id="collapseFour">
                  <div className="accordion-body">Yes, your Relationship Manager will meet tenants personally and choose them
                    according to your requirements only. We will get you tenants of your choice for your
                    property.</div>
                </div>
              </div>

              {/* <!-- Accordion item --> */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Will you assist in making rental agreement?</button>
                </h2>
                <div className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample" id="collapseFive">
                  <div className="accordion-body">Yes, we will either help you in making of hard copy of rental agreement or send you
                    a soft copy of the agreement over an e-mail. You must have Pan Card, Aadhar Card
                    and passport size Photos for the agreement to be prepared.</div>
                </div>
              </div>

              {/* <!-- Accordion item --> */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">When do I need to pay your service charges?</button>
                </h2>
                <div className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample" id="collapseSix">
                  <div className="accordion-body">Once we find suitable tenant for your property, you need to pay our service charges
                    before we make a rent agreement and handover your house to tenant.</div>
                </div>
              </div>
          </div>
        
          <p style={{"textDecoration": "underline"}} className=" h2 text pt-4 mt-3 pb-2">For Tenants</p>

          <div className="accordion" id="accordionExample">

            {/* <!-- Accordion item --> */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading1" w-75>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">How soon can I get the house after I contact Rokye?</button>
              </h2>
              <div className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample" id="collapse1">
                <div className="accordion-body">After you submit your request to us, we will call you asap and once you are ready
                    with your choice of shortlisted properties, your relationship manager will show you
                    all the properties. It won’t take more than couple of hours or maximum 2-3 days if
                    you are sure about your requirements.</div>
              </div>
            </div>
          
            {/* <!-- Accordion item --> */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">How do you verify owners and property?</button>
              </h2>
              <div className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample" id="collapse2">
                <div className="accordion-body">We verify each listing by phone and do property inspection by personal visit and
                    make sure that all the properties are posted by owners only and there are no
                    middlemen or brokers. We remove all the listings done by brokers or agents
                    immediately.</div>
              </div>
            </div>
          
            {/* <!-- Accordion item --> */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading3">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">Will Relationship Manager be present during the house visit?</button>
              </h2>
              <div className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample" id="collapse3">
                <div className="accordion-body">Yes, they will be available with you in every house visit.</div>
              </div>
            </div>

            {/* <!-- Accordion item --> */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="heading5">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">How will my relationship manager help me negotiate the rent?</button>
                </h2>
                <div className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample" id="collapse5">
                  <div className="accordion-body">Your Relationship Manager may try to negotiate for rent if there are inconsistencies
                    in rent as per the market standard in the specific locality. However, rent and deposit
                    amount are on the sole discretion of the owners.</div>
                </div>
              </div>

              {/* <!-- Accordion item --> */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="heading6">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">Will you assist in making rental agreement?</button>
                </h2>
                <div className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample" id="collapse6">
                  <div className="accordion-body">Yes, we will either help you in making of hard copy of rental agreement or send you
                    a soft copy of the agreement over an e-mail. You must have Pan Card, Aadhar Card
                    and passport size Photos for the agreement to be prepared.</div>
                </div>
              </div>

              {/* <!-- Accordion item --> */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="heading7">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">Can Rokye help me to find a suitable house for me if I am new in the city?</button>
                </h2>
                <div className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample" id="collapse7">
                  <div className="accordion-body">Yes, Our Relationship Manager has city level knowledge of rents in various localities,
                    they will guide you according to your requirement and you can also look for details
                    such as nearby schools, hospital etc. on the map on the detail page of the property.</div>
                </div>
              </div>

             {/* <!-- Accordion item --> */}
             <div className="accordion-item">
                <h2 className="accordion-header" id="heading8">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">When do I need to pay your subscription charges?</button>
                </h2>
                <div className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample" id="collapse8">
                  <div className="accordion-body">Once we find a suitable property that you like to rent, you need to pay our service
charges before we make a rent agreement and handover house key to you.</div>
                </div>
              </div>
          </div>

          <p style={{"textDecoration": "underline"}} className=" h2 text pt-4 mt-3 pb-2">For Referral</p>

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

        
        </section>
    )
}

export default BodyFAQ
