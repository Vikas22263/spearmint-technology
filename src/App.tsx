import { useState } from 'react';
import './App.css';

function App() {
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const handleclick = (e) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    const offsetY = e.clientY - containerRect.top;
    
 
    const newPosition = {
      x: offsetX - 50, 
      y: offsetY - 50, 
    };

    setImagePosition(newPosition);
  };

  return (
    <div onClick={handleclick} style={{ position: 'relative', height: '100vh' }}>
      <img
        style={{
          width: '100px',
          height: '100px',
          position: 'absolute',
          left: `${imagePosition.x}px`, 
          top: `${imagePosition.y}px`,
          transition: ' 1s ease',
        }}
        src='/image/wizaart-img.56787174.gif'
        alt=""
      />
    </div>
  );
}

export default App;
