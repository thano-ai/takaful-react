import React from "react";

const FeaturedService = ()=>{
    return(
        <section id="featured-services" className="featured-services">
            <div className="container">
          <div className="row gy-4">
            <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
              <div className="service-item position-relative">
                <div className="icon"><i className="bi bi-activity icon" /></div>
                <h4><a href className="stretched-link">Donate</a></h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
              </div>
            </div>{/* End Service Item */}
            <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay={200}>
              <div className="service-item position-relative">
                <div className="icon"><i className="bi bi-bounding-box-circles icon" /></div>
                <h4><a href className="stretched-link">Collaborate</a></h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              </div>
            </div>{/* End Service Item */}
            <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay={400}>
              <div className="service-item position-relative">
                <div className="icon"><i className="bi bi-calendar4-week icon" /></div>
                <h4><a href className="stretched-link">Health</a></h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
              </div>
            </div>{/* End Service Item */}
            <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay={600}>
              <div className="service-item position-relative">
                <div className="icon"><i className="bi bi-broadcast icon" /></div>
                <h4><a href className="stretched-link">Happiness</a></h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
              </div>
            </div>{/* End Service Item */}
          </div>
        </div>
        </section>
    );
}

export default FeaturedService