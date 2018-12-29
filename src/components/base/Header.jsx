import React from 'react';
import {Link} from "react-router-dom";



function Header() {
    return (
        <header>
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to='/'><span className="navbar-brand">Home</span></Link>
                {/*<a className="navbar-brand" href="#">Navbar</a>*/}
            </nav>
        </header>
    );
}

export default Header;