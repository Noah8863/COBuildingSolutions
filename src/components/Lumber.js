import React from 'react'
import Paper from '@mui/material/Paper';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import img from '../images/lumberPicture2.jpeg'

const columns = [
    { name: 'product', title: 'Product' },
    { name: 'size', title: 'Available Sizes' },
];
const rows = [
    { product: 'Lumber', size: '2 x 4" - 2 x 12" and 8 - 20' },
    { product: 'OSB', size: '15/32, 7/16, 19/32, 23/32, T & G' },
    { product: 'Plywood', size: '1/2, 5/8, 3/4' },

];


function lumber() {
    return (
        <main>
            <img className="lumberPic" src={img} alt={img} />
            <section className="lumberPageText-section">
                <h1>Lumber Built On Values</h1>
                <p>When you work with Colorado Building Solutions, you get more than high-quality lumber. We are dedicated to outstanding customer service to make sure our customers feel understood and that all their needs are met. </p>
            </section>
            <Paper className="gridStyle">
                <Grid rows={rows} columns={columns}>
                    <Table />
                    <TableHeaderRow />
                </Grid>
            </Paper>
        </main>
    )
}

export default lumber;