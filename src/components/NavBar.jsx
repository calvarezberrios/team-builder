import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavbarText
} from 'reactstrap';
import { Link } from "react-router-dom";


export default function NavBar({curPage}) {
    // Reactstrap Navbar state and toggle function
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const closeNav = () => setIsOpen(false);

    

    


    return (
        <header>
            <Navbar color="light" light expand="md">
                <Link className="navbar-brand" to="/" onClick={closeNav}>Emani Computers</Link>
                <NavbarToggler onClick={toggle} />
                <NavbarText>{curPage}</NavbarText>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to="/employees" onClick={closeNav}>Employees</Link>
                        </NavItem>
                    </Nav>

                </Collapse>

            </Navbar>

            
        </header>
    );
}