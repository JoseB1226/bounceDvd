const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();
const renderer = new THREE.WebGLRenderer();

renderer.setSize(800, 800);
document.body.appendChild(renderer.domElement);
camera.position.z = 5;

const dvdGeometry = new THREE.PlaneGeometry(0.4, 0.3);
const dvdMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Initial color is white
const dvd = new THREE.Mesh(dvdGeometry, dvdMaterial);
scene.add(dvd);


dvd.position.x = 0;
dvd.position.y = 0;
let speedX = 0.0023;
let speedY = 0.0023;
bouncesLeft = 8;

function changeColor() {
  
  dvd.material.color.setHex(Math.random() * 0xffffff);
}

function animate() {
  requestAnimationFrame(animate);

 
  dvd.position.x += speedX;
  dvd.position.y += speedY;

  
  if (dvd.position.x >= 0.81 || dvd.position.x <= -1) {
    speedX = -speedX;
    changeColor(); 
    dvd.scale.x -= 0.1;
    dvd.scale.y -= 0.1;
    bouncesLeft--;
  }

  if (dvd.position.y >= 0.81 || dvd.position.y <= -0.80) {
    speedY = -speedY;
    changeColor(); 
    dvd.scale.x -= 0.1;
    dvd.scale.y -= 0.1;
    bouncesLeft--;
  }
  else if (bouncesLeft <= 0)
  {
    dvd.visible = false;
  }

  renderer.render(scene, camera);
}

animate();
