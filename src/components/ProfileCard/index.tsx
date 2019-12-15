import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Collapse, IconButton, makeStyles, Theme, createStyles, Chip, Avatar, Tooltip } from '@material-ui/core';
import { classes } from 'istanbul-lib-coverage';
import { Link as MULink } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { red } from '@material-ui/core/colors';
import clsx from 'clsx';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            maxWidth: 345,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);


export const ProfileCard = (props: { profile }) => {
    const [expanded, setExpanded] = React.useState(false);
    const classes = useStyles(props);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const { profile } = props;
    return (
        <Card style={{margin: '7px', width: '280px'}}>
            <CardActionArea onClick={handleExpandClick}>
                <CardMedia
                    style={{height: '200px'}}
                    image={profile.image}
                    title={profile.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {profile.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        <div>Species: {profile.species}</div>
                        <div>Gender: {profile.gender}</div>
                        <div>Origin: <MULink href={profile.origin.url}>{profile.origin.name}</MULink></div>
                        <div>Status: {profile.status}</div>
                        <div>Location: <MULink href={profile.location.url}>{profile.location.name}</MULink></div>
                    </Typography>
                    <Typography paragraph>
                    <div>Episodes:</div>
                    <div>
                        {profile.episode.map((episode, idx) => <Tooltip title={episode} aria-label="episode">
                            <Chip
                                avatar={<Avatar>{idx + 1}</Avatar>}
                                label="Episode"
                                variant="outlined"
                            />
                        </Tooltip>)}
                    </div>
                    </Typography>

                    </CardContent>
                </Collapse>
        </Card>
      );
}
