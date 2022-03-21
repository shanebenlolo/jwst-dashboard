import React, { useEffect, useRef, useState } from "react";
import ReactSlider from "react-slider";
import { initWebGL } from "../../WebGLCore/main";
import { render } from "../../WebGLCore/renderer";
import "./webgl.css";

let gl, programInfo, buffers, texture;

export function WebGL() {
  const canvasRef = useRef(null);

  const [spinRate, setSpinRate] = useState(0);
  const [currentAnimationId, setCurrentAnimationId] = useState(null);

  useEffect(() => {
    // watch cherno on how to abstract this in a better way
    [gl, programInfo, buffers, texture] = initWebGL(canvasRef);
  }, []);

  useEffect(() => {
    cancelAnimationFrame(currentAnimationId);
    requestAnimationFrame((timestamp) => {
      const animationId = render(
        timestamp,
        gl,
        programInfo,
        buffers,
        texture,
        spinRate
      );
      setCurrentAnimationId(animationId);
    });
  }, [spinRate]);

  return (
    <>
      <ReactSlider
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        onChange={(value, thumbIndex) => setSpinRate(value / 10000)}
      />
      <br />
      <canvas ref={canvasRef} width="1920" height="900"></canvas>
    </>
  );
}
