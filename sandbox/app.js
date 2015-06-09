
var height = 480,
 width = 640,
 aspect,
 fov = 45,
 near = 0.1,
 far = 10000;

 aspect = width / height;

 self.renderer = new THREE.WebGLRender();
 self.renderer.setSize(width, height);


 self.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
 self.camera.position.y = 5;
 self.camera.position.z = 30;

 var light = new THREE.DirectionalLight(0xFFFFFF, 0.75);
 light.position.set(0, 200, 40);

 self.scene = new THREE.Scene();
 self.scene.add(this.camera);
 self.scene.add(light);

 document.querySelector('#c').appendChild(this.renderer.domElement)
 

 var scope = this;
 var loader = new THREE.JSONLoader();
 loader.load('model/chaingunner.json', function(geometry, material){
 	var texture = THREE.ImageUtils.loadTexture("model/chaingunner_body.png");
 	var material = new THREE.MeshLambertMaterial({
 		color:0xFFFFFF,
 		map: texture,
 		morphTargets: true
 	});
 	scope.human2 = new THREE.MorphAnimMesh(geometry, material);
 	scope.human2.position.y = 0.4;
 	scope.human2.position.x = 8;
 	scope.human2.scale.set(0.5, 0.5, 0.5);
 	scope.scene.add(scope.human2);
 });
