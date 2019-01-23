import * as THREE from 'three';
import { Texture } from 'three';
declare type Data = {
    frames: Array<Frame>;
    meta: {
        size: {
            w: number;
            h: number;
        };
    };
};
declare type Frame = {
    duration: number;
    frame: {
        h: number;
        w: number;
        x: number;
        y: number;
    };
};
declare class Aseprite {
    image: ImageBitmap;
    frames: Array<Frame>;
    tileWidth: number;
    tileHeight: number;
    texture: THREE.Texture;
    material: THREE.MeshBasicMaterial;
    constructor(image: ImageBitmap, data: Data);
    setTileSize(width: number, height: number): void;
    getFrame(frame: number): [Texture];
}
export default Aseprite;
