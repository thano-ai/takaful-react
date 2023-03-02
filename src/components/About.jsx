import React from "react";

const About = () =>{
    return(
        <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>About Us</h2>
            <p>Takaful is a voluntary application that aims to reduce the difficulty of people obtaining medicines by donating them to each other .. </p>
          </div>
          <div className="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay={200}>
            <div className="col-lg-5">
              <div className="about-img">
                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <h3 className="pt-0 pt-lg-5">Here is What Our Application Do</h3>
              {/* Tabs */}
              <ul className="nav nav-pills mb-3">
                <li><a className="nav-link active" data-bs-toggle="pill" href="#tab1">Donations</a></li>
                <li><a className="nav-link" data-bs-toggle="pill" href="#tab2">Centers</a></li>
                <li><a className="nav-link" data-bs-toggle="pill" href="#tab3">Citizines</a></li>
              </ul>{/* End Tabs */}
              {/* Tab Content */}
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab1">
                  <p className="fst-italic">Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                  </div>
                  <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Incidunt non veritatis illum ea ut nisi</h4>
                  </div>
                  <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Omnis ab quia nemo dignissimos rem eum quos..</h4>
                  </div>
                  <p>Eius alias aut cupiditate. Dolor voluptates animi ut blanditiis quos nam. Magnam officia aut ut alias quo explicabo ullam esse. Sunt magnam et dolorem eaque magnam odit enim quaerat. Vero error error voluptatem eum.</p>
                </div>{/* End Tab 1 Content */}
                <div className="tab-pane fade show" id="tab2">
                  <p className="fst-italic">Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                  </div>
                  <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Incidunt non veritatis illum ea ut nisi</h4>
                  </div>
                  <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Omnis ab quia nemo dignissimos rem eum quos..</h4>
                  </div>
                  <p>Eius alias aut cupiditate. Dolor voluptates animi ut blanditiis quos nam. Magnam officia aut ut alias quo explicabo ullam esse. Sunt magnam et dolorem eaque magnam odit enim quaerat. Vero error error voluptatem eum.</p>
                </div>{/* End Tab 2 Content */}
                <div className="tab-pane fade show" id="tab3">
                  <p className="fst-italic">Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                  </div>
                  <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Incidunt non veritatis illum ea ut nisi</h4>
                  </div>
                  <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Omnis ab quia nemo dignissimos rem eum quos..</h4>
                  </div>
                  <p>Eius alias aut cupiditate. Dolor voluptates animi ut blanditiis quos nam. Magnam officia aut ut alias quo explicabo ullam esse. Sunt magnam et dolorem eaque magnam odit enim quaerat. Vero error error voluptatem eum.</p>
                </div>{/* End Tab 3 Content */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;