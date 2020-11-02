import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { FetchContainer } from './components/fetch-users/fetch-container';
import UserContextProvider from './components/fetch-users/user-context-provider';
import { TictactoeContainer } from './components/tictactoe/tictactoe-container';

const App: React.FC = () => (
    <BrowserRouter>
        <UserContextProvider>
            <Switch>
                <Route exact path="/tictactoe">
                    <TictactoeContainer />
                </Route>
                <Route>
                    <FetchContainer />
                </Route>
            </Switch>
        </UserContextProvider>
    </BrowserRouter>
)

export default App;
