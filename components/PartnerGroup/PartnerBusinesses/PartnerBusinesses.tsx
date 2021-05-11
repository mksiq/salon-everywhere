import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import businessesStyle from '../../../styles/PartnerBusinesses.module.css';
import MyProps from '../../../types/MyProps';

export default function PartnerBusinesses({ partner }: MyProps) {
  return (
    <div>
      <div className="h3 secondary-text text-heavy">Businesses</div>
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="row">
            <div className="col-12 col-md-4">
              <img
                className={businessesStyle.image}
                src={partner.businesses[0].image}
                alt={partner.businesses[0].name}
              />
            </div>
            <div className="col-12 col-md-6">
              <p className={businessesStyle.type + ' mb-0'}>
                {partner.businesses[0].role}
              </p>
              <a
                href="https://saloneverywhere.com/businesses/merakihairbeautik"
                className={businessesStyle.name}
              >
                {partner.businesses[0].name}
              </a>
              <div className={businessesStyle.businessType + ' mt-0'}>
                {partner.businesses[0].businessType}
              </div>
            </div>
            <div className={businessesStyle.address}>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className={businessesStyle.icon}
              />{' '}
              {partner.businesses[0].address}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="d-flex">
            {partner.businesses[0].items.map(
              (item: { image: string; title: string }, index: number) => {
                return (
                  <div key={index}>
                    <div className={businessesStyle.imageItem}>
                      <img src={item.image} alt={item.title} />
                      <div className={businessesStyle.description}>
                        {item.title}
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
