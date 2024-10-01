"use client";
import { useState } from "react";

export default function NewItem() {

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  }

  const decrement = () => {
    setQuantity(quantity - 1);
  }

  let btnStyles = "bg-blue-600 text-white rounded px-3 mr-2 hover:bg-blue-400 active:bg-yellow-500 disabled:bg-gray-400"


  return (
    <div className="flex mt-4 p-2 w-36 text-black bg-white">
      <p className="mr-10">{quantity}</p>
      <button className={btnStyles} onClick={increment} disabled = {quantity >= 20}>+</button>
      <button className={btnStyles} onClick={decrement} disabled = {quantity <= 1}>-</button>
    </div>
  );

};