import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ArticleCard from '../cards/ArticleCard';
import UpdateProfileButton from '../subcomponents/UpdateProfileButton'
import DeleteProfileButton from '../subcomponents/DeleteProfileButton'
import logo from '../images/logo.png'
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

export default function ProfileContainer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Box m={-3}>
              <h1>
                Your Profile
              </h1>
            </Box>
            <Container maxWidth="sm">
              <Paper className={classes.paper}>
              <img src={logo} width={1406/3} height={886/3} alt="" />
              <h2>Name: </h2>
              <h2>Email: </h2>
              <h2>Password: </h2>
              </Paper>
            </Container>
            <Box container m={3}>
              <Grid container m={3} justify="center" spacing={1}>
                <UpdateProfileButton />
                <DeleteProfileButton />
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
