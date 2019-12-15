import React from "react";
import { useParams } from "react-router-dom";
import { Link as MULink, Typography } from "@material-ui/core";
import { observer } from "mobx-react";

const paperStyle = {
  width: "100%",
  height: "100%",
  marginTop: "15px",
  overflow: "auto",
  textAlign: "center"
};

export const Profile = observer(({ list }) => {
  const { id } = useParams();
  const profile = list.profiles$.find(
    listProfile => listProfile.id === parseInt(id, 10)
  );

  if (!profile) {
    list.getProfile(parseInt(id, 10));
    return null;
  }

  return (
    <div style={paperStyle}>
      <Typography variant="body1" gutterBottom>
        <h2>Profile: {profile.name}</h2>
        <img alt={profile.name} src={profile.image} />
        <div>Species: {profile.species}</div>
        <div>Gender: {profile.gender}</div>
        <div>
          Origin:{" "}
          <MULink href={profile.origin.url}>{profile.origin.name}</MULink>
        </div>
        <div>Status: {profile.status}</div>
        <div>
          Location:{" "}
          <MULink href={profile.location.url}>{profile.location.name}</MULink>
        </div>
        <div>
          <div>Episodes:</div>
          <div>
            {profile.episode.map(episode => (
              <div>{episode}</div>
            ))}
          </div>
        </div>
      </Typography>
    </div>
  );
});
