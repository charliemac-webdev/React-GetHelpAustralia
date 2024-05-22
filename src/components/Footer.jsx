import { Link } from "react-router-dom";
// import logo from "../images/UniSC_Abr-Logo_Horiz_RGB.png";
import logo from "../images/UniSC_Abr-Logo_Horiz_White_RGB.png";
import imageOne from "../images/indigenous.png";
import imageTwo from "../images/torres-strait.png";

const Footer = () => {
  return (
    <footer className="footer footer-text">
      <div className="container-fluid pw-8vw">
        <div className="row row-cols-md-3 row-cols-1 align-items-sm-start align-items-md-center">
          <div className="col pt-4">
            <div className="d-md-flex justify-content-center">
              <div className="pt-2">
                <img src={imageOne} alt="indigenous flag" height="63" />
              </div>
              <div className="p-md-2 pt-sm-2">
                <img src={imageTwo} alt="torres-straight flag" height="63" />
              </div>
            </div>
            <div className="d-md-flex flex-md-column text-center">
              <div className="p-md-2 pt-sm-2">
                <p>
                  <span>
                    Get Help! Australia acknowledges the Traditional Owners of
                    the land
                  </span>
                  <br />
                  <span>
                    where we work and live. We pay our respects to Elders past,
                    present and emerging.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col pt-2">
            <div className="d-md-flex flex-md-column text-md-center">
              <div className="p-md-2">
                <Link to="/" className="default-link">
                  <p className="m-0 footer-link text-white">
                    <u>
                      <b>Disclaimer and Privacy Policy</b>
                    </u>
                  </p>
                </Link>
              </div>
              <div className="p-md-2">
                <p className="copyright m-0">
                  copyright &copy; Get Help! Australia
                </p>
                <p className="m-0">
                  <span id="date"></span> all rights reserved
                </p>
              </div>
              <div className="p-0 m-0">
                <p className="m-0">Website by</p>
                <p>Charlie Mac Web Development</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-block text-md-end">
              <div className="p-md-2">
                <img src={logo} alt="UniSC" height="115" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
