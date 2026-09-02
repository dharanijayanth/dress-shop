import React from 'react';

export default function CatalogToolbar({ currentFilter, onFilterChange, searchQuery, onSearchChange, sortBy, onSortChange }) {
  return (
    <div className="catalog-toolbar">
      <div className="filter-tabs">
        <button
          className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          All Items
        </button>
        <button
          className={`filter-btn ${currentFilter === 'Traditional Wear' ? 'active' : ''}`}
          onClick={() => onFilterChange('Traditional Wear')}
        >
          Traditional Wear
        </button>
        <button
          className={`filter-btn ${currentFilter === 'Casual Wear' ? 'active' : ''}`}
          onClick={() => onFilterChange('Casual Wear')}
        >
          Casual Wear
        </button>
      </div>

      <div className="toolbar-search-sort">
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search dresses..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search dresses"
          />
        </div>

        <select
          className="sort-select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          aria-label="Sort products"
        >
          <option value="default">Sort by: Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>
    </div>
  );
}
