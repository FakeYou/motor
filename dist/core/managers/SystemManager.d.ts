import Motor from '../..';
import System from '../systems/System';
export declare const ADDED_SYSTEM = "system_manager.add";
export declare const REMOVED_SYSTEM = "system_manager.remove";
export default class SystemManager {
    motor: Motor;
    systems: Array<System>;
    constructor(motor: Motor);
    update(): void;
    addSystem(system: System): void;
    removeSystem(system: System): void;
    clear(): void;
}
