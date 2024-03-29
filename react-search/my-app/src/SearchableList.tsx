import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Items from './Items';

type ItemProp = {
  items: string[];
}

function SearchableList({ items }: ItemProp) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setSearchTerm(event.target.value);
  };

  const filteredItems = filterItems(items, searchTerm);

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <Items items={filteredItems} />
    </div>
  );
}

function filterItems(items: string[], searchTerm: string): string[] {

  return items.filter(
    (
      item: string
    ) => item.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

export default SearchableList;
