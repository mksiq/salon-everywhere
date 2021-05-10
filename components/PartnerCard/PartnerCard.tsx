import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faShare } from '@fortawesome/free-solid-svg-icons';
import partnerStyle from '../../styles/PartnerCard.module.css';

export default function PartnerCard({ partner }: any) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-5 d-flex ">
          <div>
            <img
              className={partnerStyle.picture}
              src="/partners/profile/1.webp"
              alt={partner.name}
            />
          </div>
          <div className="info">
            <h2>{partner.name}</h2>
            <div className="secondary-text text-medium">{partner.tag}</div>
            <div className="d-flex">
              {' '}
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className={partnerStyle.smallIcon + ' mt-2'}
              />
              <div className="mt-2">
                {partner.location?.neighborhood}, {partner.location?.city},{' '}
                {partner.location?.provinceState}
              </div>
            </div>
          </div>
          <div className={partnerStyle.rightBar + ' d-none d-md-block'}></div>
        </div>

        <div className="col-sm-11 col-md-6 d-flex align-items-center">
          {partner.roles.map((role: string) => {
            return (
              <>
                <div className={partnerStyle.role}>{role}</div>
              </>
            );
          })}
        </div>
        <div className={partnerStyle.share + ' col-1'}>
          <FontAwesomeIcon
            icon={faShare}
            className={partnerStyle.mediumIcon + ' mt-2'}
          />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}
