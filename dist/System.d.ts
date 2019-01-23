import Motor from './Motor';
import Entity from './Entity';
declare class System {
    motor: Motor;
    name: string;
    components: Array<string>;
    handler: (entity: Entity, components: {
        [name: string]: any;
    }) => void;
    constructor(motor: Motor, name: string, components: Array<string>, handler: (entity: Entity, components: {
        [name: string]: any;
    }) => void);
    isCompatible(entity: Entity): boolean;
}
export default System;
