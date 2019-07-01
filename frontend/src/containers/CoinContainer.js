import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CoinChartCard from '../cards/CoinChartCard'
import ArticleCard from '../cards/ArticleCard'
import uuid from 'uuid'

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

function createArticleCards(props) {
  let articles = props.appState.articles[props.appState.mainPage]
  if (articles.length > 4) {
    return articles.slice(0, 4).map(article =>
      <Grid key={uuid.v4()} item>
        <ArticleCard
          appState={props.appState}
          coinImg={props.appState.mainPage}
          handleArticleSave={props.handleArticleSave}
          articleData={article}
        />
      </Grid>
    )
  } else if (articles.length > 0) {
    return articles.map(article =>
      <Grid key={uuid.v4()} item>
        <ArticleCard
          appState={props.appState}
          coinImg={props.appState.mainPage}
          handleArticleSave={props.handleArticleSave}
          articleData={article}
        />
      </Grid>
    )
  } else {
    return <h3>Sorry, there are no new {props.appState.mainPage} articles at this time</h3>
  }
}

export default function CoinContainer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Box m={-3}>
              <h1>
              {props.appState.mainPage} Past Week Performance
              </h1>
            </Box>
            <CoinChartCard />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Price
            <Box m={-2}>
              <h2>{props.appState.currentPrices[props.appState.mainPage]}</h2>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Market Cap
            <Box m={-2}>
              <h2>
              $109,498,405
              </h2>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container className={classes.root} spacing={2}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={1}>
                  {createArticleCards(props)}
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
