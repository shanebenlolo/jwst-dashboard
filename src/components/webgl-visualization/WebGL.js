import React, { useEffect, useRef, useState } from "react";
import { initWebGL } from "../../initWebGL/main";
import { drawScene } from "../../initWebGL/drawScene";
import ReactSlider from "react-slider";
import "./webgl.css";

let gl, programInfo, buffers, texture;

export function WebGL() {
  const canvasRef = useRef(null);

  const [currentAnimationId, setCurrentAnimationId] = useState(null);
  const [spinRate, setSpinRate] = useState(0);

  useEffect(() => {
    [gl, programInfo, buffers, texture] = initWebGL(canvasRef);
  }, []);

  useEffect(() => {
    cancelAnimationFrame(currentAnimationId);
    const animationId = requestAnimationFrame(render);
    setCurrentAnimationId(animationId);
  }, [spinRate]);

  // Draw the scene repeatedly
  let then = 0;
  function render(now) {
    now *= spinRate;
    const deltaTime = now - then;
    then = now;

    drawScene(gl, programInfo, buffers, texture, deltaTime);

    const animationId = requestAnimationFrame(render);
    setCurrentAnimationId(animationId);
  }

  return (
    <>
      <ReactSlider
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        onChange={(value, thumbIndex) => setSpinRate(value / 10000)}
      />
      <br />
      <canvas ref={canvasRef} width="640" height="480"></canvas>
    </>
  );
}
