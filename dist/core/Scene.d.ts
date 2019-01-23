import Motor from '..';
export declare const SCENE_LOAD = "scene.load";
export declare const SCENE_SETUP = "scene.setup";
export declare const SCENE_DISPOSE = "scene.dispose";
export default abstract class Scene {
    motor: Motor;
    constructor(motor: Motor);
    load?(): void;
    setup?(): void;
    start(): void;
}
