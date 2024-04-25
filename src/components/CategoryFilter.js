import React from "react";

function CategoryFilter({ categories, onSelectCategory }) {
  const handleClick = (category) => {
    onSelectCategory(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button key={category} onClick={() => handleClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
