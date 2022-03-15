import React, { useRef } from "react";
import "./webgl.css";
import { initWebGL } from "../../initWebGL/main";

function main(canvasRef) {
  initWebGL(canvasRef);
}

export function WebGL() {
  const canvasRef = useRef(null);
  return (
    <>
      <button onClick={() => main(canvasRef)}>
        press me to summon the almighty webgl
      </button>
      <br />
      <canvas ref={canvasRef} id="glCanvas" width="640" height="480"></canvas>
    </>
  );
}
