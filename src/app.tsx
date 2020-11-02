import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { FetchContainer } from './components/fetch-container';
import { TictactoeContainer } from './components/tictactoe/tictactoe-container';

const App: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/tictactoe">
                <TictactoeContainer />
            </Route>
            <Route>
                <FetchContainer />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default App;
