import React from "react"; 

const Service = () => {
    return (
        <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Our application provide these services.</p>
          </div>
          <div className="row gy-5">
            <div className="col-lg-4 col-md-6">
              <div className="service-item  position-relative">
                <div className="icon">
                  <i className="bi bi-activity" />
                </div>
                <h3>Nesciunt Mete</h3>
                <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
              </div>
            </div>{/* End Service Item */}
            <div className="col-lg-4 col-md-6">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-broadcast" />
                </div>
                <h3>Eosle Commodi</h3>
                <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
              </div>
            </div>{/* End Service Item */}
            <div className="col-lg-4 col-md-6">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-easel" />
                </div>
                <h3>Ledo Markt</h3>
                <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
              </div>
            </div>{/* End Service Item */}
          </div>
        </div>
      </section>
    );
}

export default Service;
