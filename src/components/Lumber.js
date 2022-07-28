import React from 'react'
import Paper from '@mui/material/Paper';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

const columns = [
    { name: 'product', title: 'Product' },
    { name: 'size', title: 'Available Sizes' },
];
const rows = [
    { product: 'Lumber', size: '7/16, 3/4, 23/32, 15/32, 19/32' },
    { product: 'OSB', size: '7/16, 3/4, 23/32, 15/32, 19/32' },
    { product: 'LSL', size: '7/16, 3/4, 23/32, 15/32, 19/32' },
    { product: 'Sheathing Plywood', size: '7/16, 3/4, 23/32, 15/32, 19/32' },

];


function lumber() {
    return (
        <Paper>
            <Grid className="gridStyle"
                rows={rows}
                columns={columns}
            >
                <Table />
                <TableHeaderRow />
            </Grid>
        </Paper>
    )
}

export default lumber;