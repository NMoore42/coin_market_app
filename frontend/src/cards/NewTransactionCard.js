import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SendReceiveButton from '../subcomponents/SendReceiveButton';
import QuantityInput from '../subcomponents/QuantityInput';
import TickerSelect from '../subcomponents/TickerSelect';

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

export default function NewTransactionCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs>
          <SendReceiveButton />
        </Grid>
        <Grid item xs>
          <QuantityInput />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs>
          <TickerSelect />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
