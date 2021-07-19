import React from 'react'

const TopAgents = () => {
    return (
        <section class="container mb-5 pb-2 pb-lg-4">
        <h2 class="h3 mb-4 pb-3 text-center text-md-start">Top Review</h2>
        <center>
        <div>
          <div class="card" style={{"padding": "5%"}}>
            <div class="d-flex justify-content-between mb-3">
              <div class="d-flex align-items-center pe-2">
                <img class="rounded-circle me-1" src="path-to-avatar-image" width="48" alt="Avatar" />
                <div class="ps-2">
                  <h6 class="fs-base mb-0">Annette Black</h6>
                  <div class="star-rating">
                    <i class="star-rating-icon fi-star-filled active"></i>
                    <i class="star-rating-icon fi-star-filled active"></i>
                    <i class="star-rating-icon fi-star-filled active"></i>
                    <i class="star-rating-icon fi-star-filled active"></i>
                    <i class="star-rating-icon fi-star"></i>
                  </div>
                </div>
              </div>
              <span class="text-muted fs-sm">Jan 17, 2021</span>
            </div>
            <div style={{"text-align": "left"}}><p>Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.</p></div>
            <div class="d-flex align-items-center">
              <button type="button" class="btn-like">
                <i class="fi-like"></i>
                <span>(3)</span>
              </button>
            <div class="border-end me-1"> </div>
            <button type="button" class="btn-dislike">
              <i class="fi-dislike"></i>
              <span>(0)</span>
            </button>
          </div>
        </div>
        </div>
        </center>
        </section>
    )
}

export default TopAgents
