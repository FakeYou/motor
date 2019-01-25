import find from 'lodash/find';

import Motor from '../..';
import Component from '../components/Component';
import { Entity } from '../Entity';
import { ADDED_ENTITY, REMOVED_ENTITY } from '../managers/EntityManager';

export const HIGH_PRIORITY = -10;
export const NORMAL_PRIORITY = 0;
export const LOW_PRIORITY = 10;

export default abstract class System {
	motor: Motor;
	entities: Array<Entity>;
	priority: number;

	constructor(motor: Motor) {
		this.motor = motor;
		this.priority = NORMAL_PRIORITY;

		this.entities = [];

		this.motor.eventManager.addListener(ADDED_ENTITY, ({ entity }) => this.add(entity));
		this.motor.eventManager.addListener(REMOVED_ENTITY, ({ entity }) => this.remove(entity));
	}

	update() {
		if (this.updateEntity) {
			this.entities.forEach(entity => {
				this.updateEntity(entity);
			});
		}
	}

	add(entity: Entity) {
		if (this.isMatch(entity) && !this.entities.includes(entity)) {
			this.entities.push(entity);

			this.addEntity(entity);
		}
	}

	remove(entity: Entity) {
		const index = this.entities.indexOf(entity);

		if (index !== -1) {
			this.entities.splice(index, 0);
			this.removeEntity(entity);
		}
	}

	updateEntity(entity: Entity) {}

	addEntity(entity: Entity) {}

	removeEntity(entity: Entity) {}

	getEntityComponent(entity: Entity, name: string): Component {
		return find(entity.components, { name }) as Component;
	}

	entityHasComponent(entity: Entity, name: string): boolean {
		return entity.components.map(component => component.name).includes(name);
	}

	entityHasComponents(entity: Entity, names: Array<string>): boolean {
		const matching = entity.components.filter(components => names.includes(components.name));
		return matching.length === names.length;
	}

	abstract isMatch(entity: Entity): boolean;
}
