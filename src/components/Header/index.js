import React from 'react';
import logo from '../../assets/movie.svg';
import './header.css';

class Header extends React.Component {
    render() {
      return (
          <header className="header-container">
              <img className='logo'src={logo} />
              <a className='home'href="">teste</a>

          </header>
      );
    }
  }

export default Header;