function drawDice(gl, programInfo, buffers, texture1,texture2,texture3,texture4,texture5,texture6,cubeRotation,deltaTime,[x,y,z]) {
                    
  const fieldOfView = 45 * Math.PI / 180;   
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();

  mat4.perspective(projectionMatrix,fieldOfView,aspect,zNear,zFar);


  const modelViewMatrix = mat4.create();

  mat4.translate(modelViewMatrix,modelViewMatrix,[-10.0, 0.0, -20.0]);  
  mat4.rotate(modelViewMatrix,modelViewMatrix,cubeRotation*6 ,[x,y,z]);       

  const normalMatrix = mat4.create();
  mat4.invert(normalMatrix, modelViewMatrix);
  mat4.transpose(normalMatrix, normalMatrix);

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

  {
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexNormal,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexNormal);
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
  gl.uniformMatrix4fv(
      programInfo.uniformLocations.normalMatrix,
      false,
      normalMatrix);

  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, texture1);
  gl.uniform1i(programInfo.uniformLocations.uSampler, 0);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

  gl.activeTexture(gl.TEXTURE1);
  gl.bindTexture(gl.TEXTURE_2D, texture2);
  gl.uniform1i(programInfo.uniformLocations.uSampler, 1);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 12;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

  gl.activeTexture(gl.TEXTURE2);
  gl.bindTexture(gl.TEXTURE_2D, texture3);
  gl.uniform1i(programInfo.uniformLocations.uSampler, 2);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 24;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

  gl.activeTexture(gl.TEXTURE3);
  gl.bindTexture(gl.TEXTURE_2D, texture4);
  gl.uniform1i(programInfo.uniformLocations.uSampler, 3);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 36;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

  gl.activeTexture(gl.TEXTURE4);
  gl.bindTexture(gl.TEXTURE_2D, texture5);
  gl.uniform1i(programInfo.uniformLocations.uSampler, 4);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 48;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

  gl.activeTexture(gl.TEXTURE5);
  gl.bindTexture(gl.TEXTURE_2D, texture6);
  gl.uniform1i(programInfo.uniformLocations.uSampler, 5);
  {
    const vertexCount = 6;
    const type = gl.UNSIGNED_SHORT;
    const offset = 60;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }  
}
