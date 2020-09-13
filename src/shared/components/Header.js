import React from 'react';
import { Link } from '@reach/router';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={3}>
          <Grid item xs={1}>
            <Typography variant="h6">Musik</Typography>
          </Grid>
          <Grid
            item
            xs={11}
            container
            direction="row"
            alignItems="center"
            justify="center"
          >
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/tracks">
              Search song
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
