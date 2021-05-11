import contactStyle from '../../../styles/PartnerContact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faDirections } from '@fortawesome/free-solid-svg-icons';
import PartnerSocialMedia from '../PartnerSocialMedia/PartnerSocialMedia';
import MyProps from '../../../types/MyProps';

export default function PartnerContactMobile({ partner }: MyProps) {
  return (
    <>
      <div>
        <div className="container">
          <div className={contactStyle.roundSquare}>
            <div className="row">
              <div className="col-4 text-center border-end">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className={contactStyle.icon}
                />{' '}
                <a
                  href="https://square.site/book/1EN6V6N9FS1X8/meraki-hair-beautik-bedford-ns"
                  className={contactStyle.title}
                >
                  <p> Book Now</p>
                </a>
              </div>
              <div className="col-4 text-center border-end">
                <FontAwesomeIcon
                  icon={faCommentDots}
                  className={contactStyle.icon}
                />{' '}
                <a
                  href="http://m.me/merakihairbeautik"
                  className={contactStyle.title}
                >
                  <p>Send Message</p>
                </a>
              </div>
              <div className="col-4 text-center">
                <FontAwesomeIcon
                  icon={faDirections}
                  className={contactStyle.icon}
                />{' '}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=660+Bedford+Hwy%2C+Rockingham%2C+Halifax%2C+NS%2C+CAN%2C+B3M+0M5"
                  className={contactStyle.title}
                >
                  <p>Get Directions</p>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-2 text-center"></div>
          </div>
          <div className="col-12 col-md-2 text-center"></div>
        </div>
      </div>
    </>
  );
}
