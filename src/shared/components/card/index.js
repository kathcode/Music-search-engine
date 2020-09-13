import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const CardStyled = ({ track }) => {
  return (
    <Grid item md={4}>
      <Card className="card">
        <Grid container spacing={3}>
          <Grid item md={3}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              image={track.image[0]['#text']}
              title="Contemplative Reptile"
            />
          </Grid>
          <Grid item md={9}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <span className="long-text">{track.name}</span>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Artist: {track.artist.name || track.artist}
              </Typography>
              <a href={track.url}>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon />
                </IconButton>
              </a>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default CardStyled;
