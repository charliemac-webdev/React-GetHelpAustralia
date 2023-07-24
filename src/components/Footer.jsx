import imageOne from "../images/indigenous.png";
import imageTwo from "../images/torres-strait.png";

const Footer = () => {
  return (
    <footer className="footer">
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
              Stop It Now! Australia acknowledges the Traditional Owners of the
              land where we work and live.
            </span>
            <br />
            <span>
              We pay our respects to Elders past, present and emerging.
            </span>
          </p>
        </div>
        <div className="p-2">
          <p className="copyright">
            copyright &copy; Get Help Australia!
            <span id="date"></span> all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
