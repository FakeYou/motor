declare module 'orbit-controls-es6' {
	class OrbitControls {
		domElement: HTMLElement;
		enabled: boolean;
		target: THREE.Vector3;

		minDistance: number;
		maxDistance: number;
		minZoom: number;
		maxZoom: number;
		minPolarAngle: number;
		maxPolarAngle: number;
		minAzimuthAngle: number;
		maxAzimuthAngle: number;

		enableDamping: boolean;
		dampingFactor: number;

		enableZoom: boolean;
		zoomSpeed: number;

		enableRotate: boolean;
		rotateSpeed: number;

		enablePan: boolean;
		keyPanSpeed: number;

		autoRotate: boolean;
		autoRotateSpeed: number;

		enableKeys: boolean;

		keys: {
			LEFT: number;
			UP: number;
			RIGHT: number;
			BOTTOM: number;
		};

		mouseButtons: {
			ORBIT: THREE.MOUSE;
			ZOOM: THREE.MOUSE;
			PAN: THREE.MOUSE;
		};

		target0: THREE.Vector3;
		position0: THREE.Vector3;
		zoom0: number;

		constructor(camera: THREE.Camera, domElement: HTMLElement);

		reset(): void;
		update(): void;
		dispose(): void;
	}

	export = OrbitControls;
}
