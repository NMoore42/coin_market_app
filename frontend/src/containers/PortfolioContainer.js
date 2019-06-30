import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CoinChartCard from '../cards/CoinChartCard'
import ArticleCard from '../cards/ArticleCard'
import NewTransactionCard from '../cards/NewTransactionCard';
import HistoricalTransactionContainer from './HistoricalTransactionContainer'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
}));

export default function CoinContainer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Box m={-3}>
              <h1 style={{width: "100%"}}>
              <span>Portfolio Past Week Performance</span>
              <span style={{position: "relative", float: "right", marginRight: "20px"}}>$10000</span>
              </h1>
            </Box>
            <CoinChartCard />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Box m={-3}>
              <h4>New Transactions</h4>
            </Box>
            <NewTransactionCard />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Box m={-3}>
              <h4>Recent Transactions</h4>
            </Box>
            <br></br>
            <HistoricalTransactionContainer />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
