import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import contactStyle from '../../../styles/PartnerContact.module.css';
import MyProps from '../../../types/MyProps';

export default function PartnerSocialMedia({ partner }: MyProps) {
  return (
    <div className="container mt-3">
      <div className={contactStyle.roundSquare}>
        <div className="container">
          <p className={contactStyle.socialMediaText + ' mb-0 text-center'}>
            Stay connected with
          </p>
          <div
            className={
              contactStyle.socialMediaText + ' text-heavy mt-0 text-center'
            }
          >
            {partner.name}
          </div>
          <div className="d-flex justify-content-center">
            <a
              className={contactStyle.link}
              href="https://www.instagram.com/merakihairbeautik/"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className={contactStyle.socialMedia}
              />
            </a>
            <a
              className={contactStyle.link}
              href="https://www.facebook.com/merakihairbeautik/"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className={contactStyle.socialMedia}
              />
            </a>
            <a
              className={contactStyle.link}
              href="https://ca.linkedin.com/in/melissa-hirtle-5b674514"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className={contactStyle.socialMedia}
              />
            </a>
            <a
              className={contactStyle.link}
              href="http://www.trusalonsuites.ca/tenants-info/bedford-test-2-4-2-2/"
            >
              <FontAwesomeIcon
                icon={faGlobe}
                className={contactStyle.socialMedia}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
