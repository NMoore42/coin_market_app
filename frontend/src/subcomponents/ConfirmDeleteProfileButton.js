import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function ConfirmDeleteProfileButton(props) {
  const classes = useStyles();

  return (
    <div>

      <Button onClick={event => props.handleDeleteProfile()} variant="contained" color="secondary" className={classes.button}>
        Confirm
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
      </label>
    </div>
  );
}
