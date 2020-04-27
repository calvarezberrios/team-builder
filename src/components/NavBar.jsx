import React, { useState, useEffect } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavbarText
} from 'reactstrap';
import { useHistory, Route, Link } from "react-router-dom";
import SubNav from "./SubNav";


export default function NavBar({ setCurList }) {
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
                setCurList("");
                
                break;
            case "/employees":
                setCurPage("Employee List");
                setCurList("");
                break;
                case "/employees/ops":
                    setCurPage("Operations Team");
                    setCurList("Operations");
                    break;
                case "/employees/hr":
                    setCurPage("Human Resources Team");
                    setCurList("Human Resources");
                    break;
                case "/employees/cust-svc":
                        setCurPage("Customer Service Team");
                        setCurList("Customer Service");
                        break;
                case "/employees/sales":
                    setCurPage("Sales Team");
                    setCurList("Sales");
                    break;
                case "/employees/marketing":
                    setCurPage("Marketing Team");
                    setCurList("Marketing");
                    break;
                case "/employees/mobile-dev":
                    setCurPage("Mobile Development Team");
                    setCurList("Mobile Development");
                    break;
                case "/employees/web-dev":
                    setCurPage("Web Development Team");
                    setCurList("Web Development");
                    break;
            default:
                setCurPage("");
                setCurList("");
        }

    }, [curPage, location.pathname, setCurList]);

    


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

            <Route path = "/employees">
                <SubNav />
            </Route>
        </header>
    );
}