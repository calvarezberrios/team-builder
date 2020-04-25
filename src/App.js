import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";

function App() {
  const [members, setMembers] = useState([
    {
      name: "John Smith",
      email: "jsmith@abcinc.com",
      role: "CTO"
    }
  ]);


  return (
    <div className="App">
      {members.map(member => <li key = {member.email}>{member.name} - {member.email} - {member.role}</li>)}

      <Form members = {members} setMembers = {setMembers} />
    </div>
  );
}

export default App;
