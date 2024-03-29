import React, { useState } from "react";
import Item from "./Item";

export default function PackingList({
    items,
    onRemoveItem,
    onToggleItem,
    onClearOrResetList,
}) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems = [];
    if (sortBy === "input") {
        sortedItems = items;
    } else if (sortBy === "description") {
        sortedItems = items
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));
    } else if (sortBy === "packed") {
        sortedItems = items
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));
    }

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item
                        item={item}
                        onRemoveItem={onRemoveItem}
                        onToggleItem={onToggleItem}
                        key={item.description + item.quantity}
                    />
                ))}
            </ul>
            <div className="actions">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort alphabetically</option>
                    <option value="packed">Sort by packing status</option>
                </select>
                <button onClick={() => onClearOrResetList("clear")}>
                    Clear List
                </button>
                <button onClick={() => onClearOrResetList("reset")}>
                    Reset List
                </button>
            </div>
        </div>
    );
}
