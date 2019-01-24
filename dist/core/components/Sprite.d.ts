import * as THREE from 'three';
import Component from './component';
import Spritesheet from '../assets/Spritesheet';
export interface Sprite extends Component {
    spritesheet: Spritesheet;
    index: number;
    tile?: THREE.Mesh;
}
export default function sprite(spritesheet: Spritesheet, index: number): Sprite;
