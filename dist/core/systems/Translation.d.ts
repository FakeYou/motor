import System from './System';
import { Entity } from '../Entity';
export default class TranslationSystem extends System {
    isMatch(entity: Entity): boolean;
    updateEntity(entity: Entity): void;
}
