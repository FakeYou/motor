import Motor from '../..';
import { Entity } from '../Entity';
export declare const ADDED_ENTITY = "entity_manager.add";
export declare const REMOVED_ENTITY = "entity_manager.remove";
export default class EntityManager {
    motor: Motor;
    entities: Array<Entity>;
    constructor(motor: Motor);
    addEntity(entity: Entity): void;
    removeEntity(entity: Entity): void;
    clear(): void;
}
