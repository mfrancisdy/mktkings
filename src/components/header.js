import React from 'react';
import { Link } from '@reach/router';
import MainLogo from '../assets/Images/logomain.svg';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {
    return (

        <>
            {['xxl'].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3 headermenu">
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
                                    <img src={MainLogo} alt="logo" />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link to="/">Home</Nav.Link>
                                    <Nav.Link href="#/">Discover</Nav.Link>
                                    <Nav.Link href="#/">About us</Nav.Link>
                                    <Nav.Link href="#/">Service</Nav.Link>
                                    <Nav.Link href="#/">Contact us</Nav.Link>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>

    )
}