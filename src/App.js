import React, { useState } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import { teamMembers } from "./dummy-data";
import NavBar from "./components/NavBar";
import TeamMembers from "./components/TeamMembers";
import Home from "./components/Home";

function App() {
  // Team Member List state
  const [members, setMembers] = useState(teamMembers);
  const [curPage, setCurPage] = useState("");


  return (
    <div className="App">
      
      <NavBar curPage = {curPage} />
      

      <Route exact path = "/" component = {Home} />
      
      <Route path ="/employees"> 
        <TeamMembers 
          members = {members} 
          setMembers = {setMembers} 
          curPage = {curPage} 
          setCurPage = {setCurPage} 
        />
      </Route>
      
    </div>
  );
}

export default App;
