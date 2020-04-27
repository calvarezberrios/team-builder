import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

const SubNav = () => {


    const toggleButtons = () => {
        const linksContainer = document.querySelector(".subNav .linksContainer");
        const links = document.querySelector(".subNav .linksContainer .links");

        if(linksContainer.clientWidth < links.scrollWidth) {
            document.querySelectorAll(".subNav .btn").forEach(button => {
                button.setAttribute("style", "display: block");
            });
        } else {
            document.querySelectorAll(".subNav .btn").forEach(button => {
                button.setAttribute("style", "display: none");
            });
        }
    }


    useEffect(() => {
        toggleButtons();
    }, []);

    

    window.addEventListener("resize", (e) => {
        toggleButtons();
    });

    const scrollLinks = (e) => {
        e.preventDefault();

        if(e.target.className.includes("left")) {
            document.querySelector(".subNav .linksContainer").scrollLeft -= 360;
        } else {
            document.querySelector(".subNav .linksContainer").scrollLeft += 360;
        }
    }

    


    return (

        <nav className = "subNav">
            <Button className = "left" onClick = {scrollLinks}>{"<"}</Button>
            <div className = "linksContainer">
                <div className = "links">
                    <NavLink exact to = "/employees">All</NavLink>
                    <NavLink to = "/employees/ops">Operations</NavLink>
                    <NavLink to = "/employees/hr">Human Resources</NavLink>
                    <NavLink to = "/employees/cust-svc">Customer Service</NavLink>
                    <NavLink to = "/employees/sales">Sales</NavLink>
                    <NavLink to = "/employees/marketing">Marketing</NavLink>
                    <NavLink to = "/employees/mobile-dev">Mobile Development</NavLink>
                    <NavLink to = "/employees/web-dev">Web Development</NavLink>
                </div>
            </div>
            <Button className = "right" onClick = {scrollLinks}>{">"}</Button>
        </nav>
    );
};

export default SubNav;