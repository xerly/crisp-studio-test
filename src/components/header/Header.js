import './Header.scss';
// import { menu } from '../../data';

// Material UI Icons
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
  // Sticky Navigation
  function fixedNav() {
    const nav = document.querySelector('#header-navbar');
    const img = document.querySelector('.logo-img');
    const imgFixed = document.querySelector('.logo-img-fixed');
    let navTop = nav.offsetTop;

    if (window.scrollY >= navTop && window.scrollY > 80) {
      nav.classList.add('fixed');
      img.classList.add('fixed');
      imgFixed.style.display = 'block';
    } else {
      nav.classList.remove('fixed');
      img.classList.remove('fixed');
      imgFixed.style.display = 'none';
    }
  }

  window.addEventListener('scroll', fixedNav);

  return (
    <div id="container">
      <header id="header">
        <div className="header-wrapper">
          <div className="header-searchbar">
            <form action="#" id="header-form">
              <SearchIcon className="header-search-icon" />
              <input id="header-input" type="text" />
            </form>
          </div>
          <div className="header-logo">
            <img src="/assets/logo.png" className="logo-img" alt="KOIBIRD" />
          </div>
          <div className="header-accounts">
            <div className="register-account">
              <span>Register | My Account</span>
            </div>
            <div className="like-cart-icons">
              <img src="/assets/heart.png" alt="like" />
              <img src="/assets/shopbag.png" alt="cart" />
            </div>
          </div>
        </div>
      </header>
      <nav id="header-navbar">
        <div className="navbar-fixed-wrapper">
          <img
            src="/assets/logo.png"
            className="logo-img-fixed"
            alt="KOIBIRD"
          />
          <a className="link-btn" href="#shop">
            SHOP BY CATEGORY
          </a>
          <a className="link-btn" href="#shop">
            SHOP BY BRAND
          </a>
          <a className="link-btn" href="#shop">
            SHOP BY COLLECTION
          </a>
          <a className="link-btn" href="#shop">
            ABOUT KOIBIRD
          </a>
          <a className="link-btn" href="#shop">
            POP-UP SHOP
          </a>
        </div>
      </nav>
      <div className="navbar-submenu">
        <ul>
          <li>ANNAKIKI</li>
          <li>ANNE WEST</li>
          <li>BACON CLOTHING</li>
          <li>BLACK CROWS</li>
          <li>BLANCHA</li>
          <li>CANCELLATO</li>
          <li>CORDOVA</li>
          <li>FUSALP</li>
          <li>I LOVE MR MITTENS</li>
          <li>IENKI IENKI</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
