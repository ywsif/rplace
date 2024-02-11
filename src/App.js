import React from 'react';
import './App.css';

function App() {
  const gridSize = 32; // You can adjust the grid size here
  const totalSquares = gridSize * gridSize;

  const renderMiniSquares = () => {
    const miniSquares = [];
    for (let i = 0; i < totalSquares; i++) {
      miniSquares.push(<div className="mini-square" key={i}></div>);
    }
    return miniSquares;
  };

  return (
    <div className="App">
      <div className="grid">
        {renderMiniSquares()}
      </div>
    </div>
  );
}

export default App;
