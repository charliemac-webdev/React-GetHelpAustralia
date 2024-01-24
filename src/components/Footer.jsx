import imageOne from "../images/indigenous.png";
import imageTwo from "../images/torres-strait.png";
import logo from "../images/UniSC_Abr-Logo_Stack_RGB (1).png";

const Footer = () => {
  return (
    <footer className="footer fs-6">
      <div class="container">
        <div class="row align-items-center">
          <div class="col p-4">
            <div className="d-flex justify-content-center text-center">
              <div className="p-2">
                <img src={imageOne} alt="indigenous flag" height="63" />
              </div>
              <div className="p-2">
                <img src={imageTwo} alt="torres-straight flag" height="63" />
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center text-center">
              <div className="-p-2">
                <p>
                  <span>
                    Get Help! Australia acknowledges the Traditional Owners of
                    the land where we work and live.
                  </span>
                  <br />
                  <span>
                    We pay our respects to Elders past, present and emerging.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="d-flex flex-column justify-content-center text-center">
              <div className="p-2">
                <p className="copyright m-0">
                  copyright &copy; Get Help! Australia
                </p>
                <p>
                  <span id="date"></span> all rights reserved
                </p>
              </div>

              <div className="p-2">
                <p className="copyright">
                  Website design by
                  <span id="date"></span> Charlie Mac Web Developments
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="d-flex flex-column justify-content-center text-center">
              <div className="p-2">
                <img src={logo} alt="UniSC" height="145" />
              </div>
              <div>
                <p>University of Sunshine Coast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
