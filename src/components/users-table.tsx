import React from 'react';
import { Image, Table } from 'react-bootstrap';
import { UserData } from '../types/data';

export interface UsersTableProps {
    users: UserData[];
    onSelect: (user: UserData) => void;
}

export const UsersTable: React.FC<UsersTableProps> = ({ users, onSelect }) => (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Adresse mail</th>
                <th>Téléphone</th>
                <th>Âge</th>
            </tr>
        </thead>
        <tbody>
        {users.map((user, i) => (
            <tr key={i}>
                <td onClick={() => onSelect(user)}>{i + 1}</td>
                <td onClick={() => onSelect(user)}><Image src={user.picture.thumbnail} thumbnail /></td>
                <td onClick={() => onSelect(user)}>{user.name.last}</td>
                <td onClick={() => onSelect(user)}>{user.name.first}</td>
                <td onClick={() => onSelect(user)}>{user.email}</td>
                <td onClick={() => onSelect(user)}>{user.phone}</td>
                <td onClick={() => onSelect(user)}>{user.dob.age}</td>
            </tr>
        ))}
        </tbody>
    </Table>
)
