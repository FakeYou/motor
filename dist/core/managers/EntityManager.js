"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADDED_ENTITY = 'entity_manager.add';
exports.REMOVED_ENTITY = 'entity_manager.remove';
var EntityManager = /** @class */ (function () {
    function EntityManager(motor) {
        this.motor = motor;
        this.entities = [];
    }
    EntityManager.prototype.addEntity = function (entity) {
        this.entities.push(entity);
        this.motor.eventManager.emit(exports.ADDED_ENTITY, { entity: entity });
    };
    EntityManager.prototype.removeEntity = function (entity) {
        var index = this.entities.indexOf(entity);
        if (index !== -1) {
            this.entities.splice(index, -1);
            this.motor.eventManager.emit(exports.REMOVED_ENTITY, { entity: entity });
        }
    };
    EntityManager.prototype.clear = function () {
        var _this = this;
        this.entities.forEach(function (entity) {
            _this.motor.eventManager.emit(exports.REMOVED_ENTITY, { entity: entity });
        });
        this.entities = [];
    };
    return EntityManager;
}());
exports.default = EntityManager;
//# sourceMappingURL=EntityManager.js.map