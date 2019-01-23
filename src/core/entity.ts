import Component from './components/component';
import nanoid = require('nanoid');

export interface Entity {
	id: string;
	components: Array<Component>;
}

export default function createEntity(components: Array<Component>): Entity {
	return {
		id: nanoid(),
		components: components
	};
}
