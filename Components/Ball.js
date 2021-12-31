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
        var  ballEl = document.createElement("a-entity");
  
          ballEl.setAttribute("gltf-model", "./Assets/bowling_ball/scene.gltf");
  
          ballEl.setAttribute("scale", { x: 3, y: 3,  z: 3});
  
          var cameraEl = document.querySelector("#camera").object3D;
  

          var direction = new THREE.Vector3();
          cameraEl.getWorldDirection(direction);
  

          ballEl.setAttribute("velocity", direction.multiplyScalar(-10));
          ballEl.setAttribute('position',{y:0.5})
  
          var sceneEl = document.querySelector("#scene");
  
          sceneEl.appendChild(ballEl);
    }
  });
  
  
  
