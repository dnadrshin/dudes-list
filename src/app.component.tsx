import React from 'react';
import { observer } from 'mobx-react';
import {
    HashRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

import { Profile } from './pages/Profile';
import { Panel } from './components/Panel'

import { ListModel } from './model/ListModel';
import { List } from './pages/List';
import { FullDetailList } from './components/FullDetailList'

const list = new ListModel();

export const App = observer(() => {
    return <Router>
        <div style={{
            width: '100%', maxWidth: '600', margin: 'auto', display: 'flex', flexFlow: 'column', height: '100%'
        }}>
            <Panel />
            <Switch>
                <Route path='/profile/:id'>
                    <Profile list={list} />
                </Route>
                <Route path='/list'>
                    <List list={list} />
                </Route>
                <Route path='/'>
                    <FullDetailList list={list} />
                </Route>
            </Switch>
        </div>
    </Router>;
});
