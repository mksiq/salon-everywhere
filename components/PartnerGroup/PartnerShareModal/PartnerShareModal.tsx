import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import style from '../../../styles/PartnerShareModal.module.css';

// partnerShare
export default function PartnerShareModal({
  partner,
  visible,
  toggleModal,
}: any) {
  return (
    <>
      {visible && (
        <>
          <div className={style.background} onClick={toggleModal}></div>
          <div className={style.modal}>
            <span onClick={toggleModal}>
              <FontAwesomeIcon icon={faTimes} className={style.closeButton} />
            </span>
            <div className="px-5 py-2">
              <a
                href={
                  'https://www.facebook.com/sharer.php?u=https://saloneverywhere.com/people/' +
                  partner.name +
                  '-' +
                  partner.id
                }
              >
                <p className={style.shareProfile}>Share Profile</p>
                <p className={style.facebook}>
                  {' '}
                  <FontAwesomeIcon icon={faFacebookF} className={style.icon} />
                  Facebook Post
                </p>
              </a>
              <a
                href={
                  'mailto:?subject=Checkout my SalonEverywhere Profile! &body=Hey, %0D%0AI would love it if you could check out my profile on SalonEverywhere! SalonEverywhere is a new online platform for hair and beauty professionals and businesses to build their brand online and find dream clients! %0D%0Ahttps://saloneverywhere.com/people/' +
                  partner.name +
                  '-' +
                  partner.id
                }
              >
                <p className={style.email}>
                  {' '}
                  <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
                  Email
                </p>
              </a>

              <input
                type="text"
                value={
                  'https://saloneverywhere.com/people/' +
                  partner.name +
                  '-' +
                  partner.id
                }
                readOnly
                className={style.input}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
