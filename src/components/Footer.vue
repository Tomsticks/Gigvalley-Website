<template>
    
    <footer>
      <footer id="footer" class="footer">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-5 col-md-12 footer-info">
              <a href="index.html" class="logo d-flex align-items-center">
                <span>GIGVALLEY</span>
              </a>
              <p>Do you want to get notified for information or web Services</p>
              <button class="subscription">Subscribe</button>
              <p><strong>Our Social-links</strong></p>
              <div class="social-links d-flex mt-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100083464581234"
                >
                  <acronym title="Facebook">
                    <i class="fa-brands fa-facebook"></i>
                  </acronym>
                </a>
                <a
                  href="https://twitter.com/oriola_ibitayo?t=aSRH-RKC3Cm8A-EHqNoemA&s=09"
                >
                  <acronym title="Twitter">
                    <i class="fa-brands fa-twitter"></i>
                  </acronym>
                </a>
                <a
                  href="
                    https://www.instagram.com/p/ClyBy2rNVij/?utm_source=ig_web_copy_link"
                >
                  <acronym title="Instagram">
                    <i class="fa-brands fa-instagram"></i>
                  </acronym>
                </a>
                <a href="https://www.linkedin.com/company/gigvalley-tech/">
                  <acronym title="Linkedin-in">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </acronym>
                </a>
              </div>
            </div>

            <div class="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Market place</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div class="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#">Data Gifting</a></li>
                <li><a href="#">SME Data</a></li>
                <li><a href="#">Airtime</a></li>
                <li><a href="#">Cable Subscription</a></li>
                <li><a href="#">Broadband Data</a></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-12 footer-contact text-md-start">
              <h4>Contact Us</h4>
              <p>
                68B Christore Hub,<br />
                Ado-Ekiti, 360102, Nigeria.<br />

                <strong>Phone:</strong>+234(0) 813-5595-313 <br />
                <strong>Email:</strong>gigvalleytech@gmail.com<br />
              </p>
            </div>
          </div>
        </div>

        <div class="container mt-4">
          <div class="copyright">
            &copy; Copyright <strong><span>GIGVALLEY</span></strong
            >. All Rights Reserved
          </div>
          <div class="credits">
            <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/impact-bootstrap-business-website-template/ -->
            Designed by <a href="#">GIGVALLEY TECH</a>
          </div>
        </div>
      </footer>
      </footer>
</template>


<style scoped>
@import '../assets/main.css';
.subscription {
  background-color: var(--primary-color);
  color: #fff;
  padding: 5px 10px;
  font-size: clamp(12px, 2.5vh, 20px);
  border-radius: 10px;
  border: none;
  margin: 20px 0;
  transition: 0.5s ease-in-out;
  border: .5px solid #ffffff7c;
}
.subscription:hover{
  background-color: #FFF;
  color: var(--primary-color);
}


.footer {
  font-size: 14px;
  background-color:var(--primary-color);
  padding: 50px 0;
  color: white;
}

.footer .footer-info .logo {
  line-height: 0;
  margin-bottom: 25px;
}

.footer .footer-info .logo img {
  max-height: 40px;
  margin-right: 6px;
}

.footer .footer-info .logo span {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #fff;
  font-family: var(--font-primary);
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding: 20px 100px;
}

.footer .footer-info p {
  font-size: 14px;
  font-family: var(--font-primary);
}
.footer .social-links {
  display: flex;
  gap: 5px;
  margin-top: 20px;
}
.footer .social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  margin-right: 10px;
  transition: 0.3s;
}

.footer .social-links a:hover {
  color: #fff;
  border-color: #fff;
}

.footer h4 {
  font-size: 16px;
  font-weight: bold;
  position: relative;
  padding-bottom: 12px;
}

.footer .footer-links {
  margin-bottom: 30px;
}

.footer .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer .footer-links ul i {
  padding-right: 2px;
  color: rgba(0, 131, 116, 0.8);
  font-size: 12px;
  line-height: 0;
}

.footer .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

.footer .footer-links ul li:first-child {
  padding-top: 0;
}

.footer .footer-links ul a {
  color: rgba(255, 255, 255, 0.7);
  transition: 0.3s;
  display: inline-block;
  line-height: 1;
}

.footer .footer-links ul a:hover {
  color: #fff;
}

.footer .footer-contact p {
  line-height: 26px;
}

.footer .copyright {
  text-align: center;
}

.footer .credits {
  padding-top: 4px;
  text-align: center;
  font-size: 13px;
}

.footer .credits a {
  color: #fff;
}
@media (max-width:858px) {
    .row{
        padding: 10px 20px;
        /* grid-template-columns: repeat(auto-fit,minmax(200px ,1fr)); */
    }
  }
  @media (max-width:726px) {
    .row{
        padding: 10px 10px;
        grid-template-columns: repeat(auto-fit,minmax(300px ,1fr));
    }
  }
  @media (max-width:642px) {
    .row{
        padding: 10px 10px;
        grid-template-columns: repeat(auto-fit,minmax(200px ,1fr));
    }
  }
</style>