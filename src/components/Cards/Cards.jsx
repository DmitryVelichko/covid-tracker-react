import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import styles from './Cards.module.css'

const Cards = () => {
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;