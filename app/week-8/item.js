import React from "react";

export default function Item ({item, onSelect}) {

    const handleItemClick = () => {
        onSelect(item);
    };

    return(
        <main className="font-bold px-2 py-2 w-96 text-black bg-green-400 
        border-2 border-black m-4 rounded hover:bg-green-700"
        onClick={handleItemClick}>
            
            <h1>{item.name}</h1>
            <p>buy {item.quantity} in {item.category}</p>
        </main>
    );
}