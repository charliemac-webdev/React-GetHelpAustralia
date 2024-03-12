import imageOne from "../images/indigenous.png";
import imageTwo from "../images/torres-strait.png";
import logo from "../images/UniSC_Abr-Logo_Horiz_RGB.png";

const Footer = () => {
  return (
    <footer className="footer footer-text">
      <div className="container-fluid">
        <div className="row row-cols-md-3 row-cols-1 align-items-sm-start align-items-md-center">
          <div className="col pt-4">
            <div className="d-md-flex justify-content-start text-start">
              <div className="pt-2">
                <img src={imageOne} alt="indigenous flag" height="63" />
              </div>
              <div className="p-md-2 pt-sm-2">
                <img src={imageTwo} alt="torres-straight flag" height="63" />
              </div>
            </div>
            <div className="d-md-flex flex-md-column justify-content-start">
              <div className="p-md-2 pt-sm-2">
                <p>
                  <span>Get Help! Australia acknowledges the</span>
                  <br />
                  <span>
                    Traditional Owners of the land where we work and live.
                  </span>
                  <br />
                  <span>
                    We pay our respects to Elders past, present and emerging.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col pt-4">
            <div className="d-md-flex flex-md-column text-md-center">
              <div className="p-md-2">
                <p className="copyright m-0">
                  copyright &copy; Get Help! Australia
                </p>
                <p>
                  <span id="date"></span> all rights reserved
                </p>
              </div>

              <div className="p-md-2">
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
