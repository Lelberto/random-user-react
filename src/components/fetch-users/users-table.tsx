import React from 'react';
import { Button, Image, Table } from 'react-bootstrap';
import { UserData } from '../../types/fetch-users-data';

export interface UsersTableProps {
    users: UserData[];
    onSelect: (user: UserData) => void;
    onTictactoeXSelect: (user: UserData) => void;
    onTictactoeOSelect: (user: UserData) => void;
}

export const UsersTable: React.FC<UsersTableProps> = ({ users, onSelect, onTictactoeXSelect, onTictactoeOSelect }) => (
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
                <th>TicTacToe</th>
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
                <td>
                    <Button variant="success" onClick={() => onTictactoeXSelect(user)}>TicTacToe (X)</Button>
                    <Button className="ml-1" variant="success" onClick={() => onTictactoeOSelect(user)}>TicTacToe (O)</Button>
                </td>
            </tr>
        ))}
        </tbody>
    </Table>
)
