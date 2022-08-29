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
            <div className="TextContainer">
                <h1 className="Headers">LUMBER BUILT ON VALUES</h1>
                <p>When you work with Colorado Building Solutions, you get more than high-quality lumber. We are dedicated to outstanding customer service to make sure our customers feel understood and that all their needs are met. 
                </p>
                <h1 className="Headers">WHAT WE PROVIDE</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nunc augue. Proin sit amet suscipit tortor. Nunc augue turpis, efficitur ultricies nisi ut, mattis ultrices ex. Ut eu elit egestas felis interdum mattis. Nullam quis dignissim nulla, ut tincidunt tortor. Nulla cursus massa eget nunc rutrum tincidunt</p>
            </div>
            <Paper className="gridStyle">
                <Grid className="rowText" rows={rows} columns={columns}>
                    <Table />
                    <TableHeaderRow />
                </Grid>
            </Paper>
        </main>
    )
}

export default lumber;