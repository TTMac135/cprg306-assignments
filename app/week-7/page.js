"use client";
import { useState } from "react";
import Itemlist from "./item-list";
import Newitem2 from "./new-item";
import itemsData from './items.json';

export default function Page(){

  const [items, setItems] = useState(itemsData);

  const handleAddItem = (Newitem2) => {setItems([...items, Newitem2])};

  return (
    <main className="bg-slate-950">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <Newitem2 onAddItem={handleAddItem} />
      <Itemlist items={items}/>
    </main>
  )
}