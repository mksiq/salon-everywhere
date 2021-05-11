import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import partnerStyle from '../../../styles/Partner.module.css';
export default function PartnerPortfolio({ partner, complete }: any) {
  return (
    <div>
      {complete && (
        <>
          <br />
        </>
      )}
      <div className="h3 secondary-text text-heavy">Portfolios</div>
      <div className="w-20">
        {complete && <></>}
        {partner.portfolio.map(
          (portfolio: { id: number; type: string; images: Array<string> }) => {
            return (
              <>
                <div key={portfolio.id}>
                  <div>
                    <span
                      className={
                        partnerStyle.portfolioType +
                        ' h4  text-heavy primary-text'
                      }
                    >
                      {portfolio.type}
                    </span>
                    {'  '}
                    <FontAwesomeIcon
                      icon={faImages}
                      className={partnerStyle.imageIcon}
                    />{' '}
                    {'  '}
                    <span className={partnerStyle.imagesLength}>
                      {portfolio.images.length}
                    </span>
                  </div>
                  <div className="d-flex">
                    {portfolio.images.map((image: string, index: number) => {
                      return (
                        <div
                          className={partnerStyle.cardItem + ' text-center'}
                          key={index}
                        >
                          <img
                            className={partnerStyle.portfolioImg}
                            src={image}
                            alt={'Picture of ' + portfolio.type}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <hr />
                </div>
              </>
            );
          }
        )}
      </div>
    </div>
  );
}
