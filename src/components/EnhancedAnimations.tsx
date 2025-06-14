
import { useEffect, useState } from 'react';

const MatrixRain = () => {
  const [matrix, setMatrix] = useState<string[][]>([]);
  
  useEffect(() => {
    const chars = '0123456789ABCDEFアイウエオカキクケコ';
    const cols = Math.floor(window.innerWidth / 20);
    const rows = Math.floor(window.innerHeight / 20);
    
    const initMatrix = () => {
      const newMatrix = [];
      for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
          row.push(Math.random() > 0.95 ? chars[Math.floor(Math.random() * chars.length)] : '');
        }
        newMatrix.push(row);
      }
      return newMatrix;
    };

    setMatrix(initMatrix());

    const interval = setInterval(() => {
      setMatrix(prevMatrix => {
        const newMatrix = [...prevMatrix];
        // Move characters down
        for (let j = 0; j < cols; j++) {
          for (let i = rows - 1; i > 0; i--) {
            newMatrix[i][j] = newMatrix[i - 1][j];
          }
          // Add new character at top
          newMatrix[0][j] = Math.random() > 0.98 ? chars[Math.floor(Math.random() * chars.length)] : '';
        }
        return newMatrix;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
      <div className="relative w-full h-full">
        {matrix.map((row, i) =>
          row.map((char, j) => (
            <span
              key={`${i}-${j}`}
              className="absolute text-cyan-400 text-sm font-mono"
              style={{
                left: j * 20,
                top: i * 20,
                opacity: char ? 1 : 0,
                transition: 'opacity 0.1s'
              }}
            >
              {char}
            </span>
          ))
        )}
      </div>
    </div>
  );
};

const FloatingElements = () => {
  const elements = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animation: `float ${element.duration}s ease-in-out infinite`,
            animationDelay: `${element.delay}s`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

const EnhancedAnimations = () => {
  return (
    <>
      <MatrixRain />
      <FloatingElements />
    </>
  );
};

export default EnhancedAnimations;
