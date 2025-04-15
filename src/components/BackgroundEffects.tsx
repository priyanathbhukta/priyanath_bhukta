
import React, { useEffect, useState } from 'react';

const BackgroundEffects = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top right light orb */}
      <div 
        className="light-orb w-[400px] h-[400px] top-[-100px] right-[-100px]"
        style={{ opacity: 0.4 }}
      />
      
      {/* Bottom left light orb */}
      <div 
        className="light-orb w-[300px] h-[300px] bottom-[-50px] left-[-50px]"
        style={{ opacity: 0.3 }}
      />
      
      {/* Middle right light orb */}
      <div 
        className="light-orb w-[200px] h-[200px] top-[30%] right-[-50px]"
        style={{ opacity: 0.2 }}
      />
      
      {/* Middle left smaller light orb */}
      <div 
        className="light-orb w-[150px] h-[150px] top-[60%] left-[-30px]"
        style={{ opacity: 0.15 }}
      />
      
      {/* Center top glowing line */}
      <div 
        className="glow-line w-[60%] top-[15%] left-[20%]"
        style={{ animationDuration: '4s' }}
      />
      
      {/* Lower glowing line */}
      <div 
        className="glow-line w-[40%] bottom-[25%] right-[10%]"
        style={{ animationDuration: '6s' }}
      />
      
      {/* Light dots background */}
      <div className="light-dots" />
      
      {/* Rotating polygon */}
      <div className="rotating-polygon top-[20%] left-[15%]">
        <svg width="300" height="300" viewBox="0 0 100 100">
          <polygon 
            points="50,15 85,50 50,85 15,50" 
            fill="none" 
            stroke="rgba(0, 183, 195, 0.3)" 
            strokeWidth="0.5"
          />
        </svg>
      </div>
      
      {/* Another rotating polygon */}
      <div 
        className="rotating-polygon bottom-[15%] right-[10%]"
        style={{ animationDirection: 'reverse' }}
      >
        <svg width="200" height="200" viewBox="0 0 100 100">
          <polygon 
            points="50,10 90,50 50,90 10,50" 
            fill="none" 
            stroke="rgba(0, 183, 195, 0.2)" 
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default BackgroundEffects;
