import React, { useState, useEffect, useCallback } from 'react';
import { Route } from "react-router-dom";
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "./Form";
import SubNav from "./SubNav";

const TeamMembers = ({ members, setMembers, curPage, setCurPage }) => {
    //Modal Reacstrap state and function
    const [modalForm, setModalForm] = useState(false);
    const toggleForm = () => setModalForm(!modalForm);

    const [membersFiltered, setMembersFiltered] = useState(members);

    const [memberToEdit, setMemberToEdit] = useState();
    const [memberToDelete, setMemberToDelete] = useState();


    const editMember = (e) => {
        e.preventDefault();
        members.forEach(member => {
            if (member.id === memberToEdit.id) {
                member.name = memberToEdit.name;
                member.email = memberToEdit.email;
                member.role = memberToEdit.role;
                member.department = memberToEdit.department;
            }
        });
        setMemberToEdit(null);
        e.target.reset();
    }


    const filterList = useCallback(
        () => {
            let team = curPage.split(" ");

            if(team.includes("Team")) {
                team.splice(team.indexOf("Team"), 1);
                team = team.join(" ");
            } else {
                team = "";
            }
            
            const teamMembers = members.filter(member => member.department.includes(team));
            setMembersFiltered(teamMembers);
        }, [curPage, members]
    );

    useEffect(() => {
        if (memberToDelete) {
            const newMembersList = members;
            const memberIndex = members.findIndex(member => member.email === memberToDelete);
            const confirmed = window.confirm(`Are you sure you want to delete ${members[memberIndex].name}?`);

            if (confirmed) {
                newMembersList.splice(memberIndex, 1);
                setMembers(newMembersList);
                filterList();
                setMemberToDelete(null);
            } else {
                setMemberToDelete(null);
            }
        }
    }, [memberToDelete, members, membersFiltered, setMembers, filterList]);


    useEffect(() => {
        filterList();
        
    }, [filterList]);

    

    return (
        <div>
            <Route path = "/employees">
                <SubNav setCurPage = {setCurPage} />
            </Route>

            <div className="tableButtons">
                <Button onClick={toggleForm}>Add</Button>
                <Modal isOpen={modalForm} toggle={toggleForm}>
                    <ModalHeader toggle={toggleForm}>Add Team Member</ModalHeader>
                    <ModalBody>
                        <Form members={members} setMembers={setMembers} memberToEdit={memberToEdit} setMemberToEdit={setMemberToEdit} editMember={editMember} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggleForm}>Done</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
            <Table className="team-member-table" striped >
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
                    {membersFiltered.map((member, index) => {
                        member.id = index + 1;
                        return (
                            <tr key={member.id}>
                                <th scope="row">{member.id}</th>
                                <td>{member.name}</td>
                                <td>{member.email}</td>
                                <td>{member.role}</td>
                                <td>{member.department}</td>
                                <td>
                                    <Button onClick={(e) => {
                                        setMemberToEdit({
                                            id: member.id,
                                            name: member.name,
                                            email: member.email,
                                            role: member.role,
                                            department: member.department
                                        });

                                        toggleForm(e);
                                    }}>
                                        <FontAwesomeIcon icon="edit" />
                                    </Button>{" "}

                                    <Button onClick={() => setMemberToDelete(member.email)}>
                                        <FontAwesomeIcon icon="trash" />
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
