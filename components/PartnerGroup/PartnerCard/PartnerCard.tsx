import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faShare } from '@fortawesome/free-solid-svg-icons';
import partnerStyle from '../../../styles/PartnerCard.module.css';
import MyProps from '../../../types/MyProps';

export default function PartnerCard({ partner }: MyProps) {
  return (
    <div className="row justify-content-between pb-3 mb-3 border-bottom">
      <div className="col-sm-12 col-md-5 d-flex ">
        <div>
          <img
            className={partnerStyle.picture}
            src={'/partners/profile/' + partner._id + '.webp'}
            alt={partner.name}
          />
        </div>
        <div className="flex-grow-1">
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

      <div
        className={
          partnerStyle.mobile + ' col-sm-11 col-md-6 d-flex align-items-center'
        }
      >
        {partner.roles.map((role: string, index: number) => {
          return (
            <div key={index} className={partnerStyle.role}>
              {role}
            </div>
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
  );
}
