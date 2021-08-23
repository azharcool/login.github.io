import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={() => {history.push('/')}} >
            Lenovo 
          </Button>
          <Button onClick={() => {history.push('/home')}} color="inherit">Home</Button>
          <Button onClick={() => {history.push('/about')}} color="inherit">About Us</Button>
          <Button onClick={() => {history.push('/contact')}} color="inherit">Contact</Button>
          <Button onClick={() => {history.push('/Account')}} color="inherit">Account</Button>

        </Toolbar>
      </AppBar>
    </div>
  )
};
export default Header;
