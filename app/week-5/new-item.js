"use client";
import { useState } from "react";

export default function NewItem() {

  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const Items = {
      name,
      quantity,
      category,
    };

    console.log(Items);

    alert(`Added item: ${name}, Quantity: ${quantity}, Category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("Produce");

  }

  const increment = (event) => {
    event.preventDefault();
    setQuantity(quantity + 1);
  }

  const decrement = (event) => {
    event.preventDefault();
    setQuantity(quantity - 1);
  }

  let btnStyles = "bg-blue-600 text-white rounded px-3 mr-2 hover:bg-blue-400 active:bg-yellow-500 disabled:bg-gray-400"


  return (
    <main className="inline-flex items-center justify-center bg-slate-900">
      <form className="max-w-md p-4" onSubmit={handleSubmit}>
        <div>
          <input type="text"
            value={name}
            onChange={(nameChange) => setName(nameChange.target.value)}
            placeholder="Item Name"
            required
            className="text-black border rounded py-2 px-3 mb-4 w-full "
          />

          <div className="flex items-center mb-4">
            <div className="flex text-black bg-white p-2 w-36 rounded mr-4">
              <p className="mr-10">{quantity}</p>
              <button className={btnStyles} onClick={increment} disabled = {quantity >= 20}>+</button>
              <button className={btnStyles} onClick={decrement} disabled = {quantity <= 1}>-</button>
            </div>

            <select type='text' 
              value={category} 
              onChange={(categoryChange) => setCategory(categoryChange.target.value)}
              className="text-black border rounded w-half py-2 px-3"
              required> 
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen">Frozen Foods</option>
                <option value="Canned">Canned Goods</option>
                <option value="Dry">Dry Goods</option> 
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <button className="bg-blue-500 text-white font-bold rounded w-full py-2 px-3 leading-tight" type="submit">+</button>
          </div>
        </div>
      </form>
    </main>
  );
};