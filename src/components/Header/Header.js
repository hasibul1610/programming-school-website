import Button from 'react-bootstrap/Button'
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className="hero-area">
            <Navbar expand="lg" className="p2-5">
                <Container>
                    <Navbar.Brand href="#" className="header-logo">Programming School</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink
                                to="/home"
                                style={{
                                    textDecoration: "none",
                                    fontSize: "20px",
                                    marginLeft: "15px",
                                    color: "#234262"
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "orange"
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                style={{
                                    textDecoration: "none",
                                    fontSize: "20px",
                                    marginLeft: "15px",
                                    color: "#234262"
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "orange"
                                }}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/courses"
                                style={{
                                    textDecoration: "none",
                                    fontSize: "20px",
                                    marginLeft: "15px",
                                    color: "#234262"
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "orange"
                                }}
                            >
                                Courses
                            </NavLink>
                            <NavLink
                                to="/contact"
                                style={{
                                    textDecoration: "none",
                                    fontSize: "20px",
                                    marginLeft: "15px",
                                    color: "#234262"
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "orange"
                                }}
                            >
                                Contact Us
                            </NavLink>

                        </Nav>

                        <Button className="btn-main">Apply Now</Button>

                    </Navbar.Collapse>

                </Container>

            </Navbar>

        </div>
    );
};

export default Header;