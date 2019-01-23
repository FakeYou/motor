import * as THREE from 'three';
export default class Sprite {
    material: THREE.MeshBasicMaterial;
    size: THREE.Vector2;
    uv: THREE.Vector2;
    constructor(material: THREE.MeshBasicMaterial, uv: THREE.Vector2, size: THREE.Vector2);
}
