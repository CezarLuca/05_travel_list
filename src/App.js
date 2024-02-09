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
    return (
        <div className="add-form">
            <h3>What do you need for your ✈️ trip?</h3>
        </div>
    );
}

function PackingList() {
    return (
        <div className="list">
            <h3>List</h3>
        </div>
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
