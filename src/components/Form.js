import React, { useState } from "react";

export default function Form({ items, onAddItem }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [quantityError, setQuantityError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submitted!");
        if (quantity === 0) {
            setQuantityError(true);
            setTimeout(() => {
                setQuantityError(false);
            }, 1000);
            return;
        } else if (description.trim() === "" || /\d/.test(description)) {
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
            id: items.length + 1,
        };
        console.log(newItem);

        onAddItem(newItem);

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
