import Motor from './Motor';
declare class Entity {
    motor: Motor;
    name: string;
    components: {
        [name: string]: any;
    };
    constructor(motor: Motor, name: string);
    hasComponent(name: string): boolean;
    setComponent(name: string, component: any): void;
    deleteComponent(name: string): void;
}
export default Entity;
