import React from 'react';

type SearchBarProps = {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
}

export default SearchBar;
