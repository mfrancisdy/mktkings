import React from 'react';
import MainLogo from '../assets/Images/logomain.svg';
import LogoDark from '../assets/Images/logo-dark.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from '@reach/router';

export default function Header() {

    const closecanvas = () => {
        setTimeout(() => {
            var classes = document.getElementsByClassName('btn-close');
            var button = classes[0];
            button.click();
        }, 1000);
    }

    const Projects = () => {
        var elmntToView = document.getElementById("projects");
        elmntToView.scrollIntoView();
        closecanvas()
    }

    const Service = () => {
        var elmntToView = document.getElementById("discover");
        elmntToView.scrollIntoView();
        closecanvas()
    }

    const FAQ = () => {
        var elmntToView = document.getElementById("casestudy");
        elmntToView.scrollIntoView();
        closecanvas()
    }


    return (

        <>
            {['xxl'].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3 headermenu  sticky-top" fixedTop>
                    <Container fluid>
                        <Navbar.Brand><Link to="/"><img src={MainLogo} alt="logo" /></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <Link to="/"><img src={LogoDark} alt="logo" /></Link>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link onClick={Service} className='headermenu' href="">Service</Nav.Link>
                                    <Nav.Link onClick={Projects} className='headermenu' href="">Projects</Nav.Link>
                                    <Nav.Link onClick={FAQ} className='headermenu' href="">Case studies</Nav.Link>
                                    <Nav.Link href="http://T.me/MKTKing" target="_blank" className='headermenu'>Contact Us</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>

    )
}