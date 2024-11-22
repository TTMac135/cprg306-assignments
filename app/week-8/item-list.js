import itemsData from './items.json';
import { useState } from "react";
import Item from '../week-7/item';


export default function Itemlist({items}){

  //state variable
  const [sortBy, setSortBy] = useState("name");

  //sort the items into a new array
  const itemArray = [...items]; // essentially Makes a copy of the itemsData array.

  // Sort the items array based on the sortBy state variable
  itemArray.sort((a, b) => {

    //if sortby == name then true and compares a to b returning true displaying a sorting of names
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } 

    //if sortby == category then true and compares a to b returning true displaying a sorting of the category
    else if (sortBy === "category") 
    {
      return a.category.localeCompare(b.category);
    }

    //still working on this one
    else if (sortBy === "grouped")
    {
      return a.grouped.localeCompare(b.grouped);
    }

    //if it matches to 0 it keeps them in its original place unchanged
    return 0;
  });
    
  //Create Sort Buttons and handle sorting
  const handleNameSort = () => setSortBy("name");
  const handleCategorySort = () => setSortBy("category");
  //const handleGroupedSort = () => setSortBy("grouped");

  //creating the sort buttons, quick side note triple === sign is a comparison between the data type and value for the if statements
  const NameSorted = sortBy === "name";
  const CategorySorted = sortBy === "category";
  //const GroupedSorted = sortBy === "grouped";

  //^^^^^^^^^^^^ both sorts are essential in order dor the buttons to work with the sorting associated with it

  //so you can view in the console of what you have, in this case the array from the json file
  //console.log(itemArray);

  return(        
    <main>

      <div>
        <label className="pl-2">Sort by:</label>
        <button onClick={handleNameSort} className={`bg-orange-500 hover:bg-orange-700 p-1 m-2 w-28 ${NameSorted}`}>Name</button>
        <button onClick={handleCategorySort} className={`bg-orange-500 hover:bg-orange-700 p-1 m-2 w-28 ${CategorySorted}`}>Category</button>
        {/*<button onClick={handleGroupedSort} className={`bg-orange-500 hover:bg-orange-700 p-1 m-2 w-28 ${GroupedSorted}`}>Grouped</button> */}
      </div>

      <section>
        {itemArray.map((item) => (<Item item={item} key={item.id} />))}
      </section>

    </main>
  )
  //When the button is clicked, it will trigger the handleNameSort function(event handler)
  //uses the if methods to help sort using truth values and determines whether to include it or not
        
  //the itemArray creates react components for each item, with the props "item" and "key"
}