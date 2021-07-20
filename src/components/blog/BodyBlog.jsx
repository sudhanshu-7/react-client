import React from 'react'

const BodyBlog = () => {
    return (
        <div className="container mt-5 mb-md-4 py-5">
        
        
        
       {/* <!-- Breadcrumb + page title--> */}
       <nav className="mb-3 pt-md-3" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="real-estate-home.html">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Blog</li>
        </ol>
      </nav>
      <h1 className="d-flex align-items-end justify-content-between mb-4">Real estate news</h1>
        {/* <!-- Sponsored posts carousel--> */}
        <div className="tns-carousel-wrapper">
          <div className="tns-carousel-inner" data-carousel-options="{&quot;mode&quot;: &quot;gallery&quot;, &quot;nav&quot;: false, &quot;controlsContainer&quot;: &quot;#sponsored-news-controls&quot;}">
            {/* <!-- Item--> */}
            <div>
              <article className="row">
                <div className="col-md-7 col-lg-8 mb-lg-0 mb-3 mb-md-0"><a className="d-block position-relative" href="real-estate-blog-single.html"><span className="badge bg-success position-absolute top-0 end-0 m-3 fs-sm">Sponsored</span><img className="rounded-3" src="img/real-estate/blog/01.jpg" alt="Post image" /></a></div>
                <div className="col-md-5 col-lg-4"><a className="fs-sm text-uppercase text-decoration-none" href="#">Tips &amp; Advice</a>
                  <h2 className="h5 pt-1"><a className="nav-link" href="real-estate-blog-single.html">Looking for a New Place? Use This Time to Create Your Wishlist</a></h2>
                  <p className="d-md-none d-xl-block mb-4">Nulla felis neque ultrices ut aliquam. Pellentesque id semper iaculis scelerisque etiam egestas interdum proin sit. Ornare venenatis, ullamcorper amet arcu ipsum ut morbi enim. Senectus quam egestas facilisi enim diam posuere ultricies interdum sed. Amet, risus eros cursus vitae, sit?</p><a className="d-flex align-items-center text-decoration-none" href="#"><img className="rounded-circle" src="img/avatars/06.jpg" width="48" alt="Kristin Watson" />
                    <div className="ps-2">
                      <h6 className="fs-base text-nav lh-base mb-1">Kristin Watson</h6>
                      <div className="d-flex text-body fs-sm"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-60 mt-n1 me-1"></i>Mar 13</span><span><i className="fi-chat-circle opacity-60 mt-n1 me-1"></i>No comments</span></div>
                    </div></a>
                </div>
              </article>
            </div>
            {/* <!-- Item--> */}
            <div>
              <article className="row">
                <div className="col-md-7 col-lg-8 mb-lg-0 mb-3 mb-md-0"><a className="d-block position-relative" href="real-estate-blog-single.html"><span className="badge bg-success position-absolute top-0 end-0 m-3 fs-sm">Sponsored</span><img className="rounded-3" src="img/real-estate/blog/02.jpg" alt="Post image" /></a></div>
                <div className="col-md-5 col-lg-4"><a className="fs-sm text-uppercase text-decoration-none" href="#">Industry News</a>
                  <h2 className="h5 pt-1"><a className="nav-link" href="real-estate-blog-single.html">Traditional Real Estate Marketing Holds Firm Despite Pandemic</a></h2>
                  <p className="d-md-none d-xl-block mb-4">Phasellus cursus orci pulvinar proin nulla vitae. Arcu faucibus vestibulum fames eget nunc. Ut in sed platea egestas amet purus nibh suspendisse semper. Senectus quam egestas facilisi enim diam posuere ultricies interdum sed. Amet, risus eros cursus vitae, sit. Nulla felis neque ultrices ut aliquam.</p><a className="d-flex align-items-center text-decoration-none" href="#"><img className="rounded-circle" src="img/avatars/04.jpg" width="48" alt="Darrell Steward" />
                    <div className="ps-2">
                      <h6 className="fs-base text-nav lh-base mb-1">Darrell Steward</h6>
                      <div className="d-flex text-body fs-sm"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-60 mt-n1 me-1"></i>Feb 27</span><span><i className="fi-chat-circle opacity-60 mt-n1 me-1"></i>3 comments</span></div>
                    </div></a>
                </div>
              </article>
            </div>
          </div>
        </div>
        {/* <!-- Carousel custom controls--> */}
        <div className="tns-carousel-controls pb-5 pt-2 mt-4 mb-lg-3" id="sponsored-news-controls">
          <button className="me-3" type="button"><i className="fi-chevron-left fs-xs"></i></button>
          <button type="button"><i className="fi-chevron-right fs-xs"></i></button>
        </div>
        {/* <!-- Search bar + filters--> */}
        <div className="row gy-3 mb-4 pb-2">
          <div className="col-md-4 order-md-1 order-2">
            <div className="position-relative">
              <input className="form-control pe-5" type="text" placeholder="Search articles by keywords..." /><i className="fi-search position-absolute top-50 end-0 translate-middle-y me-3"></i>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 offset-lg-2 order-md-2 order-1">
            <div className="row gy-3">
              <div className="col-6 d-flex flex-sm-row flex-column align-items-sm-center">
                <label className="d-inline-block me-sm-2 mb-sm-0 mb-2 text-nowrap" for="categories"><i className="fi-align-left mt-n1 me-2 align-middle opacity-70"></i>Category:</label>
                <select className="form-select" id="categories">
                  <option>All</option>
                  <option>Home</option>
                  <option>Inspiration</option>
                  <option>Tips &amp; Advice</option>
                  <option>Industry News</option>
                  <option>Market Analysis</option>
                </select>
              </div>
              <div className="col-6 d-flex flex-sm-row flex-column align-items-sm-center">
                <label className="d-inline-block me-sm-2 mb-sm-0 mb-2 text-nowrap" for="sortby"><i className="fi-arrows-sort mt-n1 me-2 align-middle opacity-70"></i>Sort by:</label>
                <select className="form-select" id="sortby">
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Popular</option>
                  <option>Sponsored</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Articles grid--> */}
        <div className="row row-cols-md-2 row-cols-1 gy-md-5 gy-4 mb-lg-5 mb-4">
          {/* <!-- Article--> */}
          <article className="col pb-2 pb-md-1"><a className="d-block position-relative mb-3" href="real-estate-blog-single.html"><span className="badge bg-info position-absolute top-0 end-0 m-3 fs-sm">New</span><img className="d-block rounded-3" src="img/real-estate/blog/03.jpg" alt="Article image" /></a><a className="fs-sm text-uppercase text-decoration-none" href="#">Home improvement</a>
            <h3 className="h5 mb-2 pt-1"><a className="nav-link" href="real-estate-blog-single.html">10 Delightful Dining Room Decor Trends for Spring</a></h3>
            <p className="mb-3">Mi sit montes, aenean tempor sollicitudin volutpat viverra. Tellus amet, vitae ac consectetur blandit at. Odio proin elit, vehicula morbi faucibus vestibulum…</p><a className="d-flex align-items-center text-decoration-none" href="#"><img className="rounded-circle" src="img/avatars/07.jpg" width="48" alt="Cody Fisher" />
              <div className="ps-2">
                <h6 className="fs-base text-nav lh-base mb-1">Cody Fisher</h6>
                <div className="d-flex text-body fs-sm"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>Dec 28</span><span><i className="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>0 comments</span></div>
              </div></a>
          </article>
          {/* <!-- Article--> */}
          <article className="col pb-2 pb-md-1"><a className="d-block position-relative mb-3" href="real-estate-blog-single.html"><img className="d-block rounded-3" src="img/real-estate/blog/04.jpg" alt="Article image" /></a><a className="fs-sm text-uppercase text-decoration-none" href="#">Inspiration</a>
            <h3 className="h5 mb-2 pt-1"><a className="nav-link" href="real-estate-blog-single.html">5 Easy-to-Ambitious Projects to Improve Your Home</a></h3>
            <p className="mb-3">Phasellus consequat ut sagittis, vestibulum, eget egestas senectus quis congue. Posuere montes, in ultrices vitae, luctus. Ultrices aliquet pellentesque eget...</p><a className="d-flex align-items-center text-decoration-none" href="#"><img className="rounded-circle" src="img/avatars/03.jpg" width="48" alt="Kathryn Murphy" />
              <div className="ps-2">
                <h6 className="fs-base text-nav lh-base mb-1">Kathryn Murphy</h6>
                <div className="d-flex text-body fs-sm"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>Dec 26</span><span><i className="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>4 comments</span></div>
              </div></a>
          </article>
          {/* <!-- Article--> */}
          <article className="col pb-2 pb-md-1"><a className="d-block position-relative mb-3" href="real-estate-blog-single.html"><img className="d-block rounded-3" src="img/real-estate/blog/05.jpg" alt="Article image" /></a><a className="fs-sm text-uppercase text-decoration-none" href="#">Inspiration</a>
            <h3 className="h5 mb-2 pt-1"><a className="nav-link" href="real-estate-blog-single.html">How Real Estate Drone Photography Can Elevate Your Listing?</a></h3>
            <p className="mb-3">Nunc vivamus nam vitae ut faucibus metus pretium nisl. Elementum sed tincidunt nec aliquam tempus. Neque pharetra vitae, mauris malesuada adipiscing...</p><a className="d-flex align-items-center text-decoration-none" href="#"><img className="rounded-circle" src="img/avatars/06.jpg" width="48" alt="Kristin Watson" />
              <div className="ps-2">
                <h6 className="fs-base text-nav lh-base mb-1">Kristin Watson</h6>
                <div className="d-flex text-body fs-sm"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>Dec 12</span><span><i className="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>3 comments</span></div>
              </div></a>
          </article>
          {/* <!-- Article--> */}
          <article className="col pb-2 pb-md-1"><a className="d-block position-relative mb-3" href="real-estate-blog-single.html"><img className="d-block rounded-3" src="img/real-estate/blog/06.jpg" alt="Article image" /></a><a className="fs-sm text-uppercase text-decoration-none" href="#">Tips &amp; Advice</a>
            <h3 className="h5 mb-2 pt-1"><a className="nav-link" href="real-estate-blog-single.html">7 Tips for Achieving Maximum Coziness</a></h3>
            <p className="mb-3">Enim faucibus mattis feugiat porttitor a arcu quisque. Donec massa volutpat dolor id eget consectetur viverra. Etiam consectetur mauris, scelerisque gravida convallis...</p><a className="d-flex align-items-center text-decoration-none" href="#"><img className="rounded-circle" src="img/avatars/04.jpg" width="48" alt="Darrell Steward" />
              <div className="ps-2">
                <h6 className="fs-base text-nav lh-base mb-1">Darrell Steward</h6>
                <div className="d-flex text-body fs-sm"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>Dec 3</span><span><i className="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>1 comment</span></div>
              </div></a>
          </article>
          {/* <!-- Article--> */}
          <article className="col pb-2 pb-md-1"><a className="d-block position-relative mb-3" href="real-estate-blog-single.html"><img className="d-block rounded-3" src="img/real-estate/blog/07.jpg" alt="Article image" /></a><a className="fs-sm text-uppercase text-decoration-none" href="#">Industry Views</a>
            <h3 className="h5 mb-2 pt-1"><a className="nav-link" href="real-estate-blog-single.html">How To Modernize Your Home on a Budget</a></h3>
            <p className="mb-3">Phasellus cursus orci pulvinar proin nulla vitae. Arcu faucibus vestibulum fames eget nunc. Ut in sed platea egestas amet purus nibh suspendisse semper...</p><a className="d-flex align-items-center text-decoration-none" href="#"><img className="rounded-circle" src="img/avatars/03.jpg" width="48" alt="Kathryn Murphy" />
              <div className="ps-2">
                <h6 className="fs-base text-nav lh-base mb-1">Kathryn Murphy</h6>
                <div className="d-flex text-body fs-sm"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>Oct 17</span><span><i className="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>2 comments</span></div>
              </div></a>
          </article>
          {/* <!-- Article--> */}
          <article className="col pb-2 pb-md-1"><a className="d-block position-relative mb-3" href="real-estate-blog-single.html"><img className="d-block rounded-3" src="img/real-estate/blog/08.jpg" alt="Article image" /></a><a className="fs-sm text-uppercase text-decoration-none" href="#">Property Market Analysis</a>
            <h3 className="h5 mb-2 pt-1"><a className="nav-link" href="real-estate-blog-single.html">When Is the Right Time to Downsize Your Home?</a></h3>
            <p className="mb-3">Parturient purus non consectetur eu arcu, feugiat eget vitae. Tellus at sociis egestas magna integer. Vel sagittis morbi ultrices turpis neque sed venenatis enim laoreet...</p><a className="d-flex align-items-center text-decoration-none" href="#"><img className="rounded-circle" src="img/avatars/07.jpg" width="48" alt="Cody Fisher" />
              <div className="ps-2">
                <h6 className="fs-base text-nav lh-base mb-1">Cody Fisher</h6>
                <div className="d-flex text-body fs-sm"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>Nov 15</span><span><i className="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>0 comments</span></div>
              </div></a>
          </article>
        </div>
        {/* <!-- Pagination--> */}
        <nav className="pt-4 pb-2 border-top" aria-label="Blog pagination">
          <ul className="pagination mb-0">
            <li className="page-item d-sm-none"><span className="page-link page-link-static">1 / 8</span></li>
            <li className="page-item active d-none d-sm-block" aria-current="page"><span className="page-link">1<span className="visually-hidden">(current)</span></span></li>
            <li className="page-item d-none d-sm-block"><a className="page-link" href="#">2</a></li>
            <li className="page-item d-none d-sm-block"><a className="page-link" href="#">3</a></li>
            <li className="page-item d-none d-sm-block">...</li>
            <li className="page-item d-none d-sm-block"><a className="page-link" href="#">8</a></li>
            <li className="page-item"><a className="page-link" href="#" aria-label="Next"><i className="fi-chevron-right"></i></a></li>
          </ul>
        </nav>
      </div>
    )
}

export default BodyBlog
