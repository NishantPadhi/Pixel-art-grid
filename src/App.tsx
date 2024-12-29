import React, { useState } from "react";
import "./styles.css";
import Grid from "./Grid";

const row = 15,
  col = 12;

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState([]);

  const handleClick = (e) => {
    const id = e?.target?.getAttribute("id");
    if (!selectedIndex.includes(id)) {
      setSelectedIndex([...selectedIndex, id]);
    } else {
      const filteredArray = selectedIndex.filter((index) => index !== id);
      setSelectedIndex(filteredArray);
    }
  };

  const handleDrag = (e) => {
    const id = e?.target?.getAttribute("id");
    if (!selectedIndex.includes(id)) {
      setSelectedIndex([...selectedIndex, id]);
    }
  };

  const handleClear = () => {
    setSelectedIndex([]);
  };

  return (
    <div className="App">
      <div
        onClick={handleClick}
        onDragStart={handleDrag}
        onDragOver={handleDrag}
        onDragEnd={handleDrag}
      >
        {[...Array(row)].map((_, rowIndex) => {
          return (
            <div style={{ display: "flex" }} key={`id-${rowIndex}`}>
              {[...Array(col)].map((_, colIndex) => {
                const key = `${rowIndex}-${colIndex}`;
                return (
                  <div key={key}>
                    <Grid isSelected={selectedIndex.includes(key)} id={key} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <button
        className="btn"
        disabled={!selectedIndex.length}
        style={
          !selectedIndex.length
            ? { cursor: "not-allowed" }
            : { cursor: "pointer" }
        }
        onClick={handleClear}
      >
        Reset
      </button>
    </div>
  );
}
