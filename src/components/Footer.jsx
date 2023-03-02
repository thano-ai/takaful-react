import React from "react";

const Footer = ()=>{
    return(
        <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>TAKAFUL<span>.</span></h3>
                  <p>
                    Sana'a <br />
                    Yemen<br /><br />
                    <strong>Phone:</strong> +967 777 777 777<br />
                    <strong>Email:</strong> info@takaful.com<br />
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bi bi-chevron-right" /> <a href="#">Home</a></li>
                  <li><i className="bi bi-chevron-right" /> <a href="#about">About us</a></li>
                  <li><i className="bi bi-chevron-right" /> <a href="#services">Services</a></li>
                  <li><i className="bi bi-chevron-right" /> <a href="#">Terms of service</a></li>
                  <li><i className="bi bi-chevron-right" /> <a href="#">Privacy policy</a></li>
                </ul>
              </div>
              {/* <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div> */}
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Subscribe to our Newsletter now !</p>
                <form action method="post">
                  <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-legal text-center">
          <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
            <div className="d-flex flex-column align-items-center align-items-lg-start">
              <div className="copyright">
                © Copyright <strong><span>Takaful</span></strong>. All Rights Reserved
              </div>
              <div className="credits">
                {/* All the links in the footer should remain intact. */}
                {/* You can delete the links only if you purchased the pro version. */}
                {/* Licensing information: https://bootstrapmade.com/license/ */}
                {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/herobiz-bootstrap-business-template/ */}
                Designed by <a href="#">THANAA</a>
              </div>
            </div>
            <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
              <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
              <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
              <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
              {/* <a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
          <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a> */}
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;