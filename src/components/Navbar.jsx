import '../styles/components/Navbar.css'
import logo from '../assets/images/logo.webp'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <div className='logo'>
          <img src={logo} alt='logo'/>
          <h2>QoraPlus</h2>
        </div>
        <div className='menu-items'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Pricing</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className='navbar-buttons'>
          <Link to='/sign-up'><button className='signup'>Sign Up</button></Link>
          <button className='contactus'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
