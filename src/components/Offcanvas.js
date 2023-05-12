import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import React, { useState } from "react";


export default function Navigation() {

    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleClose = () => setMenuOpen(false)
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} bg="dark" expand={expand} sticky='top' className='navbar navbar-dark bg-dark'>
                    <Container fluid>
                        <Navbar.Brand>
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="orangered" className="bi bi-file-code-fill" viewBox="0 0 16 16">
                                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 1 1 .708-.708z" />
                                </svg>&nbsp;
                                <span className='title'> <strong>Hasan Marhoon </strong> </span>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={toggleMenu} />
                        <Navbar.Offcanvas
                            className='text-bg-dark'
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            restoreFocus={false}
                            show={menuOpen}
                            onHide={handleClose}
                        >
                            <Offcanvas.Header closeButton closeVariant='white'>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end align-items-space-between flex-grow-1 pe-3" id='nav' >
                                    <Nav>
                                        <Link to="/" onClick={toggleMenu}>Home</Link>
                                    </Nav>
                                    <Nav>
                                        <Link to='/experience' onClick={toggleMenu}>
                                            Practical expreience & Education
                                        </Link>
                                    </Nav>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar >
            ))
            }
        </>
    );
}