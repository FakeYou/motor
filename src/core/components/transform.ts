import * as THREE from 'three';
import Component from './component';

export interface Transform extends Component {
	position: THREE.Vector3;
	scale: THREE.Vector3;
	rotation: THREE.Euler;
}

export default function transform(
	position?: THREE.Vector3,
	scale?: THREE.Vector3,
	rotation?: THREE.Euler
): Transform {
	return {
		name: 'transform',
		position: position || new THREE.Vector3(0, 0, 0),
		scale: scale || new THREE.Vector3(1, 1, 1),
		rotation: rotation || new THREE.Euler(0, 0, 0, 'XYZ')
	};
}
