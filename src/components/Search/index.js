import React, { useState } from 'react';

const Search = ({ onClick }) => {
  const [text, setText] = useState('');

  return (
    <React.Fragment>
      <input
        placeholder="Search here..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => onClick(text)}>Search</button>
    </React.Fragment>
  );
};

export default Search;
