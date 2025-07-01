import React, { useEffect, useRef } from "react";
import "./ByteRain.css";

const FONT_SIZE = 22;
const CHARACTERS = ["0", "1"];

const ByteRain = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.parentElement.offsetWidth;
    let height = canvas.parentElement.offsetHeight || 350;
    canvas.width = width;
    canvas.height = height;

    let columns = Math.floor(width / FONT_SIZE);
    let drops = Array(columns).fill(1);

    // Slow down the rain by updating only every N frames
    let frame = 0;
    const FRAME_SKIP = 6; // Higher = slower
    const DROP_SPEED = 0.25; // Fractional increment for smoothness

    function draw() {
      // No background fill, just clear the canvas
      ctx.clearRect(0, 0, width, height);
      ctx.font = `${FONT_SIZE}px 'Fira Mono', monospace`;
      ctx.shadowColor = "#00ff41";
      ctx.shadowBlur = 8;
      for (let i = 0; i < columns; i++) {
        const text = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        ctx.fillStyle = "#00ff41";
        ctx.fillText(text, i * FONT_SIZE, drops[i] * FONT_SIZE);
        if (
          drops[i] * FONT_SIZE > height && Math.random() > 0.975
        ) {
          drops[i] = 0;
        }
        drops[i] += DROP_SPEED;
      }
    }

    function animate() {
      frame++;
      if (frame % FRAME_SKIP === 0) {
        draw();
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight || 350;
      canvas.width = width;
      canvas.height = height;
      columns = Math.floor(width / FONT_SIZE);
      drops = Array(columns).fill(1);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="byte-rain-matrix-bg">
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default ByteRain; 