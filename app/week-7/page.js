"use client";

import { useState } from "react";
import NewGroceryItem from "./NewGroceryItem";
import GroceryItemList from "./Groceryitemlist";
import itemsData from "./grocery-items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    function handleAddItem(newItem) {
        setItems([...items, newItem]);
}

    return (
        <main className="min-h-screen bg-white p-10 flex flex-col gap-8">
            <h1 className="text-4xl font-bold text-black">Week 7 — Shopping List</h1>
            <NewGroceryItem onAddItem={handleAddItem} />
            <GroceryItemList items={items} />
        </main>
    );
}