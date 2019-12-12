import React from 'react';

import { ProfilesList } from 'components/ProfilesList';
import { Paginator } from 'components/Paginator';

export const List = ({ list }) => {
    return <React.Fragment>
        <ProfilesList list={list} />
        <Paginator list={list} />
    </React.Fragment>;
};
