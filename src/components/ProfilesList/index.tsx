import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CircularProgress from '@material-ui/core/CircularProgress';

import { ProfileListItem } from '../ProfileListItem';

export const ProfilesList = observer(({ list }) => {
    const profiles = list.profiles$;

    if (!profiles || list.isLoading$) { return <div
        style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >
        <CircularProgress />
    </div>; }

    return (<List component='nav' style={{ overflow: 'auto' }}>
        {profiles.map((profile) => <ProfileListItem profile={profile} /> )}
    </List>);
});
