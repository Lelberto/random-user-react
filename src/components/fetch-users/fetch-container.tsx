import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/user-context';
import { UserData, UserResponse } from '../../types/fetch-users-data';
import { UserDetailsModal } from './user-details-modal';
import { UsersTable } from './users-table';

export const FetchContainer: React.FC = () => {
    const userContext = useContext(UserContext);
    const [users, setUsers] = useState<UserData[]>([]);
    const [count, setCount] = useState(5);
    const [filter, setFilter] = useState('');
    const [selectedUser, setSelectedUser] = useState<UserData>(null as any);
    const [userDetailsModalShow, setUserDetailsModalShow] = useState(false);

    useEffect(() => {
        axios.get<UserResponse>('https://randomuser.me/api/?results=5').then((res => {
            setUsers([...users, ...res.data.results]);
        })).catch(console.error);
    }, []);

    const handleFetch = async () => {
        try {
            const res = await axios.get<UserResponse>(`https://randomuser.me/api/?results=${count}`);
            setUsers(prevState => [...prevState, ...res.data.results]);
        } catch (err) {
            console.log(err);
        }
    }

    const handleCount = (count: number) => {
        setCount(count);
    }

    const handlerFilter = (text: string) => {
        setFilter(text);
    }

    const handleSelectedUser = (user: UserData) => {
        setSelectedUser(user);
        setUserDetailsModalShow(true);
    }

    const handleSetTictactoeX = (user: UserData) => {
        userContext.setCurrentUserX(user);
        alert(`${user.name.first} ${user.name.last} is selected for TictacToe (X)`);
    }

    const handleSetTictactoeO = (user: UserData) => {
        userContext.setCurrentUserO(user);
        alert(`${user.name.first} ${user.name.last} is selected for TictacToe (O)`);
    }

    const handleCloseUserDetailsModal = () => {
        setUserDetailsModalShow(false);
    }

    return (
        <Container className="mt-5">
            {userContext.currentUserX != null && userContext.currentUserO != null ? (<Link to="/tictactoe">Go to TicTacToe</Link>) : <></>}
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>User count to fetch</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="select" onChange={(e) => handleCount(e.target.value as any)}>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                </FormControl>
                <InputGroup.Append>
                    <Button block onClick={handleFetch}>Fetch users</Button>
                </InputGroup.Append>
            </InputGroup>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Filter</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="text" onChange={(e) => handlerFilter(e.target.value)} />
            </InputGroup>
            <div className="mt-5">
                <UsersTable users={users.filter(user => user.email.includes(filter) || user.name.first.includes(filter) || user.name.last.includes(filter))} onSelect={handleSelectedUser} onTictactoeXSelect={handleSetTictactoeX} onTictactoeOSelect={handleSetTictactoeO} />
            </div>
            <UserDetailsModal show={userDetailsModalShow} user={selectedUser} onModalClose={handleCloseUserDetailsModal} />
        </Container>
    );
}
