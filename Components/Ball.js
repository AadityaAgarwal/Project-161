AFRAME.registerComponent("ball", {
    init: function () {
      this.throwBall();
    },
    throwBall: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "z") {
          this.createBall()
        }
      });
    },
    createBall:function(){
        var  ball = document.createElement("a-entity");
  
          ball.setAttribute("gltf-model", "./Assets/bowling_ball/scene.gltf");
  
          ball.setAttribute("scale", { x: 3, y: 3,  z: 3});
  
          var camera = document.querySelector("#camera").object3D;
  
          //get the camera direction as Three.js Vector
          var direction = new THREE.Vector3();
          camera.getWorldDirection(direction);
  
          //set the velocity and it's direction
          ball.setAttribute("velocity", direction.multiplyScalar(-10));
          ball.setAttribute('position',{y:0.5})
  
          var scene = document.querySelector("#scene");
  
          scene.appendChild(ball);
    }
  });
  
  
  