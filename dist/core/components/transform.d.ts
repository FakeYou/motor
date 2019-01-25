import * as THREE from 'three';
import Component from './component';
export interface Transform extends Component {
    position: THREE.Vector3;
    scale: THREE.Vector3;
    rotation: THREE.Euler;
}
export default function transform(position?: THREE.Vector3, scale?: THREE.Vector3, rotation?: THREE.Euler): Transform;
