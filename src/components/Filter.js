import React from "react";

function Filter({ search, onSearchChange }) {
  return (
    <div className="Filter">
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Filter;
