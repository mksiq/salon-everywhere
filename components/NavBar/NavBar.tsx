import styles from '../../styles/NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
function NavBar() {
  return (
    <div className="d-flex flex-column flex-md-row p-3 px-md-4 mb-2 bg-light border-bottom ">
      <nav className="my-2 my-md-0 mr-md-3 justify-content-between d-flex w-100">
        <a
          href="https://saloneverywhere.com/"
          className={styles.logo + ' navbar-brand'}
        >
          <img src="logo.svg" alt="" />
        </a>
        <div className="row">
          <div className="col my-auto">
            <button className="primary-button">Join for free</button>
          </div>
          <div className="col d-inline">
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
      </nav>
    </div>
  );
}

export default NavBar;
