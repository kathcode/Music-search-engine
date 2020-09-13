import React, { useState } from 'react';

// Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';

const Search = ({ onClick }) => {
  const [text, setText] = useState('');

  return (
    <React.Fragment>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="standard-basic"
            label="Search a song here..."
          />
        </Grid>
        <Grid item>
          <Button
            onClick={() => onClick(text)}
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Search;
