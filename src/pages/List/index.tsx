import React, { useState, useEffect } from 'react';

import { ProfilesList } from 'components/ProfilesList';
import { ListModel } from '../../model/ListModel';
import { Paginator } from 'components/Paginator';

export const List = (props: { list: ListModel }) => {
    useEffect(() => {
        if (!props.list.page$) {
            props.list.page$ = 0;
        }
    });
    return <React.Fragment>
        <Paginator list={props.list} />
        <ProfilesList list={props.list} />
    </React.Fragment>;
};
