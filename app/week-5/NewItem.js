"use client";

import { useState } from "react";

function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function handleSubmit(event) {
        event.preventDefault();

        const item = { name, quantity, category };
        console.log(item);
        alert(`Added: ${name}, Quantity: ${quantity}, Category: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    function handleDecrement() {
        if (quantity > 1) setQuantity(quantity - 1);
    }

    function handleIncrement() {
        if (quantity < 20) setQuantity(quantity + 1);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl w-full bg-white border border-gray-200 p-8 flex flex-col gap-6"
        >
            {/* Item Name */}
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-base font-medium text-gray-800">
                    Item Name
                </label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="e.g., milk, 4 L 🥛"
                    className="w-full p-4 rounded-xl border border-gray-800 text-gray-400 text-base focus:outline-none focus:ring-2 "
                />
            </div>

            {/* Quantity */}
            <div className="flex flex-col gap-2">
                <label className="text-base font-medium text-gray-800">
                    Quantity (1–20)
                </label>
                <p className="text-base text-gray-500">
                    Current: <span className="font-bold text-black text-lg">{quantity}</span>
                </p>
                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={handleDecrement}
                        disabled={quantity <= 1}
                        className="w-16 h-16 rounded-xl bg-gray-100 hover:bg-gray-200 disabled:opacity-40 text-gray-700 text-2xl font-bold transition"
                    >
                        −
                    </button>
                    <button
                        type="button"
                        onClick={handleIncrement}
                        disabled={quantity >= 20}
                        className="w-16 h-16 rounded-xl bg-blue-500 hover:bg-blue-600 disabled:opacity-40 text-white text-2xl font-bold transition"
                    >
                        +
                    </button>
                </div>
                <p className="text-sm text-gray-400">Allowed range: 1–20</p>
            </div>

            {/* Category */}
            <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-base font-medium text-gray-800">
                    Category
                </label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-4 rounded-xl border border-gray-800 text-gray-800 text-base bg-white focus:outline-none focus:ring-2 "
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-36 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white text-base font-semibold transition"
            >
                Add Item
            </button>
        </form>
    );
}

export default NewItem;