import React, { useState, useEffect } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import { teamMembers } from "./dummy-data";
import NavBar from "./components/NavBar";
import TeamMembers from "./components/TeamMembers";
import Home from "./components/Home";

function App() {
  // Team Member List state
  const [members, setMembers] = useState(teamMembers);
  const [memberToEdit, setMemberToEdit] = useState();
  const [memberToDelete, setMemberToDelete] = useState();

  const editMember = (e) => {
    e.preventDefault();
    members.forEach(member => {
      if(member.id === memberToEdit.id) {
        member.name = memberToEdit.name;
        member.email = memberToEdit.email;
        member.role = memberToEdit.role;
        member.department = memberToEdit.department;
      }
    });
    setMemberToEdit(null);
    e.target.reset();
  }

  useEffect(() => {

    if(memberToDelete){

      
      const newMemberList = members;

      const memberIndex = newMemberList.findIndex(member => member.id === memberToDelete);

      const confirmed = window.confirm(`Are you sure you want to delete ${members[memberIndex].name}?`);

      if(confirmed) {
        newMemberList.splice(memberIndex, 1);

        setMembers(newMemberList);
        setMemberToDelete(null);
      } else {
        setMemberToDelete(null);
      }
      
    }
    
  }, [memberToDelete, members]);


  return (
    <div className="App">
      
      <NavBar />

      <Route exact path = "/" component = {Home} />
      
      <Route path ="/employees"> 
        <TeamMembers 
          members = {members} 
          setMembers = {setMembers} 
          memberToEdit = {memberToEdit}
          setMemberToEdit = {setMemberToEdit} 
          setMemberToDelete = {setMemberToDelete} 
          editMember = {editMember} />
      </Route>
      
    </div>
  );
}

export default App;
