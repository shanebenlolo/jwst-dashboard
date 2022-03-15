import { cube } from "../shapesApi/cube/buffers/cubeBuffers";

// Initialize the buffers we'll need. For this demo, we just
// have one object -- a simple two-dimensional square.
function initBuffers(gl) {
  // POSITION BUFFER
  // Create a buffer for the square's positions.
  const positionBuffer = gl.createBuffer();

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Now create an array of positions for the cube.

  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(cube.positionBuffer),
    gl.STATIC_DRAW
  );

  // Convert the array of colors into a table for all the vertices.
  var colors = [];

  for (var j = 0; j < cube.colorBuffer.length; j++) {
    const c = cube.colorBuffer[j];

    // assign rgba value at every vertex
    // Repeat each color four times for the four vertices of the face
    colors = colors.concat(c, c, c, c);
  }

  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

  // INDEX BUFFER
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  // Now send the element array to GL
  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(cube.indexBuffer),
    gl.STATIC_DRAW
  );

  return {
    position: positionBuffer,
    color: colorBuffer,
    indices: indexBuffer,
  };
}

export { initBuffers };
