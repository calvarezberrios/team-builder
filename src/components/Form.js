import React, { useState, useEffect } from 'react';
import { Col, Button, Form as FormContainer, FormGroup, Label,
    Input, CustomInput, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Form = ({ members, setMembers, memberToEdit, setMemberToEdit, editMember }) => {
    // Reactstrap modal state and function
    const [invalidSubmit, setInvalidSubmit] = useState(false);
    const [alertMsg, setAlertMsg] = useState("");
    const customAlert = (msg) => {
        setAlertMsg(msg);
        setInvalidSubmit(!invalidSubmit);

    };
    const closeAlert = () => {
        setAlertMsg("");
        setInvalidSubmit(!invalidSubmit);
    };


    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if(memberToEdit){
            setMember({id: memberToEdit.id, name: memberToEdit.name, email: memberToEdit.email, role: memberToEdit.role});
            setIsEditing(true);
        } else {
            setIsEditing(false);
        }
    }, [memberToEdit]);

    const handleChanges = (e) => {
        if(!isEditing) {
            setMember({...member, [e.target.name]: e.target.value});
        } else {
            setMemberToEdit({...member, [e.target.name]: e.target.value})
        }
        
    }

    const addMember = (e) => {
        e.preventDefault();

        if(members.find(person => person.email === member.email) === undefined) {
            setMembers([...members, member]);
            setMember({name: "", email: "", role: ""});
        } else {
        customAlert(`There is already a team member with the same email: ${member.email}. Please check the email and try again.`);
        }
        
    }

    const clearForm = (e) => {
        e.preventDefault();
        setMember({name: "", email: "", role: ""});
        setMemberToEdit(null);
    }
    
    return (
        <FormContainer onSubmit = {isEditing ? editMember : addMember} onReset = {clearForm}>
            <FormGroup row>
                <Label for="name" sm={2}>Name:</Label>
                <Col sm={10}>
                    <Input type="name" name="name" id="name" value = {member.name} placeholder="Enter the Team Member's Name" onChange = {handleChanges} required />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="email" sm={2}>Email:</Label>
                <Col sm={10}>
                    <Input type="email" name="email" id="email" value = {member.email} placeholder="Enter the Team Member's Email" onChange = {handleChanges} required />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="exampleCustomSelect" sm = {2}>Role:</Label>
                <Col sm = {10}>
                    <CustomInput type="select" id="exampleCustomSelect" name="role" onChange = {handleChanges} value = {member.role} >
                        <option value="">Select a Role</option>
                        <option>Frontend Engineer</option>
                        <option>Backend Engineer</option>
                        <option>UX/UI Designer</option>
                        <option>iOS Developer</option>
                        <option>Android Developer</option>
                        <option>Full Stack Web Developer</option>
                    </CustomInput>
                </Col>
            </FormGroup>

            <Button type = "submit">{isEditing ? "Edit" : "Add"} Team Member</Button>{" "}
            <Button type = "reset">Reset</Button>


            <Modal isOpen={invalidSubmit} toggle={customAlert}>
                <ModalHeader toggle={customAlert}>Invalid Submission</ModalHeader>
                <ModalBody>
                    {alertMsg}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={closeAlert}>Ok</Button>{' '}
                </ModalFooter>
            </Modal>
        
        </FormContainer>
    );
};

export default Form;