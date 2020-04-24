import React from 'react';

interface Props {}

const SearchBar: React.FC<Props> = () => {
  return (
    <div className="control has-icons-left has-icons-right">
      <input
        className="input is-medium"
        type="text"
        placeholder="Jeff Nippard..."
      />
      <span className="icon is-medium is-left">
        <i className="fas fa-search"></i>
      </span>
    </div>
  );
};
export default SearchBar;
