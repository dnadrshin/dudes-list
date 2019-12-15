import React, { useEffect, Fragment } from 'react';
import { ProfileCard } from '../ProfileCard';
import { observer } from 'mobx-react';
import { Paginator } from 'components/Paginator';

export const FullDetailList = observer((props: { list }) => {
    useEffect(() => {
        if (props.list.page$ === null) {
            props.list.page$ = 0;
        }
    });
    const profiles = props.list.profiles$;
    return <Fragment>
        <Paginator list={props.list} />
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {profiles.map((profile) => <ProfileCard profile={profile} /> )}
        </div>
    </Fragment>
});
