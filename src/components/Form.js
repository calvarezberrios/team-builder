import React, { useState } from 'react';

const Form = ({ members, setMembers }) => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    })

    const handleChanges = (e) => {
        setMember({...member, [e.target.name]: e.target.value});
    }

    const addMember = (e) => {
        e.preventDefault();

        if(members.find(person => person.email === member.email) === undefined) {
            setMembers([...members, member]);
            setMember({name: "", email: "", role: ""});
        } else {
            alert(`There is someone with the same email: ${member.email} in the team. Please check the email and try again.`);
        }
        
    }

    const clearForm = (e) => {
        setMember({name: "", email: "", role: ""});
    }
    
    return (
        <form onSubmit = {addMember} onReset = {clearForm}>
            <label htmlFor = "name">Name</label>
            <input id = "name" type = "text" name = "name" value = {member.name} placeholder = "Enter the team member's name" onChange = {handleChanges} required/>

            <label htmlFor = "email">Email</label>
            <input id = "email" type = "email" name = "email" value = {member.email} placeholder = "Enter the team member's email" onChange = {handleChanges} required/>

            <label htmlFor = "role" required>Role</label>
            <select id = "role" name = "role" onChange = {handleChanges} value = {member.role} >
                <option value = ""></option>
                <option value = "Frontend Engineer">Frontend Engineer</option>
                <option value = "Backend Engineer">Backend Engineer</option>
                <option value = "UX/UI Designer">UX/UI Designer</option>
                <option value = "iOS Developer">iOS Developer</option>
                <option value = "Android Engineer">Android Developer</option>
                <option value = "Full Stack Web Developer">Full Stack Web Developer</option>
            </select>

            <button type = "submit">Add Team Member</button>
            <button type = "reset">Reset</button>
        </form>
    );
};

export default Form;