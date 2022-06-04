import { React, useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!newItem) {
      alert("Please add an item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 10000),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  };

  const deleteItem = (id) => {
    console.log(id);
    const newList = items.filter((item) => item.id !== id);
    setItems(newList);
  };

  return (
    <div className="App">
      <h1>To Do</h1>
      <div className="list-container">
        <div className="add-input">
          <input
            type="text"
            placeholder="Add to list..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button onClick={addItem}>Add</button>
        </div>
        <div className="list-item-container">
          <ul>
            {items.map((item, i) => {
              return (
                <li className="item " key={i}>
                  {item.value}
                  <button onClick={() => deleteItem(item.id)}>Delete</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
