import React from 'react';

import PlayIcon from '../../images/play.png';

const TrackList = ({ list }) => (
  <div>
    {list.map(track => (
      <div key={track.listeners}>
        <img width="30" src={PlayIcon} alt="Artist" />
        <a
          href={track.url}
          title={track.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.name} - {track.artist}
        </a>
      </div>
    ))}
  </div>
);

export default TrackList