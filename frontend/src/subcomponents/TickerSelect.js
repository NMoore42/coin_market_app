import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: "100%",
  },
}));

const currencies = [
  {
    label: '',
    value: 'none',
  },
  {
    label: 'Bitcoin',
    value: 'bitcoin',
  },
  {
    label: 'Ethereum',
    value: 'ethereum',
  },
  {
    label: 'Ripple',
    value: 'ripple',
  },
  {
    label: 'Litecoin',
    value: 'litecoin',
  },
  {
    label: 'Bitcoin Cash',
    value: 'bitcoin cash',
  },
  {
    label: 'EOS',
    value: 'eos',
  },
  {
    label: 'Cardano',
    value: 'cardano',
  },
  {
    label: 'Tron',
    value: 'tron',
  },
  {
    label: 'Stellar',
    value: 'stellar',
  },
  {
    label: 'ZCash',
    value: 'zcash',
  }
];

export default function TickerSelect() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">

      <TextField
        id="standard-select-currency-native"
        select
        label="Transaction"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
      >
        {currencies.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>

    </form>
  );
}
