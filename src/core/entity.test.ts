import createEntity from './entity';
import uniq from 'lodash/uniq';

test('createEntity() is assigned a random id', () => {
	const ids = [];

	for (let i = 0; i < 50; i++) {
		const entity = createEntity([]);

		expect(entity.id).toMatch(/[a-zA-Z0-9\-_]{21}/);
		ids.push(entity.id);
	}

	expect(uniq(ids).length).toBe(50);
});

test('createEntity() returns an object with id and components', () => {
	const entity = createEntity([]);

	expect(entity.id).toMatch(/[a-zA-Z0-9\-_]{21}/);
	expect(entity.components).toEqual([]);
});
