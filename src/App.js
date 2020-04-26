import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import { Link } from "react-router-dom";
import Form from "./components/Form";
import TeamMembers from "./components/TeamMembers";

function App() {
  // Reactstrap Navbar state and toggle function
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // Team Member List state
  const [members, setMembers] = useState([
    {
      id: 1,      
      name: "John Smith",
      email: "jsmith@abcinc.com",
      role: "CTO"
    }
  ]);

  const [memberToEdit, setMemberToEdit] = useState();
  const [memberToDelete, setMemberToDelete] = useState();

  const editMember = (e) => {
    e.preventDefault();
    members.forEach(member => {
      if(member.id === memberToEdit.id) {
        member.name = memberToEdit.name;
        member.email = memberToEdit.email;
        member.role = memberToEdit.role;
      }
    });
    setMemberToEdit(null);
    e.target.reset();
  }

  useEffect(() => {

    if(memberToDelete){
      const newMemberList = members;

      const memberIndex = newMemberList.findIndex(member => member.id === memberToDelete.id);

      newMemberList.splice(memberIndex, 1);

      setMembers(newMemberList);
      setMemberToDelete(null);
    }
    
  }, [memberToDelete, members]);


  return (
    <div className="App">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Emani Computers</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className = "nav-link" to="/">Something</Link>
            </NavItem>
          </Nav>
          <NavbarText>Team Members</NavbarText>
        </Collapse>
      </Navbar>



      <Form members = {members} setMembers = {setMembers} memberToEdit = {memberToEdit} setMemberToEdit = {setMemberToEdit} editMember = {editMember} />

      <TeamMembers members = {members} setMemberToEdit = {setMemberToEdit} setMemberToDelete = {setMemberToDelete} />
      

      
    </div>
  );
}

export default App;
