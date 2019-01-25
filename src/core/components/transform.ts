import * as THREE from 'three';
import Component from './component';

export interface Transform extends Component {
	position: THREE.Vector3;
	scale: THREE.Vector3;
	rotation: THREE.Euler;
}

export default function transform(
	position: THREE.Vector3 = new THREE.Vector3(0, 0, 0),
	scale: THREE.Vector3 = new THREE.Vector3(1, 1, 1),
	rotation: THREE.Euler = new THREE.Euler(0, 0, 0, 'XYZ')
): Transform {
	return {
		name: 'transform',
		position,
		scale,
		rotation
	};
}
