import React from 'react';

import CardStyled from '../../shared/components/card';
import Grid from '@material-ui/core/Grid';

const TrackList = ({ list }) => (
  <Grid container spacing={3}>
    {list.map((track) => (
      <CardStyled track={track} />
    ))}
  </Grid>
);

export default TrackList;
