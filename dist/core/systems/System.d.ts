import Motor from '../..';
import Component from '../components/Component';
import { Entity } from '../Entity';
export declare const HIGH_PRIORITY = -10;
export declare const NORMAL_PRIORITY = 0;
export declare const LOW_PRIORITY = 10;
export default abstract class System {
    motor: Motor;
    entities: Array<Entity>;
    priority: number;
    constructor(motor: Motor);
    update(): void;
    add(entity: Entity): void;
    remove(entity: Entity): void;
    updateEntity(entity: Entity): void;
    addEntity(entity: Entity): void;
    removeEntity(entity: Entity): void;
    getEntityComponent(entity: Entity, name: string): Component;
    entityHasComponents(entity: Entity, names: Array<string>): boolean;
    abstract isMatch(entity: Entity): boolean;
}
