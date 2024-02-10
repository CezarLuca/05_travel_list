import { useState } from "react";

const initialItems = [
    { id: 1, description: "Passports", quantity: 1, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Underwear", quantity: 12, packed: false },
    { id: 4, description: "Headphones", quantity: 2, packed: false },
    { id: 5, description: "Charger", quantity: 1, packed: true },
    { id: 6, description: "Laptop", quantity: 1, packed: true },
    { id: 7, description: "T-shirts", quantity: 7, packed: false },
    { id: 8, description: "Pants", quantity: 1, packed: false },
    { id: 13, description: "Toothbrush", quantity: 1, packed: false },
    { id: 14, description: "Toothpaste", quantity: 1, packed: false },
    { id: 15, description: "Shampoo", quantity: 1, packed: false },
    { id: 17, description: "Sunscreen", quantity: 1, packed: false },
    { id: 20, description: "Sunglasses", quantity: 1, packed: false },
    { id: 21, description: "Hat", quantity: 1, packed: false },
    { id: 22, description: "Beach Towel", quantity: 2, packed: true },
    { id: 23, description: "Sandals", quantity: 1, packed: false },
    { id: 24, description: "Shorts", quantity: 2, packed: false },
];

export default function App() {
    return (
        <div className="app">
            <Logo />
            <Form />
            <PackingList />
            <Stats />
        </div>
    );
}

function Logo() {
    return <h1>🌴 Far Away 🧳</h1>;
}

function Form() {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [quantityError, setQuantityError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submitted!");
        if (quantity === 0) {
            // alert("Please select the amount");
            setQuantityError(true);
            setTimeout(() => {
                setQuantityError(false);
            }, 1000);
            return;
        } else if (description.trim() === "") {
            // alert("Please enter a description");
            setDescriptionError(true);
            setTimeout(() => {
                setDescriptionError(false);
            }, 1000);
            return;
        }

        const newItem = {
            description,
            quantity,
            packed: false,
            id: initialItems.length + 1,
        };
        console.log(newItem);

        setDescription("");
        setQuantity(0);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your ✈️ trip?</h3>
            <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className={quantityError ? "error" : ""}
            >
                {Array.from({ length: 20 }, (_, i) => i).map((num) => (
                    <option value={num} key={num}>
                        {num === 0 ? "Select the amount..." : num}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Item description"
                value={description}
                onChange={(e) => {
                    console.log(e.target.value);
                    setDescription(e.target.value);
                }}
                className={descriptionError ? "error" : ""}
            />
            <button>Add</button>
        </form>
    );
}

function PackingList() {
    return (
        <div className="list">
            <ul>
                {initialItems.map((item) => (
                    <Item item={item} key={item.id} />
                ))}
            </ul>
        </div>
    );
}

function Item({ item }) {
    return (
        <li>
            <button>{item.packed ? "✅" : "☑️"}</button>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.description} - {item.quantity}
            </span>
        </li>
    );
}

function Stats() {
    return (
        <footer className="stats">
            <em>
                🧳 You have X items in your list. And you already packed Y (Z%).
            </em>
        </footer>
    );
}
