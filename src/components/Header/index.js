import React from 'react';
import logo from '../../assets/movie.svg';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="header-container">
                <div className="logo-container">
                    <img className="logo" src={logo} />
                    <h1 className="title">MovieLib</h1>
                </div>
                <a className='home-button' href="">teste</a>
            </header>
        );
    }
}

export default Header;