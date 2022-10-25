import React from 'react';
import MainLogo from '../assets/Images/logomain.svg';
import LogoDark from '../assets/Images/logo-dark.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function Header() {

    const Projects = () => {
        var classes = document.getElementsByClassName('btn-close');
        var button = classes[0];
        button.click();
        var elmntToView = document.getElementById("projects");
        elmntToView.scrollIntoView();
    }

    const Service = () => {
        var classes = document.getElementsByClassName('btn-close');
        var button = classes[0];
        button.click();
        var elmntToView = document.getElementById("service");
        elmntToView.scrollIntoView();
    }

    const FAQ = () => {
        var classes = document.getElementsByClassName('btn-close');
        var button = classes[0];
        button.click();
        var elmntToView = document.getElementById("faq");
        elmntToView.scrollIntoView();
    }

    const contact = () => {
        var classes = document.getElementsByClassName('btn-close');
        var button = classes[0];
        button.click();
        var elmntToView = document.getElementById("footer");
        elmntToView.scrollIntoView();
    }

    return (

        <>
            {['xxl'].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3 headermenu  sticky-top" fixedTop>
                    <Container fluid>
                        <Navbar.Brand><img src={MainLogo} alt="logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <img src={LogoDark} alt="logo" />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link className='headermenu' href="/">Home</Nav.Link>
                                    <Nav.Link onClick={Service} className='headermenu' href="">Service</Nav.Link>
                                    <Nav.Link onClick={Projects} className='headermenu' href="">Projects</Nav.Link>
                                    <Nav.Link onClick={FAQ} className='headermenu' href="">FAQ</Nav.Link>
                                    <Nav.Link onClick={contact} className='headermenu' href="">Contact us</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>

    )
}