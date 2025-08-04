import React from 'react';
import styles from './Navbar.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const CustomNavbar = () => {
    return (
    <Navbar expand="lg" className={styles.customNav}>
      <Container>
        <Navbar.Brand href="#home" className={styles.customLink}>Ali</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#home" className={`me-5 ${styles.customLink} ${styles.focusLink}`}>Home</Nav.Link>
                <Nav.Link href="#about" className={`me-5 ${styles.customLink}`}>About</Nav.Link>
                <Nav.Link href="#skills" className={`me-5 ${styles.customLink}`}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={styles.customLink}>Projects</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default CustomNavbar;
