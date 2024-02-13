export default function Stats({ items }) {
    if (items.length === 0) {
        return (
            <footer className="stats">
                <em>No items in your list. Start adding some ⏱️😅</em>
            </footer>
        );
    }
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentagePacked = Math.round((numPacked / numItems) * 100);

    return (
        <footer className="stats">
            <em>
                {percentagePacked === 100
                    ? "All done! Ready to go! 🎉👏🏻🎉"
                    : `🧳 You have ${numItems} items in your list. And you already
                packed ${numPacked} (${percentagePacked}% of total).`}
            </em>
        </footer>
    );
}
