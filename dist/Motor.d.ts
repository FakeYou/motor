import * as THREE from 'three';
import OrbitControls from 'orbit-controls-es6';
import EventManager from './core/managers/EventManager';
import EntityManager from './core/managers/EntityManager';
import SystemManager from './core/managers/SystemManager';
import AssetManager from './core/managers/AssetManager';
export declare const UPDATE_START = "game.update_start";
export declare const UPDATE_END = "game.update_end";
interface Options {
    debug?: boolean;
    controls?: boolean;
}
export default class Motor {
    domElement: HTMLElement;
    options: Options;
    eventManager: EventManager;
    entityManager: EntityManager;
    systemManager: SystemManager;
    assetManager: AssetManager;
    scene: THREE.Scene;
    clock: THREE.Clock;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    controls?: OrbitControls;
    animationRequest: number;
    constructor(domElement: HTMLElement, options?: Options);
    bootstrap(): void;
    resize(): void;
    update(): void;
    dispose(): void;
}
export {};
