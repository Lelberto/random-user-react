import React, { useState } from 'react';
import UserContext from '../../contexts/user-context';
import { UserData } from '../../types/fetch-users-data';

const UserContextProvider: React.FC = (props) => {
    const [currentUserX, setCurrentUserX] = useState<UserData>(null);
    const [currentUserO, setCurrentUserO] = useState<UserData>(null);

    return (
        <UserContext.Provider value={{ currentUserX, setCurrentUserX, currentUserO, setCurrentUserO }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
