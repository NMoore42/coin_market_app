import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
  },
  media: {
    height: 20
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
        />
        <img src={btc_icon} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
