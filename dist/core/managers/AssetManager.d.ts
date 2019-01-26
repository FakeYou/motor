import * as THREE from 'three';
import Motor from '../..';
import Spritesheet, { Options as SpritesheetOptions } from '../assets/Spritesheet';
import Animations from '../assets/Animations';
import JsonLoader from './loaders/JsonLoader';
export declare const LOAD_START = "assets.load_start";
export declare const LOAD_END = "assets.load_end";
export default class AssetManager {
    motor: Motor;
    assets: {
        [name: string]: THREE.Texture | THREE.Material | Spritesheet | Animations;
    };
    loadingManager: THREE.LoadingManager;
    textureLoader: THREE.TextureLoader;
    fileLoader: THREE.FileLoader;
    jsonLoader: JsonLoader;
    constructor(motor: Motor);
    loadTexture(name: string, url: string): void;
    loadSprite(name: string, url: string): void;
    loadSpritesheet(name: string, url: string, options: SpritesheetOptions): void;
    loadAseprite(name: string, image: string, meta: string): Promise<void>;
    load(loader: any, url: string): Promise<any>;
}
