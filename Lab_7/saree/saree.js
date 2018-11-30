
main();

function main() {
  const canvas = document.querySelector('#glcanvas');
  const gl = canvas.getContext('webgl');

  if (!gl) {
    alert('Unable to initialize WebGL. Your browser or machine may not support it.');
    return;
  }

  const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying highp vec2 vTextureCoord;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoord = aTextureCoord;
    }
  `;

  const fsSource = `
    varying highp vec2 vTextureCoord;

    uniform sampler2D uSampler;

    void main(void) {
      gl_FragColor = texture2D(uSampler, vTextureCoord);
    }
  `;

  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      textureCoord: gl.getAttribLocation(shaderProgram, 'aTextureCoord'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
      uSampler: gl.getUniformLocation(shaderProgram, 'uSampler'),
    },
  };

  const buffers = initBuffers(gl);

  const texture = new Array(3);
  texture[0] = loadTexture(gl, 'back.png');
  texture[1] = loadTexture(gl, 'border.jpeg');
  texture[2] = loadTexture(gl, 'border.jpeg');
  texture[3] = loadTexture(gl, 'design.png');


  var then = 0;

  function render(now)
  {

    drawScene(gl, programInfo, buffers, texture);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}


function initBuffers(gl) {

  const positionBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  const positions = [
    // saree background
    -5.0, -1.5,  1.5,
     4.8, -1.5,  1.5,
     4.8,  1.5,  1.5,
    -5.0,  1.5,  1.5,

    // lower borders
    -5.0, -1.5, 1.5,
    -5.0,  -1.2, 1.5,
    -4.2,  -1.2, 1.5,
    -4.2, -1.5, 1.5,

    -4.2, -1.5, 1.5,
    -4.2,  -1.2, 1.5,
    -3.4,  -1.2, 1.5,
    -3.4, -1.5, 1.5,

    -3.4, -1.5, 1.5,
    -3.4,  -1.2, 1.5,
    -2.6,  -1.2, 1.5,
    -2.6, -1.5, 1.5,

    -2.6, -1.5, 1.5,
    -2.6,  -1.2, 1.5,
    -1.8,  -1.2, 1.5,
    -1.8, -1.5, 1.5,

    -1.8, -1.5, 1.5,
    -1.8,  -1.2, 1.5,
    -1.0,  -1.2, 1.5,
    -1.0, -1.5, 1.5,

    -1.0, -1.5, 1.5,
    -1.0,  -1.2, 1.5,
    -0.2,  -1.2, 1.5,
    -0.2, -1.5, 1.5,

    -0.2, -1.5, 1.5,
    -0.2,  -1.2, 1.5,
    0.6,  -1.2, 1.5,
    0.6, -1.5, 1.5,

    1.4, -1.5, 1.5,
    1.4,  -1.2, 1.5,
    0.6,  -1.2, 1.5,
    0.6, -1.5, 1.5,

    1.4, -1.5, 1.5,
    1.4,  -1.2, 1.5,
    2.2,  -1.2, 1.5,
    2.2, -1.5, 1.5,

    2.2, -1.5, 1.5,
    2.2,  -1.2, 1.5,
    3.0,  -1.2, 1.5,
    3.0, -1.5, 1.5,

    3.0, -1.5, 1.5,
    3.0,  -1.2, 1.5,
    3.8,  -1.2, 1.5,
    3.8, -1.5, 1.5,

    3.8, -1.5, 1.5,
    3.8,  -1.2, 1.5,
    4.6,  -1.2, 1.5,
    4.6, -1.5, 1.5,

    // upper borders
    0.0, 1.2, 1.5,
    0.0,  1.5, 1.5,
    0.8,  1.5, 1.5,
    0.8, 1.2, 1.5,

    0.8, 1.2, 1.5,
    0.8, 1.5, 1.5,
    1.6, 1.5, 1.5,
    1.6, 1.2, 1.5,

    1.6, 1.2, 1.5,
    1.6, 1.5, 1.5,
    2.4, 1.5, 1.5,
    2.4, 1.2, 1.5,

    2.4, 1.2, 1.5,
    2.4, 1.5, 1.5,
    3.2, 1.5, 1.5,
    3.2, 1.2, 1.5,

    3.2, 1.2, 1.5,
    3.2, 1.5, 1.5,
    4.0, 1.5, 1.5,
    4.0, 1.2, 1.5,

    4.0, 1.2, 1.5,
    4.0, 1.5, 1.5,
    4.8, 1.5, 1.5,
    4.8, 1.2, 1.5,

    // side borders
    4.8, 1.2, 1.5,
    4.5, 1.2, 1.5,
    4.5, 0.3, 1.5,
    4.8, 0.3, 1.5,

    4.8, 0.3, 1.5,
    4.5, 0.3, 1.5,
    4.5, -0.6, 1.5,
    4.8, -0.6, 1.5,

    4.8, -1.5, 1.5,
    4.5, -1.5, 1.5,
    4.5, -0.6, 1.5,
    4.8, -0.6, 1.5,

    //design

    -4.5, -1.0, 1.5,
    -3.5, -1.0, 1.5,
    -3.5,  0.0, 1.5,
    -4.5,  0.0, 1.5,

    -3.0,  0.0, 1.5,
    -2.0,  0.0, 1.5,
    -2.0,  1.0, 1.5,
    -3.0,  1.0, 1.5,

    -1.5, -1.0, 1.5,
    -0.5, -1.0, 1.5,
    -0.5,  0.0, 1.5,
    -1.5,  0.0, 1.5,

    0.0,  0.0, 1.5,
    1.0,  0.0, 1.5,
    1.0,  1.0, 1.5,
    0.0,  1.0, 1.5,

    1.5, -1.0, 1.5,
    2.5, -1.0, 1.5,
    2.5,  0.0, 1.5,
    1.5,  0.0, 1.5,

    3.0,  0.0, 1.5,
    4.0,  0.0, 1.5,
    4.0,  1.0, 1.5,
    3.0,  1.0, 1.5,

    //upper border extension

    -0.8, 1.2, 1.5,
    -0.8, 1.5, 1.5,
     0.0, 1.5, 1.5,
     0.0, 1.2, 1.5,

    -1.6, 1.2, 1.5,
    -1.6, 1.5, 1.5,
    -0.8, 1.5, 1.5,
    -0.8, 1.2, 1.5,

    -2.4, 1.2, 1.5,
    -2.4, 1.5, 1.5,
    -1.6, 1.5, 1.5,
    -1.6, 1.2, 1.5,
  ];


  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  const textureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

  const textureCoordinates = [
    // background cloth
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,


  //lower borders
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    // upper borders
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    // side borders
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    0.0,  1.0,

    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    0.0,  1.0,

    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
    0.0,  1.0,

    //design

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    //upper border extension

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,

    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    0.0,  0.0,
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),
                gl.STATIC_DRAW);


  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);


  const indices = [
    0,  1,  2,      0,  2,  3,    // saree cloth
    4,  5,  6,      4,  6,  7,    // lower border
    8,  9,  10,     8,  10, 11,   // lower border
    12, 13, 14,     12, 14, 15,   // lower border
    16, 17, 18,     16, 18, 19,   // lower border
    20, 21, 22,     20, 22, 23,   // lower border
    24, 25, 26,     24, 26, 27,   // lower border
    28, 29, 30,     28, 30, 31,   // lower border
    32, 33, 34,     32, 34, 35,   // lower border
    36, 37, 38,     36, 38, 39,   // lower border
    40, 41, 42,     40, 42, 43,   // lower border
    44, 45, 46,     44, 46, 47,   // lower border
    48, 49, 50,     48, 50, 51,   // lower border
    52, 53, 54,     52, 54, 55,   // upper border
    56, 57, 58,     56, 58, 59,   // upper border
    60, 61, 62,     60, 62, 63,   // upper border
    64, 65, 66,     64, 66, 67,   // upper border
    68, 69, 70,     68, 70, 71,   // upper border
    72, 73, 74,     72, 74, 75,   // upper border
    76, 77, 78,     76, 78, 79,   // side border
    80, 81, 82,     80, 82, 83,   // side border
    84, 85, 86,     84, 86, 87,   // side border
    88, 89, 90,     88, 90, 91,   // design
    92, 93, 94,     92, 94, 95,   // design
    96, 97, 98,     96, 98, 99,   // design
    100,101,102,    100,102,103,  // design
    104,105,106,	104,106,107,  // design
    108,109,110,	108,110,111,  // design
    112,113,114,	112,114,115,  // design
	116,117,118,	116,118,119,  // extension
	120,121,122,	120,122,123,  // extension
	124,125,126,    124,126,127,  // extension
  ];


  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(indices), gl.STATIC_DRAW);

  return {
    position: positionBuffer,
    textureCoord: textureCoordBuffer,
    indices: indexBuffer,
  };
}

function loadTexture(gl, url) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  const level = 0;
  const internalFormat = gl.RGBA;
  const width = 1;
  const height = 1;
  const border = 0;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  const pixel = new Uint8Array([0, 0, 255, 255]); 
  gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                width, height, border, srcFormat, srcType,
                pixel);

  const image = new Image();
  image.onload = function() {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                  srcFormat, srcType, image);

    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
       gl.generateMipmap(gl.TEXTURE_2D);
    } else {
       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    }
  };
  image.src = url;

  return texture;
}

function isPowerOf2(value) {
  return (value & (value - 1)) == 0;
}

function drawScene(gl, programInfo, buffers, texture) {
  gl.clearColor(0.2, 0.2, 0.2, 1.0);  // Clear to black, fully opaque
  gl.clearDepth(1.0);                 // Clear everything
  gl.enable(gl.DEPTH_TEST);           // Enable depth testing
  gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


  const fieldOfView = 45 * Math.PI / 180;   // in radians
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();

  mat4.perspective(projectionMatrix,
                   fieldOfView,
                   aspect,
                   zNear,
                   zFar);

  const modelViewMatrix = mat4.create();


  mat4.translate(modelViewMatrix,     // destination matrix
                 modelViewMatrix,     // matrix to translate
                 [-0.0, 0.0, -6.0]);  // amount to translate


  {
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexPosition);
  }

  {
    const numComponents = 2;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord);
    gl.vertexAttribPointer(
        programInfo.attribLocations.textureCoord,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.textureCoord);
  }

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

  gl.useProgram(programInfo.program);

  gl.uniformMatrix4fv(
      programInfo.uniformLocations.projectionMatrix,
      false,
      projectionMatrix);
  gl.uniformMatrix4fv(
      programInfo.uniformLocations.modelViewMatrix,
      false,
      modelViewMatrix);

  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, texture[0]);
  gl.uniform1i(programInfo.uniformLocations.uSampler, 0);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }


  gl.activeTexture(gl.TEXTURE2);
  gl.bindTexture(gl.TEXTURE_2D, texture[2]);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // side borders
  gl.uniform1i(programInfo.uniformLocations.uSampler, 2);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 228;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

  // side borders
  gl.uniform1i(programInfo.uniformLocations.uSampler, 2);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 240;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

  // side borders
  gl.uniform1i(programInfo.uniformLocations.uSampler, 2);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 252;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // lower borders
  gl.activeTexture(gl.TEXTURE1);
  gl.bindTexture(gl.TEXTURE_2D, texture[1]);
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 12;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }


    // lower borders
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 24;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }


    // lower borders
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 36;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

      // lower borders
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 48;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

  // lower borders
  gl.activeTexture(gl.TEXTURE1);
  gl.bindTexture(gl.TEXTURE_2D, texture[1]);
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 60;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }


    // lower borders
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 72;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }


    // lower borders
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 84;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

      // lower borders
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 96;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

// lower borders
  gl.activeTexture(gl.TEXTURE1);
  gl.bindTexture(gl.TEXTURE_2D, texture[1]);
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 108;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }


    // lower borders
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 120;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }


    // lower borders
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 132;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

    // lower borders
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 144;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // upper borders
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 156;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }


    // upper borders
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 168;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

    // upper borders
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 180;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }


    // upper borders
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 192;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

    // upper borders
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 204;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }


    // upper borders
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 216;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

    // upper borders
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 336;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

    // upper borders
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 348;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

    // upper borders
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 360;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  gl.activeTexture(gl.TEXTURE3);
  gl.bindTexture(gl.TEXTURE_2D, texture[3]);
  //design

  gl.uniform1i(programInfo.uniformLocations.uSampler, 3);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 264;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

  gl.uniform1i(programInfo.uniformLocations.uSampler, 3);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 276;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

  gl.uniform1i(programInfo.uniformLocations.uSampler, 3);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 288;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

  gl.uniform1i(programInfo.uniformLocations.uSampler, 3);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 300;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

  gl.uniform1i(programInfo.uniformLocations.uSampler, 3);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 312;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

  gl.uniform1i(programInfo.uniformLocations.uSampler, 3);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 324;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }


}

function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
    return null;
  }

  return shaderProgram;
}

function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  gl.shaderSource(shader, source);

  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}
