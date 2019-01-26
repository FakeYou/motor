import Motor from './Motor';

export default Motor;

export { default as Motor } from './Motor';
export { default as createEntity, Entity } from './core/entity';
export { default as Scene } from './core/Scene';
export { default as System } from './core/systems/System';
export { default as Component } from './core/components/Component';

export { default as Spritesheet, Options } from './core/assets/Spritesheet';
export { default as Animations } from './core/assets/Animations';

import * as components from './core/components';
export { components };
