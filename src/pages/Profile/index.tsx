import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { Link as MULink, Paper, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';

const paperStyle = {
    width: '100%',
    height: '100%',
    marginTop: '15px',
    overflow: 'auto',
    textAlign: 'center' as const
};

export const Profile = observer(({ list }) => {
    const { id } = useParams();
    const profile = list.profiles$.find((listProfile) => listProfile.id === parseInt(id, 10));

    if (!profile) {
        list.getProfile(parseInt(id, 10));
        return null;
    }

    return <div style={paperStyle}>
        <Typography variant="body1" gutterBottom>
        <h2>Profile: {profile.name}</h2>
        <img alt={profile.name} src={profile.image} />
        <div>Species: {profile.species}</div>
        <div>Gender: {profile.gender}</div>
        <div>Origin: <MULink href={profile.origin.url}>{profile.origin.name}</MULink></div>
        <div>Status: {profile.status}</div>
        <div>Location: <MULink href={profile.location.url}>{profile.location.name}</MULink></div>
        <div>
            <div>Episodes:</div>
            <div>{profile.episode.map((episode) => <div>
                {episode}
            </div>)}</div>
        </div>
        </Typography>
    </div>;
});

// created: "2017-11-04T18:48:46.250Z"
// episode: ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2",…]
// gender: "Male"
// id: 1
// image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
// location: {name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20"}
// name: "Rick Sanchez"
// origin: {name: "Earth (C-137)", url: "https://rickandmortyapi.com/api/location/1"}
// species: "Human"
// status: "Alive"
// type: ""
// url: "https://rickandmortyapi.com/api/character/1"

// Character information (name, species, etc).
// ● Origin and location information (name, dimension, amount of residents, etc).
// ● Name of the chapters the character is featured on.
