import React from 'react'

const Search = () => {
    return (
      <section class="container pt-5 my-5 pb-lg-4">
      <div class="row pt-0 pt-md-2 pt-lg-0">
        <div class="col-xl-7 col-lg-6 col-md-5 order-md-2 mb-4 mb-lg-3"><img src="img/real-estate/hero-image.jpg" alt="Hero" /></div>
        <div class="col-xl-5 col-lg-6 col-md-7 order-md-1 pt-xl-5 pe-lg-0 mb-3 text-md-start text-center">
          <h6 class="display-4 mt-lg-5 mb-md-4 mb-3 pt-md-4 pb-lg-2">No Brokerage property site</h6>
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
    // <section class="jarallax bg-dark zindex-1 py-xxl-5" data-jarallax="" data-speed="0.5"><span class="img-overlay bg-transparent opacity-100" style={{"backgroundImage": "url(img/real-estate/hero-image.jpg)"}}></span>
        
    //     <div class="content-overlay container py-md-5">
    //       <div class="mt-5 mb-md-5 py-5">
    //         <div class="col-xl-6 col-lg-8 col-md-10 mx-auto mb-sm-5 mb-4 px-0 text-center">
    //           <h1 class="display-5 text-light mt-sm-5 my-4">Start exploring<span class="dropdown d-inline-block ms-2"><a class="dropdown-toggle text-decoration-none" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Berlin</a><span class="dropdown-menu dropdown-menu-end my-1"><a class="dropdown-item fs-base fw-bold" href="#">Hamburg</a><a class="dropdown-item fs-base fw-bold" href="#">Munich</a><a class="dropdown-item fs-base fw-bold" href="#">Frankfurt am Main</a><a class="dropdown-item fs-base fw-bold" href="#">Stuttgart</a><a class="dropdown-item fs-base fw-bold" href="#">Cologne</a></span></span></h1>
    //           <p class="fs-lg text-white">Find great places to stay, eat, shop, or visit from our partners and local experts. Plan your trip with Finder now</p>
    //         </div>
    //         <div class="col-xl-8 col-lg-9 col-md-10 mx-auto px-0">
    //           {/* <!-- Search form--> */}
    //           <form class="form-group d-block d-md-flex position-relative rounded-md-pill mb-2 mb-sm-4 mb-lg-5">
    //             <div class="input-group input-group-lg border-end-md"><span class="input-group-text text-muted rounded-pill ps-3"><i class="fi-search"></i></span>
    //               <input class="form-control" type="text" placeholder="What are you looking for?" />
    //             </div>
    //             <hr class="d-md-none my-2" />
    //             <div class="d-sm-flex">
    //               <div class="dropdown w-100 mb-sm-0 mb-3" data-bs-toggle="select">
    //                 <button class="btn btn-link btn-lg dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown"><i class="fi-list me-2"></i><span class="dropdown-toggle-label">All categories</span></button>
    //                 <input type="hidden" />
    //                 <ul class="dropdown-menu">
    //                   <li><a class="dropdown-item" href="#"><i class="fi-bed fs-lg opacity-60 me-2"></i><span class="dropdown-item-label">Accomodation</span></a></li>
    //                   <li><a class="dropdown-item" href="#"><i class="fi-cafe fs-lg opacity-60 me-2"></i><span class="dropdown-item-label">Food &amp; Drink</span></a></li>
    //                   <li><a class="dropdown-item" href="#"><i class="fi-shopping-bag fs-lg opacity-60 me-2"></i><span class="dropdown-item-label">Shopping</span></a></li>
    //                   <li><a class="dropdown-item" href="#"><i class="fi-museum fs-lg opacity-60 me-2"></i><span class="dropdown-item-label">Art &amp; History</span></a></li>
    //                   <li><a class="dropdown-item" href="#"><i class="fi-entertainment fs-lg opacity-60 me-2"></i><span class="dropdown-item-label">Entertainment</span></a></li>
    //                   <li><a class="dropdown-item" href="#"><i class="fi-meds fs-lg opacity-60 me-2"></i><span class="dropdown-item-label">Medicine</span></a></li>
    //                   <li><a class="dropdown-item" href="#"><i class="fi-makeup fs-lg opacity-60 me-2"></i><span class="dropdown-item-label">Beauty</span></a></li>
    //                   <li><a class="dropdown-item" href="#"><i class="fi-car fs-lg opacity-60 me-2"></i><span class="dropdown-item-label">Car Rental</span></a></li>
    //                 </ul>
    //               </div>
    //               <button class="btn btn-primary btn-lg rounded-pill w-100 w-md-auto ms-sm-3" type="button">Search</button>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="position-absolute d-none d-xxl-block bottom-0 start-0 w-100 bg-white zindex-1" style={{"borderTopLeftRadius": "30px", borderTopRightRadius: '30px', height: "30px"}}></div>
    //   <div style={{"position": "absolute", top: "0px", left: '0px', width: "100%", height: "100%", overflow: "hidden", zIndex: "-100"}} id="jarallax-container-0"><div class="jarallax-img" style=
    //   {{"backgroundImage": 'url(&quot;img/city-guide/home/hero-bg.jpg&quot;)', "objectFit": "cover", 'objectPosition': '50% 50%', 'maxWidth': 'none', 'position:' :'fixed', 'top': '0px', 'left': '0px', 'width': '740.8px', 'height': '581.117px' ,"overflow": 'hidden', 'pointerEvents': 'none', "transformStyle": "preserve-3d", "backfaceVisibility": 'hidden', "willChange": "transform", "marginTop": "23.4417px", "transform": "translate3d(0px, 3.55833px, 0px)"}} data-jarallax-original-styles="background-image: url(img/city-guide/home/hero-bg.jpg);"></div></div></section>
    )
}

export default Search
