import * as THREE from "three";
import WebGL from "../../node_modules/three/examples/jsm/capabilities/WebGL.js";

// // WebGL 호환여부로 분기처리
// if(WebGL.isWebGLAvailable()){
//   // three.js 코드 작성

//   // 장면 생성
//   const scene = new THREE.Scene();
//   scene.background = new THREE.Color(0xFFE187)

//   const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
//   camera.position.set(3, 3, 3);
//   camera.lookAt(0, 0, 0);

//   const renderer = new THREE.WebGLRenderer()
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild(renderer.domElement);

//   // 빛
//   const ambientLight = new THREE.AmbientLight(0xffffff, 1);
//   scene.add(ambientLight);

//   const pointLight = new THREE.PointLight(0xffffff, 1);
//   pointLight.position.set(0, 2, 4);
//   scene.add(pointLight);

//   // 박스
//   const geometry = new THREE.BoxGeometry(1, 1, 1);
//   const material = new THREE.MeshStandardMaterial({ color: 0x2E6FF2 })
//   const cube = new THREE.Mesh(geometry, material);
//   scene.add(cube);

//   renderer.render(scene, camera);
// }else{
//   document.body.appendChild(WebGL.getWebGLErrorMessage());
// }


const result = document.getElementById("result");

// 1. Scene: 화면에서 보여주려는 객체를 담는 공간
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe287);
// scene.add(요소);


// 2. Camera: Scene을 바라볼 시점을 결정
// PerspectiveCamera : 원근감을 적용하여 표현
const camera = new THREE.PerspectiveCamera(50, result.clientWidth / result.clientHeight, 0.1, 1000);
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);


// 3. Renderer: Scene + Camera 화면을 그려주는 역할
const renderer = new THREE.WebGLRenderer({
  canvas: result,
  antialias: true
});
renderer.setSize(result.clientWidth, result.clientHeight);
// console.log(renderer);
// document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff);
light.position.set(2, 4, 3);
scene.add(light);

// const geometry = new THREE.BoxGeometry(1, 1, 1);  // 형태
// const material = new THREE.MeshStandardMaterial({
//   color: 0x2e6ff2
// }); // 재질
// const box = new THREE.Mesh(geometry, material); // 요소
// scene.add(box);

// geometry example
// // 육면체
// const geo1 = new THREE.BoxGeometry(1, 1, 1);
// const obj1 = new THREE.Mesh(geo1, material);
// // scene.add(obj1);

// // 원뿔
// const geo2 = new THREE.ConeGeometry(0.5, 1, 50);
// const obj2 = new THREE.Mesh(geo2, material);
// // scene.add(obj2);

// // 원기둥
// const geo3 = new THREE.CylinderGeometry(0.5, 0.5, 1);
// const obj3 = new THREE.Mesh(geo3, material);
// // scene.add(obj3);

// // 구
// const geo4 = new THREE.SphereGeometry(1);
// const obj4 = new THREE.Mesh(geo4, material);
// // scene.add(obj4);

// // 평면
// const geo5 = new THREE.PlaneGeometry(1, 2);
// const obj5 = new THREE.Mesh(geo5, material);
// // scene.add(obj5);

// // 원 / 다각형
// const geo6 = new THREE.CircleGeometry(1, 32);
// const obj6 = new THREE.Mesh(geo6, material);
// // scene.add(obj6);

// // 튜브
// const geo7 = new THREE.TorusGeometry(1, 0.2);
// const obj7 = new THREE.Mesh(geo7, material);
// scene.add(obj7);


// material example
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const basic = new THREE.MeshBasicMaterial({
//   color: 0xffaaaa,
//   // wireframe: true
//   transparent: true,
//   opacity: 0.5
// });
// const standard = new THREE.MeshStandardMaterial({
//   color: 0xffaaaa,
//   roughness: 0.2,
//   metalness: 0.8,
//   // map:
//   side: THREE.DoubleSide
// });
// const physical = new THREE.MeshPhysicalMaterial({
//   color: 0xffaaaa,
//   clearcoat: 0.8,
//   clearcoatRoughness: 0.2
// });
// const phong = new THREE.MeshPhongMaterial({
//   color: 0xffaaaa,
//   shininess: 100,
//   specular: 0x2E6FF2
// });

// const mesh = new THREE.Mesh(geometry, phong);
// scene.add(mesh);

// const plane = new THREE.Mesh((new THREE.PlaneGeometry(1, 1)), standard);
// scene.add(plane);



const geometry = new THREE.DodecahedronGeometry(1);
const material = new THREE.MeshStandardMaterial({
  color: 0xffaaaa
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 1. 위치
// mesh.position.x = 2;
// mesh.position.y = 1;
mesh.position.set(0, 2, 1);

// 2. 회전
// mesh.rotation.y = 360;
mesh.rotation.y = THREE.MathUtils.degToRad(30);

// 3. 크기
mesh.scale.x = 1.2;
mesh.scale.z = 0.8;


// axesHelper
const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);



function animate() {
  // mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(animate); 
}

animate();

window.addEventListener("resize", () => {
  // 1. 카메라의 종횡비
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();  // 카메라 업데이트

  // 2. 렌더러의 크기
  renderer.setSize(window.innerWidth, window.innerHeight);
});