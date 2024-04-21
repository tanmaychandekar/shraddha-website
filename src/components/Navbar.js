import{ React ,useState }from 'react'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className='navbar container'>
      <a href='/'>
      <div className='nav-logo'>
        <img src={"https://upload.meeshosupplyassets.com/cataloging/1713702087980/SHRADDHAEXTENSIONTrustedSince19801.png"} alt="Shraddha Extension" />
      </div>
      </a>
      <div className='menu' onClick={() => {setMenuOpen(!menuOpen)}}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className='nav-items'>
        <div>
          <ul className={menuOpen ? 'open' : ''}>
            <li>
              <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="stores" spy={true} smooth={true} offset={50} duration={500}>
                Stores
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="locator" spy={true} smooth={true} offset={50} duration={500}>
               Contact
              </Link>
            </li>
            <li>
              <NavLink to='work'>Work with us</NavLink>
            </li>
            <li>
              <NavLink to='https://wa.me/9515350721' target='_blank'>
                <span>ORDER ONLINE!</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='christmas'>
                <span style={{color:"#AF1F00"}}>EVERGREEN CHRISTMAS!</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar