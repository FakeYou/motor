import * as THREE from 'three';

export default class JsonLoader extends THREE.Loader {
	manager: THREE.LoadingManager;

	constructor(manager: THREE.LoadingManager = new THREE.LoadingManager()) {
		super();

		this.manager = manager;
	}

	load(
		url: string,
		onLoad?: (response: string | ArrayBuffer) => void,
		onProgress?: (request: ProgressEvent) => void,
		onError?: (event: ErrorEvent) => void
	) {
		const loader = new THREE.FileLoader(this.manager);
		loader.load(
			url,
			raw => {
				let json = undefined;
				try {
					json = JSON.parse(raw as string);
				} catch (e) {
					console.warn(e);
				}

				if (onLoad) {
					onLoad(json);
				}
			},
			onProgress,
			onError
		);
	}
}
