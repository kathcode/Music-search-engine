import React, { useState, useEffect } from 'react';

// Components
import Search from '../components/Search';
import TrackList from '../components/TrackList';
import Loading from '../components/Loading';
import Pagination from '../components/Pagination';

import './Track.css';

const useSearchTrack = (track, page, limit) => {
  const [trackInfo, setTrackInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState();

  useEffect(() => {
    if (track) {
      setTrackInfo({});
      setIsLoading(true);
      const API_KEY = '8a4a34a1e367f02b72758958ef906e04';
      const url = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${track}&api_key=${API_KEY}&format=json&page=${page}&limit=${limit}`;

      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          setTrackInfo(data.results);
          setPagination({
            size: data.results['opensearch:totalResults'],
            limit: data.results['opensearch:itemsPerPage'],
          });
          console.log(data.results);
        })
        .catch(() => console.log('error...'))
        .finally(() => setIsLoading(false));
    }
  }, [track, page, limit]);

  return [trackInfo, isLoading, pagination];
};

const Tracks = () => {
  const [selectedTrack, setSelectedTrack] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [limitPerPage, setLimitPerPage] = useState(10);
  const [trackInfo, isLoading, pagination] = useSearchTrack(
    selectedTrack,
    currentPage,
    limitPerPage
  );

  const onPreviousPage = () => {
    const previous = currentPage - 1;
    if (previous >= 1) {
      setCurrentPage(previous);
    }
  };

  const onNextPage = (totalSize) => {
    const next = currentPage + 1;

    if (next <= totalSize) {
      setCurrentPage(next);
    }
  };

  return (
    <section className="track-search">
      <h1>Song search engine</h1>
      <Search onClick={(track) => setSelectedTrack(track)} />

      {/** Create a component to show the info */}
      {isLoading && <Loading />}

      {trackInfo.trackmatches && (
        <TrackList list={trackInfo.trackmatches.track} />
      )}

      {pagination && (
        <Pagination
          limit={pagination.limit}
          totalSize={pagination.size}
          currentPage={currentPage}
          onPreviousPage={onPreviousPage}
          onNextPage={() => onNextPage(pagination.size)}
          onSelectLimitPerPage={(limit) => setLimitPerPage(limit)}
        />
      )}
    </section>
  );
};

export default Tracks;
