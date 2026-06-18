import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';

// Failsafe helper to detect WebGL support
const detectWebGL = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
};

export default function Canvas3D({ children, fallbackType = 'stars', ...props }) {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const webglSupported = detectWebGL();
    setHasWebGL(webglSupported);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-transparent">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-cyber-primary/20 animate-ping"></div>
          <div className="absolute inset-0 rounded-full border-t-4 border-cyber-secondary animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!hasWebGL) {
    // Elegant animated SVG/CSS 2D fallback matching the portfolio's aesthetics
    return (
      <div className="webgl-fallback relative w-full h-full min-h-[400px] overflow-hidden flex flex-col items-center justify-center px-4 rounded-2xl glass-panel">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-cyan-950/10 to-transparent"></div>
        
        {/* Floating CSS backup circles */}
        <div className="absolute w-[200px] h-[200px] rounded-full bg-cyber-primary/10 blur-[80px] top-10 left-10 animate-pulse-slow"></div>
        <div className="absolute w-[250px] h-[250px] rounded-full bg-cyber-secondary/10 blur-[90px] bottom-10 right-10 animate-pulse-slow delay-2000"></div>

        {fallbackType === 'stars' ? (
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Elegant SVG Constellation Fallback */}
            <svg className="w-24 h-24 text-cyber-secondary animate-glow-pulse mb-6" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="50" cy="50" r="3" fill="currentColor"/>
              <circle cx="20" cy="30" r="2" fill="currentColor"/>
              <circle cx="80" cy="25" r="2.5" fill="currentColor"/>
              <circle cx="75" cy="70" r="3" fill="currentColor"/>
              <circle cx="25" cy="75" r="2" fill="currentColor"/>
              <line x1="20" y1="30" x2="50" y2="50" strokeDasharray="3,3" />
              <line x1="80" y1="25" x2="50" y2="50" strokeDasharray="3,3" />
              <line x1="75" y1="70" x2="50" y2="50" strokeDasharray="3,3" />
              <line x1="25" y1="75" x2="50" y2="50" strokeDasharray="3,3" />
              <line x1="20" y1="30" x2="25" y2="75" strokeOpacity="0.3" />
              <line x1="80" y1="25" x2="75" y2="70" strokeOpacity="0.3" />
            </svg>
            <h4 className="text-xl font-semibold font-mono text-gradient-purple-cyan mb-2">Procedural Hologram Active</h4>
            <p className="text-sm text-cyber-muted max-w-[280px] leading-relaxed">
              Visual elements optimized for your device browser.
            </p>
          </div>
        ) : (
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Elegant 3D Monitor / Workstation Fallback */}
            <svg className="w-24 h-24 text-cyber-primary animate-glow-pulse mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="3" width="20" height="13" rx="2" />
              <path d="M9 21h6" />
              <path d="M12 16v5" />
              <circle cx="12" cy="9" r="2" className="animate-ping origin-center" />
              <path d="M6 7h4" strokeOpacity="0.5"/>
              <path d="M6 10h3" strokeOpacity="0.5"/>
            </svg>
            <h4 className="text-xl font-semibold font-mono text-gradient-pink-purple mb-2">Interactive Workstation Ready</h4>
            <p className="text-sm text-cyber-muted max-w-[280px] leading-relaxed">
              Projects rendering optimized in responsive high-fidelity layout.
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <Canvas {...props}>
      {children}
    </Canvas>
  );
}
