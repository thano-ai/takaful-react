import React from "react";
import FeaturedService from "./FeaturedService";
import About from "./About";
import OnFocus from "./OnFocus";
import Feature from "./Feature";
import Service from "./Service";
import FAQ from "./FAQ";
import Contact from "./Contact";

const Home = () => {
  return (
    <main id="main">
      <section
        id="hero-static"
        className="hero-static d-flex align-items-center"
      >
        <div
          className="container d-flex flex-column justify-content-center align-items-center text-center position-relative"
          data-aos="zoom-out"
        >
          <h2>
            Welcome to <span>Takaful</span>
          </h2>
          <p>
            Et voluptate esse accusantium accusamus natus reiciendis quidem
            voluptates similique aut.
          </p>
          <div className="d-flex">
            <a href="#" className="btn-get-started scrollto">
              Install App
            </a>
            <a
              href="#"
              className="glightbox btn-watch-video d-flex align-items-center"
            >
              <i className="bi bi-play-circle" />
              <span>Watch Video</span>
            </a>
          </div>
        </div>
      </section>

      {/* ======= Featured Services Section ======= */}
      <FeaturedService></FeaturedService>
      {/* End Featured Services Section */}

      {/* ======= About Section ======= */}
      <About></About>
      {/* End About Section */}

      {/* ======= On Focus Section ======= */}
      <OnFocus></OnFocus>
      {/* End On Focus Section */}

      {/* ======= Features Section ======= */}
      <Feature></Feature>
      {/* End Features Section */}

      {/* ======= Service Section ======= */}
      <Service></Service>
      {/* End Service Section */}

      {/* ======= FAQ Section ======= */}
      <FAQ></FAQ>
      {/* End FAQ Section */}

      {/* ======= Contact Section ======= */}
      <Contact></Contact>
      {/* End Contact Section */}

    </main>
  );
};

export default Home;
