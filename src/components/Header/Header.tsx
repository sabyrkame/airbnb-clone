import logoSvg from '../../assets/images/logo.svg'
import searchIconSvg from '../../assets/images/icons/search.svg'
import globeIconSvg from '../../assets/images/icons/globe-black.svg'
import burgerButtonSvg from '../../assets/images/icons/nav.svg'
import profileImage from '../../assets/images/icons/user-avatar.svg'
import { menuItems } from './header.data'
import './Header.scss'

export const Header = () => {
  return (
    <header className="header container">
      <a className="header__logo" href="/">
        <img
          className="header__logo-image"
          src={logoSvg}
          alt="airbnb logo"
          width={102}
          height={32}
        />
      </a>
      <nav className="header__menu">
        <ul className="header__menu-list">
          {menuItems.map(({ label, href, hasIcon }, index) => (
            <li className="header__menu-item" key={index}>
              <a className="header__menu-link" href={href}>
                {label}
              </a>
              {hasIcon && (
                <button className="header__menu-search-button" type="button">
                  <img src={searchIconSvg} alt="" width={12} height={12} />
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="header__actions">
        <button className="header__button" type="button">
          Airbnb your home
        </button>
        <button className="header__lang-button">
          <img src={globeIconSvg} alt="" width={16} height={16} />
        </button>
        <div className="header__profile">
          <button className="header__profile-nav">
            <img
              className="header__profile-nav-image"
              src={burgerButtonSvg}
              alt=""
              width={16}
              height={16}
            />
          </button>
          <img
            className="header__profile-avatar"
            src={profileImage}
            alt=""
            width={30}
            height={30}
          />
        </div>
      </div>
    </header>
  )
}
