import Motor from '..';
import Component from './components/component';
export declare const ADDED_COMPONENT = "entity.components.add";
export declare const REMOVED_COMPONENT = "entity.components.remove";
export default abstract class Entity {
    motor: Motor;
    readonly id: string;
    components: {
        [name: string]: Component;
    };
    constructor(motor: Motor);
    update(): void;
    addComponent(component: Component): void;
    removeComponent(component: string | Component): void;
    getComponent(name: string): Component;
    hasComponent(name: string): boolean;
    hasComponents(names: Array<string>): boolean;
}
