import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
    { id: 1, description: "Passports", quantity: 1, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Underwear", quantity: 12, packed: false },
    { id: 4, description: "Headphones", quantity: 2, packed: false },
    { id: 5, description: "Charger", quantity: 1, packed: false },
    { id: 6, description: "Laptop", quantity: 1, packed: false },
    { id: 7, description: "T-shirts", quantity: 7, packed: false },
    { id: 8, description: "Pants", quantity: 1, packed: false },
    { id: 13, description: "Toothbrush", quantity: 1, packed: false },
    { id: 14, description: "Toothpaste", quantity: 1, packed: false },
    { id: 15, description: "Shampoo", quantity: 1, packed: false },
    { id: 17, description: "Sunscreen", quantity: 1, packed: false },
    { id: 20, description: "Sunglasses", quantity: 1, packed: false },
    { id: 21, description: "Hat", quantity: 1, packed: false },
    { id: 22, description: "Beach Towel", quantity: 2, packed: false },
    { id: 23, description: "Sandals", quantity: 1, packed: false },
    { id: 24, description: "Shorts", quantity: 2, packed: false },
];

export default function App() {
    const [items, setItems] = useState(initialItems);

    function handleAddItem(newItem) {
        const existingItem = items.find(
            (item) => item.description === newItem.description
        );

        if (existingItem) {
            setItems(
                items.map((item) => {
                    if (item.description === newItem.description) {
                        return {
                            ...item,
                            quantity: item.quantity + newItem.quantity,
                        };
                    }
                    return item;
                })
            );
        } else {
            setItems((previousItems) => [...previousItems, newItem]);
        }
    }

    function handleRemoveItem(item) {
        console.log("Removing item", item);
        setItems((previousItems) =>
            previousItems
                .filter((i) => i.id !== item.id)
                .map((i, index) => ({ ...i, id: index + 1 }))
        );
    }

    function handleToggleItem(item) {
        setItems(
            items.map((i) => {
                if (i.id === item.id) {
                    return { ...i, packed: !i.packed };
                }
                return i;
            })
        );
    }

    function handleClearOrResetList(ClearOrReset) {
        if (ClearOrReset === "clear") {
            const confirmClear = window.confirm(
                "Are you sure you want to clear the list?"
            );
            if (confirmClear) {
                setItems([]);
            }
        } else if (ClearOrReset === "reset") {
            const confirmReset = window.confirm(
                "Are you sure you want to reset the list?"
            );
            if (confirmReset) {
                setItems(initialItems);
            }
        }
    }

    return (
        <div className="app">
            <Logo />
            <Form items={items} onAddItem={handleAddItem} />
            <PackingList
                items={items}
                onRemoveItem={handleRemoveItem}
                onToggleItem={handleToggleItem}
                onClearOrResetList={handleClearOrResetList}
            />
            <Stats items={items} />
        </div>
    );
}
