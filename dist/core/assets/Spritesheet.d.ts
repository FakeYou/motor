import * as THREE from 'three';
export declare type Sprite = {
    material: THREE.MeshBasicMaterial;
    size: THREE.Vector2;
    uv: THREE.Vector2;
};
export declare type Options = {
    tileWidth?: number;
    tileHeight?: number;
    columns?: number;
    rows?: number;
};
export default class Spritesheet {
    texture: THREE.Texture;
    material: THREE.MeshBasicMaterial;
    columns: number;
    rows: number;
    tileWidth: number;
    tileHeight: number;
    sprites: Array<Sprite>;
    static MARGIN: number;
    constructor(texture: THREE.Texture, options?: Options);
    createSprites(): void;
    sprite(index: number): Sprite;
}
