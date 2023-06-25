import * as THREE from "three";

export default function printTree() {
  // 나무
  const tree = new THREE.Group();

  const trunks = new THREE.Group();  // 그룹화
  const trunkMatarial = new THREE.MeshStandardMaterial({
    color: 0xa38049
  });
  const trunkGeometry = new THREE.CylinderGeometry(0.8, 1, 1.5);

  const trunk1 = new THREE.Mesh(trunkGeometry, trunkMatarial);
  trunks.add(trunk1);

  const trunk2 = new THREE.Mesh(trunkGeometry, trunkMatarial);
  trunk2.position.set(0.1, 1.3, 0);
  trunk2.scale.set(0.9, 0.9, 0.9);
  trunk2.rotation.z = THREE.MathUtils.degToRad(-5);
  trunks.add(trunk2);

  const trunk3 = new THREE.Mesh(trunkGeometry, trunkMatarial);
  trunk3.position.set(0.1, 2.4, 0);
  trunk3.scale.set(0.8, 0.8, 0.8);
  trunk3.rotation.z = THREE.MathUtils.degToRad(5);
  trunks.add(trunk3);

  const trunk4 = new THREE.Mesh(trunkGeometry, trunkMatarial);
  trunk4.position.set(0.1, 3.4, 0);
  trunk4.scale.set(0.7, 0.7, 0.7);
  trunk4.rotation.z = THREE.MathUtils.degToRad(-5);
  trunks.add(trunk4);

  tree.add(trunks);

  // 나뭇잎
  const leafs = new THREE.Group();  //그룹화
  const leafMaterial = new THREE.MeshStandardMaterial({
    color: 0x008000,
    side: THREE.DoubleSide
  });
  const leafGeometry = new THREE.SphereGeometry(2, 32, 16, Math.PI / 3, Math.PI / 3);

  const leaf1 = new THREE.Mesh(leafGeometry, leafMaterial);
  leaf1.position.set(0, 3.2, 2);
  leaf1.rotation.x = Math.PI / -2;
  leafs.add(leaf1);

  const leaf2 = new THREE.Mesh(leafGeometry, leafMaterial);
  leaf2.position.set(2, 3.2, 0);
  leaf2.rotation.x = Math.PI / -2;
  leaf2.rotation.z = Math.PI / 2;
  leafs.add(leaf2);

  const leaf3 = new THREE.Mesh(leafGeometry, leafMaterial);
  leaf3.position.set(0, 3.2, -2);
  leaf3.rotation.x = Math.PI / -2;
  leaf3.rotation.z = Math.PI;
  leafs.add(leaf3);

  const leaf4 = new THREE.Mesh(leafGeometry, leafMaterial);
  leaf4.position.set(-2, 3.2, 0);
  leaf4.rotation.x = Math.PI / -2;
  leaf4.rotation.z = Math.PI / -2;
  leafs.add(leaf4);

  leafs.position.x = -1.4;
  leafs.rotation.z = THREE.MathUtils.degToRad(-20);
  tree.add(leafs);

  // scene.add(tree);

  return tree;
}