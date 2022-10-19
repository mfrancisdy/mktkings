import React from 'react';
import { Link } from '@reach/router';
import MainLogo from '../assets/images/logo-main.svg'
export default function Header() {


    return (
        <header className='container navigation-header'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={MainLogo} alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav navBarItems text-white">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">Discover</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact"><button className='btn btn-block headerBtn'>Connect Wallet</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}