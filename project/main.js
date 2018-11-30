//dice
var posx1=9,posx2=9,posy1=8.6,posy2=8.6;
var x1=9,x2=9,y1=8.6,y2=8.6;
var player1=0,player2=0;
var finish=0,turn=1,updated=1;
var bonus = new Array(101).fill(0);

bonus[2] = 38;
bonus[4] = 14;
bonus[9] = 31;
bonus[33] = 85;
bonus[51] = 11;
bonus[52] = 88;
bonus[56] = 15;
bonus[62] = 57;
bonus[80] = 99;
bonus[92] = 53;
bonus[98] = 8;
  
var then = 0,dice;
var ro = new Array(3);
ro[0] = [1,0,0];
ro[1] = [0,1,0];
ro[2] = [0,0,1];

function halt()
{
  var temp = 2000000000;
  while(temp > 0)
    temp -= 1;
}

function get_position(num){
  var coord = new Float32Array(2);
  var position = new Float32Array(10);

  positionx = [ 8.0 , 6.0 , 4.2 , 2.5 , 1.2 , -1.2 , -2.5 , -4.2 , -6.0 , -8.0 ];
  positiony = [ 8.6 , 6.8 , 5.0 , 3.2 , 1.2 , -1.2 , -3.2 , -5.0 , -6.8 , -8.6 ];

  y = Math.floor((num-1)/10);
  x = (num-1)%10;

  coord[1] = positiony[y];

  if(y%2 == 0)
    coord[0] = positionx[x];
  else coord[0] = positionx[9-x];
    
  return coord;
}

function play_turn(i,dice){
  
  var re = new Array(3);

  halt();

  if(i == 1)
  {
    re[2] = 2;
    //dice = Math.floor(Math.random()*6)+1;
    if(player1+dice > 100)
      dice = 0;
    if(player1 == 94 && dice == 6)
      dice = 0;
    player1 = player1+dice;
    if(player1 == 100)
    {
      //console.log("game finish!!!!!!!!! won by 1");
      finish = 1;
    }
    if(dice == 6)
      re[2] = 1;
    [re[0],re[1]]=get_position(player1);
  }
  else if(i == 2)
  {
    re[2] = 1;
    //dice = Math.floor(Math.random()*6)+1;
    if(player2+dice > 100)
      dice = 0;
    if(player2 == 94 && dice == 6)
      dice = 0;
    player2 = player2+dice;
    if(player2 == 100)
    {
      //console.log("game finish!!!!!!!!! won by 2");
      finish = 1;
    }
    if(dice == 6)
      re[2] = 2;
    [re[0],re[1]]=get_position(player2);
  }
  return re;
}

main();

function main() {
  const canvas = document.querySelector('#glcanvas');
  const gl = canvas.getContext('webgl');

  // If we don't have a GL context, give up now

  if (!gl) {
    alert('Unable to initialize WebGL. Your browser or machine may not support it.');
    return;
  }
  // Vertex shader program

  const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec3 aVertexNormal;
    attribute vec2 aTextureCoord;

    uniform mat4 uNormalMatrix;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying highp vec2 vTextureCoord;
    varying highp vec3 vLighting;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoord = aTextureCoord;

      // Apply lighting effect

      highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);
      highp vec3 directionalLightColor = vec3(1, 1, 1);
      highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));

      highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

      highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
      vLighting = ambientLight + (directionalLightColor * directional);
    }
  `;

  // Fragment shader program

  const fsSource = `
    varying highp vec2 vTextureCoord;
    varying highp vec3 vLighting;

    uniform sampler2D uSampler;

    void main(void) {
      highp vec4 texelColor = texture2D(uSampler, vTextureCoord);

      gl_FragColor = vec4(texelColor.rgb, texelColor.a);
    }
  `;

  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      vertexNormal: gl.getAttribLocation(shaderProgram, 'aVertexNormal'),
      textureCoord: gl.getAttribLocation(shaderProgram, 'aTextureCoord'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
      normalMatrix: gl.getUniformLocation(shaderProgram, 'uNormalMatrix'),
      uSampler: gl.getUniformLocation(shaderProgram, 'uSampler'),
    },
  };

  const background_buffer = initBuffers(gl,0);
  const background_texture = loadImageTexture(gl,"sal.jpg");

  const player1_buffer = initBuffers(gl,1);
  const player1_texture = loadImageTexture(gl,"player1.jpg");

  const player2_buffer = initBuffers(gl,1);
  const player2_texture = loadImageTexture(gl,"player2.jpeg");

  const player1_buf = initBuffers(gl,3);

  const player2_buf = initBuffers(gl,3);

  const texture1 = loadImageTexture(gl, 'trial1.png');
  const texture6 = loadImageTexture(gl, 'trial2.png');
  const texture3 = loadImageTexture(gl, 'trial3.png');
  const texture4 = loadImageTexture(gl, 'trial4.png');
  const texture5 = loadImageTexture(gl, 'trial5.png');
  const texture2 = loadImageTexture(gl, 'trial6.png');

  var textures = new Array(6);
  var texture=texture1,winner,turn0;
  textures[0] = texture1;textures[1] = texture6;textures[2] = texture3;textures[3] = texture4;textures[4] = texture5;textures[5] = texture2;

  const buffers = initBuffers(gl,2);

  function roll_die()
  {
    var number = Math.floor(Math.random()*6)+1;
    texture = textures[number-1];
    return number;
  }

  //const buffers = initBuffers(gl,2);

  function render(now) {

    //check if game finish and if not play respective turn and in that turn if in update mode or no,if in update mode move to position.
     
    if( finish == 0 && turn == 1)
    {
      background(gl, programInfo, background_buffer, background_texture,[0,0,-20]);
      player_piece1(gl, programInfo, player1_buffer, player1_texture,posx1,posy1);
      player_piece2(gl, programInfo, player2_buffer, player2_texture,posx2,posy2); 
      player(gl, programInfo, player1_buf, player1_texture);
      drawDice(gl,programInfo, buffers,texture,texture,texture,texture,texture,texture,0,0,ro[2]);
      if (updated == 1)
      {
        dice = roll_die();
        console.log("player 1 got number : %d",dice);
        [x1,y1,turn0]=play_turn(1,dice);
        updated = 0;
      }
      //1 plays his/her turn and returns the co-ordinate they need to go and who's turn to play it is next
      if((Math.abs(posx1-x1)>= 0.05 || Math.abs(posy1-y1)>=0.05)&&updated == 0) 
      {
        if(Math.abs(posx1-x1)>= 0.05)
        {
          if(posx1 < x1)
            posx1 = posx1 + 0.05;
          else posx1 = posx1 - 0.05;
        }
        else if(Math.abs(posy1-y1)>=0.05)
        {
          if(posy1 < y1)
            posy1 = posy1 + 0.05;
          else posy1 = posy1 - 0.05;
        }
      }
      if(Math.abs(posx1-x1)< 0.05 && Math.abs(posy1-y1)<0.05)
      {
        if(bonus[player1] != 0)
        {
          halt();
          player1 = bonus[player1];
          [x1,y1] = get_position(player1);
        }
        else
        {
          turn = turn0;
          updated = 1;
          x1 = posx1;y1 = posy1;
        }
      }
      
      //update co-ordinate to reach destination and update turn after destination reached(ensure frame drawn everytime)
        
    }
    else if(finish == 0 && turn == 2)
    {
      background(gl, programInfo, background_buffer, background_texture,[0,0,-20]);
      player_piece1(gl, programInfo, player1_buffer, player1_texture,posx1,posy1);
      player_piece2(gl, programInfo, player2_buffer, player2_texture,posx2,posy2);
      player(gl, programInfo, player2_buf, player2_texture);
      drawDice(gl,programInfo, buffers,texture,texture,texture,texture,texture,texture,0,0,ro[2]);
      //drawDice(gl,programInfo,buffers,texture1,texture2,texture3,texture4,texture5,texture6,0,ro[2]);
      if (updated == 1)
      {
        dice = roll_die();
        //drawDice(gl,programInfo,buffers,texture,texture,texture,texture,texture,texture,0,ro[2])
        console.log("player 2 got number : %d",dice);
        roll_dice = 1;        
      }   
      if(updated == 1 && roll_dice == 1)
      {
        [x2,y2,turn0]=play_turn(2,dice);
        roll_dice = 0;
        updated = 0;
      }
      if((Math.abs(posx2-x2)>= 0.05 || Math.abs(posy2-y2)>=0.05)&& updated ==0)
      {
        if(Math.abs(posx2-x2)>= 0.05)
        {
          if(posx2 < x2)
            posx2 = posx2 + 0.05;
          else posx2 = posx2 - 0.05;
        }
        else if(Math.abs(posy2-y2)>=0.05)
        {
          if(posy2 < y2)
            posy2 = posy2 + 0.05;
          else posy2 = posy2 - 0.05;
        }
        
      }
      if(Math.abs(posx2-x2)< 0.05 && Math.abs(posy2-y2)<0.05 )
      {
        if(bonus[player2] != 0)
        {
          halt();
          player2 = bonus[player2];
          [x2,y2] = get_position(player2);
        }
        else
        {
          turn = turn0;
          updated = 1;
          x2 = posx2;y2 = posy2;
        }
      }
      
    }
    else if(finish ==1 && updated == 0)
    {
      background(gl, programInfo, background_buffer, background_texture,[0,0,-20]);
      player_piece1(gl, programInfo, player1_buffer, player1_texture,posx1,posy1);
      player_piece2(gl, programInfo, player2_buffer, player2_texture,posx2,posy2);
      if((Math.abs(posx2-x2)>= 0.05 || Math.abs(posy2-y2)>=0.05)&& updated ==0)
      {
        winner = 2;
        if(Math.abs(posx2-x2)>= 0.05)
        {
          if(posx2 < x2)
            posx2 = posx2 + 0.05;
          else posx2 = posx2 - 0.05;
        }
        else if(Math.abs(posy2-y2)>=0.05)
        {
          if(posy2 < y2)
            posy2 = posy2 + 0.05;
          else posy2 = posy2 - 0.05;
        }        
      }
      if(Math.abs(posx2-x2)< 0.05 && Math.abs(posy2-y2)<0.05 )
        updated = 1;
      if((Math.abs(posx1-x1)>= 0.05 || Math.abs(posy1-y1)>=0.05)&&updated == 0) 
      {
        winner = 1;
        if(Math.abs(posx1-x1)>= 0.05)
        {
          if(posx1 < x1)
            posx1 = posx1 + 0.05;
          else posx1 = posx1 - 0.05;
        }
        else if(Math.abs(posy1-y1)>=0.1)
        {
          if(posy1 < y1)
            posy1 = posy1 + 0.05;
          else posy1 = posy1 - 0.05;
        }        
      }
      if(Math.abs(posx1-x1)< 0.05 && Math.abs(posy1-y1)<0.05 )
        updated = 1;
    }
    else if(finish == 1 && updated ==1)
    {
      if(winner == 1)
        background(gl, programInfo, background_buffer,player1_texture ,[0,0,-20]);
      else
        background(gl, programInfo, background_buffer,player2_texture ,[0,0,-20]);
    }
    //if game finish move piece and give only background with pieces in final position
    
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

}// end main

