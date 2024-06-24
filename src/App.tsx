import React, { useState } from 'react';
import './App.css';

function App() {
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const newPosition = {
      x: event.clientX - 50,
      y: event.clientY - 50,
    };
    setImagePosition(newPosition);
  };

  return (
    <div onClick={handleClick} style={{ position: 'relative', height: '100vh' }}>
      <img
        style={{
          width: '100px',
          height: '100px',
          position: 'absolute',
          left: `${imagePosition.x}px`,
          top: `${imagePosition.y}px`,
        }}
        src={process.env.PUBLIC_URL + '/image/wizaart-img.56787174.gif'}
        alt=""
      />
    </div>
  );
}

export default App;
