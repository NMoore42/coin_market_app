import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 1),
    margin: "10px"
  },
}));

export default function HistoricalTransactionCard(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography style={{color: props.color}} component="p">
          {props.sign} 1.889586 {props.coin}
        </Typography>
      </Paper>
    </div>
  );
}
