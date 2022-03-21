import { cube } from "../shapesApi/cube/cubeBuffers";

// Initialize the buffers we'll need. For this demo, we just
// have one object -- a simple two-dimensional square.
function initBuffers(gl) {
  // POSITION BUFFER
  const positionBuffer = gl.createBuffer();

  // now that the position buffer has been created, all gl.buffer operations will refer
  // to modifying the positionBuffer until colorBuffer is created. This is an example of
  // modifying webgl's "state" like Cherno discussed

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(cube.positionBuffer),
    gl.STATIC_DRAW
  );

  // COLOR BUFFER
  var colors = [];
  for (var j = 0; j < cube.colorBuffer.length; j++) {
    const c = cube.colorBuffer[j];
    // assign rgba value at every corner (vertex) of each cube face
    colors = colors.concat(c, c, c, c);
  }
  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

  // INDEX BUFFER
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(cube.indexBuffer),
    gl.STATIC_DRAW
  );

  // TEXTURE BUFFER
  const textureBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(cube.textureBuffer),
    gl.STATIC_DRAW
  );

  // LIGHTING BUFFER
  const normalBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(cube.vertexNormals),
    gl.STATIC_DRAW
  );

  return {
    color: colorBuffer, //this is current not being shown due to contents of glsl shaders

    position: positionBuffer,
    normal: normalBuffer,
    indices: indexBuffer,
    textureCoord: textureBuffer,
  };
}

export { initBuffers };
