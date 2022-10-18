import React from "react";
import LogoDark from '../assets/Images/logo-dark.svg'
import { Link } from '@reach/router';

export default function Footer() {
    return (
        <footer className="text-center text-lg-start bg-dark text-muted marketking-footer">
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <img src={LogoDark} alt="MarketKings™" />
                            </h6>
                            <p className="footer-text">
                                MarketKings™ is a development and marketing suite dedicated to helping EVM projects raise capital and provide utility to their token holders.
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="fw-bold mb-4 footer-menu">Marketplace</h6>
                            <Link className="footer-submenu" to="/"><p className="footer-submenu">Explore</p></Link>
                            <Link className="footer-submenu" to="/"><p className="footer-submenu">Articles</p></Link>
                            <Link className="footer-submenu" to="/"><p className="footer-submenu">How It Works</p></Link>
                            <Link className="footer-submenu" to="/"><p className="footer-submenu">Help</p></Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4 footer-copyright">
                © {(new Date().getFullYear())} Copyright MarketKings™ &nbsp;
                <a className="text-reset fw-bold footer-copyright" href="#/">
                    Hostwire Systems
                </a>
            </div>
        </footer>

    );
}