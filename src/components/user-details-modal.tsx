import React, { useState } from 'react'
import { Badge, Button, Image, ListGroup, Modal } from 'react-bootstrap'
import { List } from 'react-bootstrap/lib/Media';
import { UserData } from '../types/data'

export interface UserDetailsModalProps {
    show: boolean;
    user: UserData;
    onModalClose: () => void;
}

export const UserDetailsModal: React.FC<UserDetailsModalProps> = ({ show, user, onModalClose }) => {
    let gender = '';
    if (user?.gender === 'male') {
        gender = 'Mr.';
    } else if (user?.gender === 'female') {
        gender = 'Mme.';
    } else {
        gender = 'LGBT'
    }

    return (
        <Modal show={show} onHide={onModalClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Détails de l'utilisateur</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item className="text-center">
                        <Image src={user?.picture.medium} roundedCircle />
                    </ListGroup.Item>
                    <ListGroup.Item>{gender} <span className="font-weight-bold">{user?.name.first} {user?.name.last}</span></ListGroup.Item>
                    <ListGroup.Item><Badge variant="primary">Âge</Badge> {user?.dob.age}</ListGroup.Item>
                    <ListGroup.Item><Badge variant="primary">Adresse</Badge> {user?.location.street.number} {user?.location.street.name} - {user?.location.city}</ListGroup.Item>
                    <ListGroup.Item><Badge variant="primary">Région</Badge> {user?.location.state} ({user?.location.country} - {user?.nat})</ListGroup.Item>
                    <ListGroup.Item><Badge variant="primary">Adresse mail</Badge> {user?.email}</ListGroup.Item>
                    <ListGroup.Item><Badge variant="primary">Téléphone</Badge> {user?.phone}</ListGroup.Item>
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => onModalClose()}>Fermer</Button>
            </Modal.Footer>
        </Modal>
    );
}