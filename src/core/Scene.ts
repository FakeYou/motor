import Motor from '..';
import { LOAD_END } from './managers/AssetManager';

export const SCENE_LOAD = 'scene.load';
export const SCENE_SETUP = 'scene.setup';
export const SCENE_DISPOSE = 'scene.dispose';

export default abstract class Scene {
	motor: Motor;

	constructor(motor: Motor) {
		this.motor = motor;
	}

	load?(): void;
	setup?(): void;

	start() {
		const onLoad = () => {
			if (this.setup) {
				this.motor.eventManager.emit(SCENE_SETUP);
				this.setup();
			}
		};

		this.motor.eventManager.emit(SCENE_LOAD);
		this.motor.eventManager.once(LOAD_END, onLoad);

		if (this.load) {
			this.load();
		} else {
			onLoad();
		}
	}
}
