import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import printTree from "../mesh/tree.js";
import printTangerine from "../mesh/tangerine.js";

// 장면
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFFE187);

// 카메라
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

// 렌더
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 빛
const light = new THREE.DirectionalLight(0xffffff);
light.position.set(2, 4, 3);
scene.add(light);

// 나무
const tree1 = printTree();
scene.add(tree1);
const tangerine1 = printTangerine();
tangerine1.position.x = 3;
tangerine1.scale.set(0.5, 0.5, 0.5);
scene.add(tangerine1);

// OrbitControls (카메라 조직 설정)
const controls = new OrbitControls(camera, renderer.domElement);
// 조작 옵션 설정
// controls.enableZoom = false;
// controls.enableRotate = false;
// controls.enablePan = false;
// controls.minDistance = 2;
// controls.maxDistance = 10;
// controls.maxPolarAngle = Math.PI / 3;
// controls.autoRotate = true;
// controls.autoRotateSpeed = 10;
controls.enableDamping = true;

// axesHelper
const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);

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