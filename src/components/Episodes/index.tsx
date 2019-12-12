import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const Episodes = (episodes) => <ExpansionPanel>
    <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
    >
        <Typography>Episodes</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
    <Typography>
        {episodes.map((episode) => <div>
            {episode}
        </div>)}
    </Typography>
    </ExpansionPanelDetails>
</ExpansionPanel>;
