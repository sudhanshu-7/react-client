import React from 'react'

const Search = () => {
    return (
      <section class="container pt-5 my-5 pb-lg-4">
      <div class="row pt-0 pt-md-2 pt-lg-0">
        <div class="col-xl-7 col-lg-6 col-md-5 order-md-2 mb-4 mb-lg-3"><img src="img/real-estate/hero-image.jpg" alt="Hero" /></div>
        <div class="col-xl-5 col-lg-6 col-md-7 order-md-1 pt-xl-5 pe-lg-0 mb-3 text-md-start text-center">
          <h1 class="display-4 mt-lg-5 mb-md-4 mb-3 pt-md-4 pb-lg-2">No Brokerage property site</h1>
          <p class="position-relative lead me-lg-n5">We provide end to end services for the rental of real estate. Moreover, you can avail
            our services without making any advance payment. Search thousands of apartments
            and houses on Rokye.</p>
        </div>
       {/* <!-- Search property form group--> */}
       <div style={{"width":"50%"}} class="col-xl-8 col-lg-10 order-3 mt-lg-n5">
        <form class="form-group">
          <div class="input-group input-group-sm">
            <span class="input-group-text text-muted">
              <i class="fi-search"></i>
            </span>
            <input type="text" class="form-control" placeholder="Enter city, area, or property name" />
          </div>
          <button  style ={{"backgroundColor":"#fd5631","color":"white"}} type="button" class="btn btn-translucent-primary btn-sm">Search</button>
        </form>
      </div>
    </div>
    </section>
    )
}

export default Search
