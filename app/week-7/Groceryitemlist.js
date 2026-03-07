"use client";

import { useState } from "react";
import GroceryItem from "./Groceryitem";

export default function GroceryItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) =>
        a[sortBy].localeCompare(b[sortBy])
    );

    return (
        <div className="w-full max-w-xl flex flex-col gap-4">
            {/* Sort Controls */}
            <div className="flex items-center gap-3">
                <span className="text-gray-500 text-base">Sort by:</span>
                <button
                    onClick={() => setSortBy("name")}
                    className={`px-5 py-2 rounded-lg text-base font-medium transition ${sortBy === "name"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                >
                    Name
                </button>
                <button
                    onClick={() => setSortBy("category")}
                    className={`px-5 py-2 rounded-lg text-base font-medium transition ${sortBy === "category"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                >
                    Category
                </button>
            </div>

            {/* Item Cards */}
            <div className="flex flex-col gap-3">
                {sortedItems.map((item) => (
                    <GroceryItem
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
                {sortedItems.length === 0 && (
                    <p className="text-gray-400 text-center py-6">No items yet. Add one above!</p>
                )}
            </div>
        </div>
    );
}