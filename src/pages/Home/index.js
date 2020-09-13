import React, { useEffect, useState } from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';

import CardStyled from '../../shared/components/card';

import './Home.css';

const Home = () => {
  const [popularSongs, setPopularSongs] = useState([]);
  useEffect(() => {
    const API_KEY = '8a4a34a1e367f02b72758958ef906e04';
    const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`;

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setPopularSongs(data.tracks.track.slice(0, 10));
      })
      .catch(() => console.log('error...'));
  }, []);
  return (
    <div className="home">
      <h2>Top 10 songs</h2>
      <Grid container spacing={3}>
        {popularSongs.map((song) => (
          <CardStyled track={song} />
        ))}
      </Grid>
    </div>
  );
};

export default Home;
