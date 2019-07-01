import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ArticleCard from '../cards/ArticleCard'
import uuid from 'uuid'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
}));

function createArticleCards(props) {
  if (props.appState.userArticles.length) {
    return props.appState.userArticles.map(article =>
      <Grid key={uuid.v4()}item>
        <ArticleCard
          appState={props.appState}
          coinImg={article.coinImg}
          handleArticleRemove={props.handleArticleRemove}
          articleData={article}
        />
      </Grid>
    )
  } else {
    return <h3>You do not have any saved articles</h3>
  }
}

export default function ArticleContainer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Box m={-3}>
              <h1>
              Your Saved Articles
              </h1>
            </Box>
            <Grid container justify="center" spacing={1}>
              {createArticleCards(props)}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
