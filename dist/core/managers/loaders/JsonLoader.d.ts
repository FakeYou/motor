import * as THREE from 'three';
export default class JsonLoader extends THREE.Loader {
    manager: THREE.LoadingManager;
    constructor(manager?: THREE.LoadingManager);
    load(url: string, onLoad?: (response: string | ArrayBuffer) => void, onProgress?: (request: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
}
