import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import btc_icon from '../../node_modules/cryptocurrency-icons/svg/color/btc.svg';
import eth_icon from '../../node_modules/cryptocurrency-icons/svg/color/eth.svg';
import xrp_icon from '../../node_modules/cryptocurrency-icons/svg/color/xrp.svg';
import ltc_icon from '../../node_modules/cryptocurrency-icons/svg/color/ltc.svg';
import bch_icon from '../../node_modules/cryptocurrency-icons/svg/color/bch.svg';
import eos_icon from '../../node_modules/cryptocurrency-icons/svg/color/eos.svg';
import ada_icon from '../../node_modules/cryptocurrency-icons/svg/color/ada.svg';
import xlm_icon from '../../node_modules/cryptocurrency-icons/svg/color/xlm.svg';
import trx_icon from '../../node_modules/cryptocurrency-icons/svg/color/trx.svg';
import zec_icon from '../../node_modules/cryptocurrency-icons/svg/color/zec.svg';

const coins = {
  "Bitcoin": btc_icon,
  "Ethereum": eth_icon,
  "Ripple": xrp_icon,
  "Litecoin": ltc_icon,
  "Bitcoin Cash": bch_icon,
  "EOS": eos_icon,
  "Cardano": ada_icon,
  "TRON": trx_icon,
  "Stellar": xlm_icon,
  "Zcash": zec_icon
}

const useStyles = makeStyles({
  card: {
    maxWidth: 290
  },
  media: {
    height: 20
  },
});

function openURL(url) {
  window.open(url)
}

function saveOrDeleteButton(props) {
  if (props.appState.mainPage === "Articles") {
    return <Button
      onClick={event => props.handleArticleRemove(props.articleData, props.appState.mainPage)}
      size="small"
      color="primary">
      Remove
    </Button>
  } else if (props.appState.userArticles.filter(article => article.url === props.articleData.url).length) {
    return <Button size="small" disabled color="primary">Saved</Button>
  } else {
    return <Button
      onClick={event => props.handleArticleSave(props.articleData, props.appState.mainPage)}
      size="small"
      color="primary">
      Save
    </Button>
  }
}

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={event => openURL(props.articleData.url)}>
        <CardContent>
          <Box m={1}>
            <img src={coins[props.coin]} alt="" />
          </Box>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.articleData.title.slice(0,65) + "..."}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {saveOrDeleteButton(props)}
      </CardActions>
    </Card>
  );
}
