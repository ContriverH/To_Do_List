import React, { useState } from "react";

function App() {
  const [listItem, setList] = useState([]);
  const [text, setText] = useState();

  function handleChange(event) {
    const val = event.target.value;
    setText(val);
  }

  function handleClick() {
    setList((preValue) => [...preValue, text]);
    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={text} />
        <button>
          <span onClick={handleClick}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItem.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
