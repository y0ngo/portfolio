import './index.scss';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <div className="nav-bar">
    {/* Left side logo/text */}
    <Link className="logo" to="/">
      Yongofilms
    </Link>

    {/* Main navigation links */}
    <nav>
      <NavLink
        exact="true"
        activeclassname="active"
        to="/cinematography"
      >
        Cinematography
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        to="/contact"
      >
        Contact
      </NavLink>
    </nav>

    {/* Socials stay the same */}
    <ul>
            <li>
                <a target ="_blank" rel="noreferrer" href="https://www.instagram.com/yongofilms/">
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target ="_blank" rel="noreferrer" href="https://www.tiktok.com/@yongofilms/">
                    <FontAwesomeIcon icon={faTiktok} color="#4d4d4e" />
                </a>
            </li>
        </ul>
  </div>
);

export default Sidebar;
