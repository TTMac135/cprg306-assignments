"use client";
import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  
  const [sortBy, setSortBy] = useState("name");
  const itemArray = [...items];

  itemArray.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } 

    else if (sortBy === "category") 
    {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });
    
  const handleNameSort = () => setSortBy("name");
  const handleCategorySort = () => setSortBy("category");

  const NameSorted = sortBy === "name";
  const CategorySorted = sortBy === "category";

  return(        
    <main>
      <div>
        <label>Sort by:</label>
        <button onClick={handleNameSort} className={`bg-orange-500 hover:bg-orange-700 p-1 m-2 w-28 ${NameSorted}`}>Name</button>
        <button onClick={handleCategorySort} className={`bg-orange-500 hover:bg-orange-700 p-1 m-2 w-28 ${CategorySorted}`}>Category</button>
      </div>

      <section>
        {itemArray.map((item) => (<Item item={item} key={item.id} />))}
      </section>
    </main>
  )
}