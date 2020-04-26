import React, { useState, useEffect } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavbarText
} from 'reactstrap';
import { useHistory, Link } from "react-router-dom";


export default function NavBar() {
    // Reactstrap Navbar state and toggle function
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const closeNav = () => setIsOpen(false);

    const { location } = useHistory();
    const [curPage, setCurPage] = useState("Home Page");

    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setCurPage("Home Page");
                break;
            case "/employees":
                setCurPage("Employee List");
                break;
            default:
                setCurPage("");
        }

    }, [curPage, location.pathname]);


    return (
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
    );
}