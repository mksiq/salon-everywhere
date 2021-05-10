import contactStyle from '../../../styles/PartnerContact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faDirections } from '@fortawesome/free-solid-svg-icons';
import PartnerSocialMedia from '../PartnerSocialMedia/PartnerSocialMedia';

export default function PartnerContact({ partner }: any) {
  console.log(partner.address);
  return (
    <div>
      <div className="col">
        <div className="container">
          <div className={contactStyle.roundSquare}>
            <div className="row">
              <div className="col-12 col-md-2 text-center">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className={contactStyle.icon}
                />{' '}
              </div>
              <div className="col-12 col-md-10">
                <a
                  href="https://square.site/book/1EN6V6N9FS1X8/meraki-hair-beautik-bedford-ns"
                  className={contactStyle.title}
                >
                  Book Now
                </a>
              </div>
              <div className="row">
                <div className={contactStyle.callToAction + ' col-10 offset-2'}>
                  Book through {partner.name}
                </div>
              </div>
            </div>
            <hr className="my-1" />
            <div className="row">
              <div className="col-12 col-md-2 text-center">
                <FontAwesomeIcon
                  icon={faCommentDots}
                  className={contactStyle.icon}
                />{' '}
              </div>
              <div className="col-12 col-md-10">
                <a
                  href="http://m.me/merakihairbeautik"
                  className={contactStyle.title}
                >
                  Send Message
                </a>
              </div>
              <div className="row">
                <div className={contactStyle.callToAction + ' col-10 offset-2'}>
                  Message {partner.name}
                </div>
              </div>
            </div>
            <hr className="my-1" />
            <div className="row">
              <div className="col-12 col-md-2 text-center">
                <FontAwesomeIcon
                  icon={faDirections}
                  className={contactStyle.icon}
                />{' '}
              </div>
              <div className="col-12 col-md-10">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=660+Bedford+Hwy%2C+Rockingham%2C+Halifax%2C+NS%2C+CAN%2C+B3M+0M5"
                  className={contactStyle.title}
                >
                  Get Directions
                </a>
              </div>
              <div className="row">
                <div className={contactStyle.callToAction + ' col-10 offset-2'}>
                  {partner.location.address}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PartnerSocialMedia partner={partner} />
    </div>
  );
}
