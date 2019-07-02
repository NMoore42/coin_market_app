import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CoinContainer from '../containers/CoinContainer.js'
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChartIcon from '@material-ui/icons/BarChart';
import ProfileIcon from '@material-ui/icons/Face';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import ArticleIcon from '@material-ui/icons/LibraryBooks';
import PortfolioContainer from '../containers/PortfolioContainer.js'
import ProfileContainer from '../containers/ProfileContainer.js'
import ArticleContainer from '../containers/ArticleContainer.js'
import ChartsContainer from '../containers/ChartsContainer.js'
import btc_icon from '../../node_modules/cryptocurrency-icons/svg/black/btc.svg';
import eth_icon from '../../node_modules/cryptocurrency-icons/svg/black/eth.svg';
import xrp_icon from '../../node_modules/cryptocurrency-icons/svg/black/xrp.svg';
import ltc_icon from '../../node_modules/cryptocurrency-icons/svg/black/ltc.svg';
import bch_icon from '../../node_modules/cryptocurrency-icons/svg/black/bch.svg';
import eos_icon from '../../node_modules/cryptocurrency-icons/svg/black/eos.svg';
import ada_icon from '../../node_modules/cryptocurrency-icons/svg/black/ada.svg';
import xlm_icon from '../../node_modules/cryptocurrency-icons/svg/black/xlm.svg';
import trx_icon from '../../node_modules/cryptocurrency-icons/svg/black/trx.svg';
import zec_icon from '../../node_modules/cryptocurrency-icons/svg/black/zec.svg';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  imageIcon: {
    height: '100%',
    transform: "scale(.9)"
  },
  iconRoot: {
    textAlign: 'center'
  },
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function renderSwitch(param) {
    switch(param) {
      case 'Portfolio':
        return <PortfolioContainer appState={props.appState}/>
      case 'Charts':
        return <ChartsContainer appState={props.appState} />
      case 'Articles':
        return <ArticleContainer appState={props.appState} handleArticleRemove={props.handleArticleRemove}/>;
      case 'Profile':
        return <ProfileContainer appState={props.appState}/>;
      default:
        return <CoinContainer appState={props.appState} handleArticleSave={props.handleArticleSave}/>;;
      }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Coin Market App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Portfolio', 'Charts', 'Articles', 'Profile'].map((text, index) => (
            <ListItem onClick={event => props.handleMenuClick(text)} button key={text}>
              <ListItemIcon>{[<MoneyIcon/>, <ChartIcon/>,<ArticleIcon/>, <ProfileIcon />][index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Bitcoin', 'Ethereum', 'Ripple', 'Litecoin', 'Bitcoin Cash', 'EOS', 'Cardano', 'TRON', 'Stellar', 'Zcash'].map((text, index) => (
            <ListItem onClick={event => props.handleMenuClick(text)} button key={text}>
              <ListItemIcon >{[
                <Icon>
                  <img className={classes.imageIcon} alt="bitcoin" src={btc_icon}/>
                </Icon>,
                <Icon>
                  <img className={classes.imageIcon} alt="ethereum" src={eth_icon}/>
                </Icon>,
                <Icon>
                  <img className={classes.imageIcon} alt="ripple" src={xrp_icon}/>
                </Icon>,
                <Icon>
                  <img className={classes.imageIcon} alt="litecoin" src={ltc_icon}/>
                </Icon>,
                <Icon>
                  <img className={classes.imageIcon} alt="bitcoin cash" src={bch_icon}/>
                </Icon>,
                <Icon>
                  <img className={classes.imageIcon} alt="eos" src={eos_icon}/>
                </Icon>,
                <Icon>
                  <img className={classes.imageIcon} alt="cardano" src={ada_icon}/>
                </Icon>,
                <Icon>
                  <img className={classes.imageIcon} alt="tron" src={trx_icon}/>
                </Icon>,
                <Icon>
                  <img className={classes.imageIcon} alt="stellar" src={xlm_icon}/>
                </Icon>,
                <Icon>
                  <img className={classes.imageIcon} alt="zcash" src={zec_icon}/>
                </Icon>][index]}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <React.Fragment>
          <CssBaseline />
          <Container fixed>
            <Typography component="div" >
              {renderSwitch(props.appState.mainPage)}
            </Typography>
          </Container>
        </React.Fragment>
      </main>
    </div>
  );
}
