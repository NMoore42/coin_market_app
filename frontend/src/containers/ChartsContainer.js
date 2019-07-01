import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CoinChartCard from '../cards/CoinChartCard'
import PortfolioPieCard from '../cards/PortfolioPieCard'
import PortfolioBarCard from '../cards/PortfolioBarCard'
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

export default function ChartsContainer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Box m={-3}>
              <h1>Portfolio Past Week Performance</h1>
            </Box>
            <CoinChartCard />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Box m={-3}>
              <h4>Currency Holdings</h4>
            </Box>
            <PortfolioPieCard />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Box m={-3}>
              <h4>Currency Holdings</h4>
            </Box>
            <br></br>
            <PortfolioBarCard />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
