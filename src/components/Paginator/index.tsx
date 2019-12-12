import React from 'react';
import { observer } from 'mobx-react';

import TablePagination from '@material-ui/core/TablePagination';

export const Paginator = observer(({ list }) => {
    const onChangePage = (e, page) => list.page$ = page;
    return <TablePagination
        style={{ flex: 'none' }}
        component='div'
        count={list.count$}
        page={list.page$}
        onChangePage={onChangePage}
        rowsPerPage={20}
        rowsPerPageOptions={[ 20 ]}
    />;
});
