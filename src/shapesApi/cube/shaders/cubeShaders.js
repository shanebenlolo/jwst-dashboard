const cubeShaders = {
  vertexShader: /*glsl*/ `
attribute vec4 aVertexPosition;
attribute vec4 aVertexColor;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

varying lowp vec4 vColor;

void main(void) {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    vColor = aVertexColor;
}
`,

  fragmentShader: /*glsl*/ `
varying lowp vec4 vColor;

void main(void) {
    gl_FragColor = vColor;
}
`,
};

export { cubeShaders };
