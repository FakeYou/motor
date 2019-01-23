import Motor from '../..';
import { Entity } from '../Entity';

export const ADDED_ENTITY = 'entity_manager.add';
export const REMOVED_ENTITY = 'entity_manager.remove';

export default class EntityManager {
	motor: Motor;
	entities: Array<Entity>;

	constructor(motor: Motor) {
		this.motor = motor;

		this.entities = [];
	}

	addEntity(entity: Entity) {
		this.entities.push(entity);
		this.motor.eventManager.emit(ADDED_ENTITY, { entity });
	}

	removeEntity(entity: Entity) {
		const index = this.entities.indexOf(entity);

		if (index !== -1) {
			this.entities.splice(index, -1);
			this.motor.eventManager.emit(REMOVED_ENTITY, { entity });
		}
	}

	clear() {
		this.entities.forEach(entity => {
			this.motor.eventManager.emit(REMOVED_ENTITY, { entity });
		});

		this.entities = [];
	}
}
