import React from 'react';
import SearchBar from '@theme-original/SearchBar';

export default function SearchBarWrapper(props) {
  return (
    <div className="DocSearch-Trigger">
      <SearchBar {...props} />
    </div>
  );
}
