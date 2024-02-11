import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentColor, setCurrentColor] = useState('#FFFFFF'); // Initial color is white
  const [grid, setGrid] = useState(createGrid(200, 220)); // Initial grid size

  // Function to create initial grid
  function createGrid(rows, cols) {
    const initialGrid = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push('#FFFFFF'); // Initial color of each square is white
      }
      initialGrid.push(row);
    }
    return initialGrid;
  }

  // Function to handle click on a square
  function handleSquareClick(row, col) {
    const newGrid = [...grid];
    newGrid[row][col] = currentColor;
    setGrid(newGrid);
  }

  // Function to handle color selection
  function handleColorChange(color) {
    setCurrentColor(color);
  }

  // Updated color palette with more colors
  const colors = [
    '#FFFFFF',
    '#000000',
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#FF00FF',
    '#00FFFF',
    '#FFA500',
    '#008000',
    '#800080',
    '#FFC0CB',
    '#00FF7F',
    '#C0C0C0',
    '#800000',
    '#FFFF99',
    '#660066',
    '#FF99CC',
    '#808000',
    '#808080',
  ];

  const colorPalette = colors.map((color, index) => (
    <div
      key={index}
      className="color"
      style={{ backgroundColor: color }}
      onClick={() => handleColorChange(color)}
    ></div>
  ));

  return (
    <div className="App">
      <div className="canvas">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className="cell"
                style={{ backgroundColor: cell }}
                onClick={() => handleSquareClick(rowIndex, colIndex)}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <div className="palette-container">
        <div className="palette">{colorPalette}</div>
      </div>
    </div>
  );
}

export default App;
