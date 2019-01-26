import System from './System';
import { Entity } from '../entity';
export default class BillboardSystem extends System {
    isMatch(entity: Entity): boolean;
    updateEntity(entity: Entity): void;
}
