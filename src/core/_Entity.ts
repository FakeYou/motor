import nanoid from 'nanoid';
import isString from 'lodash/isString';
import every from 'lodash/every';

import Motor from '..';
import Component from './components/component';

export const ADDED_COMPONENT = 'entity.components.add';
export const REMOVED_COMPONENT = 'entity.components.remove';

export default abstract class Entity {
	motor: Motor;
	readonly id: string;
	components: {
		[name: string]: Component;
	};

	constructor(motor: Motor) {
		this.motor = motor;
		this.id = nanoid();
		this.components = {};
	}

	update() {}

	addComponent(component: Component) {
		this.components[component.name] = component;
		this.motor.eventManager.emit(ADDED_COMPONENT, { entity: this });
	}

	removeComponent(component: string | Component) {
		if (isString(component)) {
			delete this.components[component as string];
		} else {
			delete this.components[(component as Component).name];
		}

		this.motor.eventManager.emit(REMOVED_COMPONENT, { entity: this });
	}

	getComponent(name: string): Component {
		return this.components[name];
	}

	hasComponent(name: string): boolean {
		return !!this.components[name];
	}

	hasComponents(names: Array<string>): boolean {
		return every(names.map(name => this.hasComponent(name)));
	}
}
