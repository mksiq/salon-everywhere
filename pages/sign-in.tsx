import Link from 'next/link';
import signInStyle from '../styles/SignIn.module.css';

export default function SignUp() {
  const registerUser = (event: any) => {
    event.preventDefault(); //
  };
  /** label is not working properly when filling input field */
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="col-12 col-md-6">
          <h2>Sign In</h2>
          <form onSubmit={registerUser}>
            <div className={signInStyle.signInContainer}>
              <label className={signInStyle.signLabel} htmlFor="email">
                <input type="email" />
                <p>Email</p>
              </label>
            </div>
            <div className={signInStyle.signInContainer + ' mt-3'}>
              <label className={signInStyle.signLabel} htmlFor="password">
                <input type="password" />
                <p>Password</p>
              </label>
            </div>
            <div className="container d-flex mt-4 justify-content-between ">
              <div className="mr-4">
                <button className="primary-button mr-4" type="submit">
                  Register
                </button>
              </div>
              <div>
                <Link href="">Join for Free </Link>
                <span className="m-2 ml-2 text-muted">|</span>
                <Link href="">Reset your password</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
