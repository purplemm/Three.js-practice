import * as THREE from "three";

export default function printTangerine() {
  // 한라봉 
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

  // scene.add(tangerine);

  return tangerine;
}