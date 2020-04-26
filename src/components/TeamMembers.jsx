import React, { useState } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "./Form";

const TeamMembers = ({ members, setMembers, memberToEdit, setMemberToEdit, setMemberToDelete, editMember }) => {
    //Modal Reacstrap state and function
    const [modalForm, setModalForm] = useState(false);
    const toggleForm = () => setModalForm(!modalForm);
    
    
    return (
        <div>
            <div className = "tableButtons">
                <Button onClick = {toggleForm}>Add</Button>
                <Modal isOpen={modalForm} toggle={toggleForm}>
                    <ModalHeader toggle={toggleForm}>Add Team Member</ModalHeader>
                    <ModalBody>
                        <Form members = {members} setMembers = {setMembers} memberToEdit = {memberToEdit} setMemberToEdit = {setMemberToEdit} editMember = {editMember} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggleForm}>Done</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
            <Table className = "team-member-table" striped >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Department</th>
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
                                <td>{member.department}</td>
                                <td>
                                    <Button  onClick = {(e) => {
                                        setMemberToEdit({
                                            id: member.id, 
                                            name: member.name, 
                                            email: member.email, 
                                            role: member.role,
                                            department: member.department
                                        });
                                    
                                        toggleForm(e);
                                    }}>
                                        <FontAwesomeIcon icon = "edit" />
                                    </Button>{" "}

                                    <Button onClick = {() => setMemberToDelete(member.id)}>
                                        <FontAwesomeIcon icon = "trash" />
                                    </Button>
                                </td>
                            </tr>);
                    })}

                    
                </tbody>
            </Table>
        </div>
    );
};

export default TeamMembers;
