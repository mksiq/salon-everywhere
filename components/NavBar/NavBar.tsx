import styles from '../../styles/NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';

function NavBar() {
  return (
    <div className="d-flex flex-column flex-md-row pt-3 pb-1 px-md-4 mb-4 border-bottom ">
      <nav className="my-2 my-md-0 mr-md-3 justify-content-between d-md-flex w-100">
        <div className={styles.mobile + ' col-12 col-md-6'}>
          <div className={styles.logo + ' navbar-brand'}>
            <Link href="/">
              <img src="logo.svg" alt="SalonEverywhere Logo" />
            </Link>
          </div>
        </div>
        <div className={styles.mobile + ' col-12 col-md-3'}>
          <div className="row">
            <div className="col my-auto">
              <Link href="https://saloneverywhere.com/">
                <button className="primary-button">Join for free</button>
              </Link>
            </div>
            <div className="col d-inline text-center">
              <Link href="/sign-in">
                <div className="link-hover">
                  <div className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      className={styles.smallIcon + ' mt-2'}
                    />
                  </div>
                  <p className={styles.signIn}>Sign In</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
