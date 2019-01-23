import * as THREE from 'three';
import Sprite from './Sprite';
export default class Spritesheet {
    texture: THREE.Texture;
    material: THREE.MeshBasicMaterial;
    columns: number;
    rows: number;
    sprites: Array<Sprite>;
    static MARGIN: number;
    static CORNERS: {
        x: number;
        y: number;
    }[][];
    constructor(texture: THREE.Texture, columns: number, rows: number);
    createSprites(): void;
    sprite(index: number): Sprite;
}
