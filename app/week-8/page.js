"use client";
import { useState } from "react";
import Link from "next/link";
import Itemlist from "./item-list";
import Newitem2 from "./new-item";
import itemsData from './items.json';
import MealList from "./meal-ideas";



export default function Mainshoppingpage(){

    //initializing a variable named items from the data from the json file
    const [items, setItems] = useState(itemsData);
    //state variable for selected items
    const [selectedItemName, setSelectedItemName] = useState("");

    //event handler to add a new item to "items" in the existing array
    const handleAddItem = (Newitem2) => {setItems([...items, Newitem2])};


    //event handler for the selected items
    const handleItemSelect = (selectedItemName) => {
        //clean up selected item name
        const cleanedName = selectedItemName.name.split(",")[0].trim();
        setSelectedItemName(cleanedName);
    };

    return(
        <main>
            <font size = "10"><h1>SHOPPING LIST: </h1></font>
                <font size="5"><h2 className="font-bold pl-2">Add A New Item</h2></font>
                {/*uses the event handler into the newitem2*/}    
                <Newitem2 onAddItem={(item) => handleAddItem(item)} />

            <div className="flex">

                {/*the items from the handler get passed here into the Itemlist*/}
                <Itemlist items={items} onItemsSelect={handleItemSelect}/>

                <div >
                <MealList ingredient={selectedItemName}/>
                </div>
            </div>
            
            

            <button className="font-bold 
                px-7 py-2 
                text-black 
                bg-blue-700 
                border-2 border-black m-4 rounded 
                hover:bg-blue-500">
                <p><Link href ="../">Go Back</Link></p>
            </button>
            
        </main>

    )
}