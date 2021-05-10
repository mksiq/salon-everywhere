import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import footerStyle from '../../styles/Footer.module.css';
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className={footerStyle.footer + ' mt-auto py-3'}>
      <div className="container">
        <div className="container d-flex justify-content-center secondary-text text-medium">
          <div className="p-2">
            <a href="https://help.saloneverywhere.com/portal/en/home">
              Help Center
            </a>
          </div>
          <div className="p-2">
            <a href="https://saloneverywhere.com/legal/terms-of-use">
              Terms of Use
            </a>
          </div>
          <div className="p-2">
            <a href="https://saloneverywhere.com/legal/privacy-policy">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="container d-flex justify-content-center ">
          <a href="https://www.instagram.com/saloneverywhere">
            <FontAwesomeIcon
              icon={faInstagram}
              className={footerStyle.socialMedia}
            />
          </a>
          <a href="https://www.facebook.com/SalonEverywhere">
            <FontAwesomeIcon
              icon={faFacebookF}
              className={footerStyle.socialMedia}
            />
          </a>
          <a href="https://www.linkedin.com/company/saloneverywhere">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className={footerStyle.socialMedia}
            />
          </a>
        </div>
        <div className="secondary-text bold text-center">
          <p className="mb-0">© 2021 SalonEverywhere. All rights reserved.</p>
          <p>
            The creator of this page does not hold any copyright to the material
            used and he is not related to SalonEverywhere ... yet? :).
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
