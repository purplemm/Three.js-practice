import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// 장면
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFFE187);

// 카메라
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);

// 렌더
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 빛
const light = new THREE.DirectionalLight(0xffffff);
light.position.set(2, 4, 3);
scene.add(light);

// 한라봉 만들기
const tangerine = new THREE.Group();

const body = new THREE.Group();
// 몸통 재질
const bodyMaterial = new THREE.MeshStandardMaterial({
  color: 0xff7f00
});

// 몸통 위
const topGeometry = new THREE.TetrahedronGeometry(1, 2);
const top = new THREE.Mesh(topGeometry, bodyMaterial);
top.position.y = 1.7;
body.add(top);

// 몸통 아래
const bottomGeometry = new THREE.DodecahedronGeometry(2, 1);
const bottom = new THREE.Mesh(bottomGeometry, bodyMaterial);
body.add(bottom);

tangerine.add(body);

// 잎 재질
const leafs = new THREE.Group();
const leafMaterial = new THREE.MeshStandardMaterial({
  color: 0x008000,
  side: THREE.DoubleSide
});

// 줄기
const stemGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.4);
const stem = new THREE.Mesh(stemGeometry, leafMaterial);
stem.position.y = 2.7;
leafs.add(stem);

// 잎사귀
const leafGeometry = new THREE.SphereGeometry(0.6, 32, 16, 0, Math.PI /3);
const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
leaf.position.set(-0.6, 2.4, -0.1);
leaf.rotation.z = Math.PI / -2;
leafs.add(leaf);

tangerine.add(leafs);

scene.add(tangerine);

// OrbitControls (카메라 조직 설정)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// 애니메이션
function animate() {
  renderer.render(scene, camera);
  controls.update();
  requestAnimationFrame(animate); 
}
animate();

// 반응형
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


renderer.render(scene, camera);