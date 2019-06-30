import React from 'react';
import Box from '@material-ui/core/Box';
import HistoricalTransactionCard from '../cards/HistoricalTransactionCard'



export default function HistoricalTransactionContainer() {

  return (
    <Box m={-2}>
      <HistoricalTransactionCard color={"red"} sign={"-"} coin={"LTC"}/>
      <HistoricalTransactionCard color={"red"} sign={"-"} coin={"ZEC"}/>
      <HistoricalTransactionCard color={"green"} sign={"+"} coin={"BTC"}/>
      <HistoricalTransactionCard color={"green"} sign={"+"} coin={"LTC"}/>
      <HistoricalTransactionCard color={"red"} sign={"-"} coin={"BCH"}/>
      <HistoricalTransactionCard color={"green"} sign={"+"} coin={"XRP"}/>
    </Box>
  );
}
