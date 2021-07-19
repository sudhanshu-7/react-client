import React from 'react'

const Services = () => {
    return (
        <>
        <section class="container mb-5 mt-n3 mt-lg-0">
        <div class="tns-carousel-wrapper tns-nav-outside tns-nav-outside-flush mx-n2">
          <div class="tns-carousel-inner row gx-4 mx-0 py-3" data-carousel-options="{&quot;items&quot;: 3, &quot;controls&quot;: false, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;500&quot;:{&quot;items&quot;:2},&quot;768&quot;:{&quot;items&quot;:3}}}">
            <div class="col">
              <div class="card card-hover border-0 h-100 pb-2 pb-sm-3 px-sm-3 text-center"><img class="d-block mx-auto my-3" src="img/real-estate/illustrations/buy.svg" width="256" alt="Illustration" />
                <div class="card-body">
                  <h2 class="h4 card-title">Enquire Now</h2>
                  <p class="card-text fs-sm">Blandit lorem dictum in velit. Et nisi at faucibus mauris pretium enim. Risus sapien nisi aliquam egestas leo dignissim.</p>
                </div>
                <div class="card-footer pt-0 border-0"><a class="btn btn-outline-primary stretched-link" href="real-estate-catalog-sale.html">Find a home</a></div>
              </div>
            </div>
            <div class="col">
              <div class="card card-hover border-0 h-100 pb-2 pb-sm-3 px-sm-3 text-center"><img class="d-block mx-auto my-3" src="img/real-estate/illustrations/sell.svg" width="256" alt="Illustration" />
                <div class="card-body">
                  <h2 class="h4 card-title">Post a property</h2>
                  <p class="card-text fs-sm">Amet, cras orci justo, tortor nisl aliquet. Enim tincidunt tellus nunc, nulla arcu posuere quis. Velit turpis orci venenatis.</p>
                </div>
                <div class="card-footer pt-0 border-0"><a class="btn btn-outline-primary stretched-link" href="#">Place an ad</a></div>
              </div>
            </div>
            <div class="col">
              <div class="card card-hover border-0 h-100 pb-2 pb-sm-3 px-sm-3 text-center"><img class="d-block mx-auto my-3" src="img/real-estate/illustrations/rent.svg" width="256" alt="Illustration" />
                <div class="card-body">
                  <h2 class="h4 card-title">Rent a property</h2>
                  <p class="card-text fs-sm">Sed sed aliquet sed id purus malesuada congue viverra. Habitant quis lacus, volutpat natoque ipsum iaculis cursus.</p>
                </div>
                <div class="card-footer pt-0 border-0"><a class="btn btn-outline-primary stretched-link" href="real-estate-catalog-rent.html">Find a rental</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr class="mt-n1 mb-5 d-md-none" />
      </>
    )
}

export default Services
