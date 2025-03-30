import logo from '../assets/images/logo.webp'
import google from '../assets/icons/google-icon.svg'
import facebook from '../assets/icons/facebook-icon.webp'
import envelope from '../assets/icons/envelope-solid.svg'
import phone from '../assets/icons/phone-solid.svg'
import lock from '../assets/icons/lock-solid.svg'
import '../styles/pages/SignUp.css'

const SignUp = () => {
  return (
    <div className='sign-up-container'>
      <div className='left-content'>
      </div>
      <div className='right-content'>
        <div className='content'>
          <div className='logo-section'>
            <img src={logo} alt='logo' />
            <h2>QoraPlus</h2>
          </div>
          <div className='sign-up-box'>
            <h2>Create your new Account</h2>
            <h3>Welcome! Select sign up method:</h3>
            <div className='sign-up-method'>
              <button className='sign-up-method-button'>
                <img src={google} alt='google-logo' />
                <p>Google</p>
              </button>
              <button className='sign-up-method-button'>
                <img src={facebook} alt='facebook-logo' />
                <p>Facebook</p>
              </button>
              <div className='or-divider'>
                <span>or continue with email</span>
              </div>
              <form>
                <div className="input-box">
                  <img className='icon' src={envelope} alt='envelope-icon' />
                  <input type="text" name="email" placeholder="Enter your Email"
                    value="" required />
                </div>
                <div className="input-box">
                  <img className='icon' src={phone} alt='phone-icon' />
                  <input type="text" name="phnumber" placeholder="Enter your Phone Number"
                    value="" required />
                </div>
                <div className="input-box">
                  <img className='icon' src={lock} alt='lock-icon' />
                  <input type="password" name="password" placeholder="Create Password"
                    value="" required />
                </div>
                <button className='submit-button'>Register Now</button>
              </form>
              <div className='sign-in-route'>
                <span>Already have an account?</span>
                <a href='/sign-in'>Log In</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
