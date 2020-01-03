import React from 'react';

const TrackList = ({ list }) => (
  <div>
    {list.map(track => (
      <div key={track.listeners}>{track.name}</div>
    ))}
  </div>
);

export default TrackList