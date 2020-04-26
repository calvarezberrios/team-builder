import React from 'react';
import { Table, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeamMembers = ({ members, setMemberToEdit, setMemberToDelete }) => {
    
    return (

        <Table striped>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {members.map((member, index) => {
                    member.id = index + 1;
                    return (
                        <tr key = {member.id}>
                            <th scope = "row">{member.id}</th>
                            <td>{member.name}</td>
                            <td>{member.email}</td>
                            <td>{member.role}</td>
                            <td>
                                <Button  onClick = {() => setMemberToEdit({
                                        id: member.id, 
                                        name: member.name, 
                                        email: member.email, 
                                        role: member.role
                                })}>
                                    <FontAwesomeIcon icon = "edit" />
                                </Button>{" "}

                                <Button onClick = {() => setMemberToDelete({
                                        id: member.id, 
                                        name: member.name, 
                                        email: member.email, 
                                        role: member.role
                                })}>
                                    <FontAwesomeIcon icon = "trash" />
                                </Button>
                            </td>
                        </tr>);
                })}

                
            </tbody>
        </Table>

    );
};

export default TeamMembers;
