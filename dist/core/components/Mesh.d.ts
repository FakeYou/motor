import * as THREE from 'three';
import Component from './component';
export interface Mesh extends Component {
    mesh: THREE.Mesh;
}
export default function Mesh(mesh: THREE.Mesh): Mesh;
