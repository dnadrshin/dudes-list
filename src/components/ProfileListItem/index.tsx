import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';

export const ProfileListItem = (props: { profile: {
    id: string;
    name: string;
} }) => {
    return <ListItem component={Link} to={`/profile/${props.profile.id}`} button key={props.profile.id}>
    {props.profile.name}
</ListItem>}
