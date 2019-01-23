import Motor from '../..';
import System from '../systems/System';

export const ADDED_SYSTEM = 'system_manager.add';
export const REMOVED_SYSTEM = 'system_manager.remove';

export default class SystemManager {
	motor: Motor;
	systems: Array<System>;

	constructor(motor: Motor) {
		this.motor = motor;

		this.systems = [];
	}

	update() {
		this.systems.forEach(system => {
			system.update();
		});
	}

	addSystem(system: System) {
		if (this.systems.includes(system)) {
			return;
		}

		this.systems.push(system);
		this.systems.sort((a, b) => a.priority - b.priority);

		this.motor.eventManager.emit(ADDED_SYSTEM, { system });
	}

	removeSystem(system: System) {
		const index = this.systems.indexOf(system);

		if (index !== -1) {
			this.systems.splice(index, -1);
			this.motor.eventManager.emit(REMOVED_SYSTEM, { system });
		}
	}

	clear() {
		this.systems.forEach(system => {
			this.motor.eventManager.emit(REMOVED_SYSTEM, { system });
		});

		this.systems = [];
	}
}
