import React from 'react';
import { UserData } from '../types/fetch-users-data';

export interface UserContextState {
    currentUserX: UserData;
    setCurrentUserX: (currentUser: UserData) => void;
    currentUserO: UserData;
    setCurrentUserO: (currentUser: UserData) => void;
}

const UserContext = React.createContext<UserContextState>({ currentUserX: null, setCurrentUserX: null, currentUserO: null, setCurrentUserO: null });

export default UserContext;
