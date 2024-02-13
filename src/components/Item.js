export default function Item({ item, onRemoveItem, onToggleItem }) {
    return (
        <li>
            <button onClick={() => onToggleItem(item)}>
                {item.packed ? "✅" : "☑️"}
            </button>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.description} - {item.quantity}
            </span>
            <button onClick={() => onRemoveItem(item)}>✖️</button>
        </li>
    );
}
