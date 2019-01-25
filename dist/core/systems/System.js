"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var find_1 = __importDefault(require("lodash/find"));
var EntityManager_1 = require("../managers/EntityManager");
exports.HIGH_PRIORITY = -10;
exports.NORMAL_PRIORITY = 0;
exports.LOW_PRIORITY = 10;
var System = /** @class */ (function () {
    function System(motor) {
        var _this = this;
        this.motor = motor;
        this.priority = exports.NORMAL_PRIORITY;
        this.entities = [];
        this.motor.eventManager.addListener(EntityManager_1.ADDED_ENTITY, function (_a) {
            var entity = _a.entity;
            return _this.add(entity);
        });
        this.motor.eventManager.addListener(EntityManager_1.REMOVED_ENTITY, function (_a) {
            var entity = _a.entity;
            return _this.remove(entity);
        });
    }
    System.prototype.update = function () {
        var _this = this;
        if (this.updateEntity) {
            this.entities.forEach(function (entity) {
                _this.updateEntity(entity);
            });
        }
    };
    System.prototype.add = function (entity) {
        if (this.isMatch(entity) && !this.entities.includes(entity)) {
            this.entities.push(entity);
            this.addEntity(entity);
        }
    };
    System.prototype.remove = function (entity) {
        var index = this.entities.indexOf(entity);
        if (index !== -1) {
            this.entities.splice(index, 0);
            this.removeEntity(entity);
        }
    };
    System.prototype.updateEntity = function (entity) { };
    System.prototype.addEntity = function (entity) { };
    System.prototype.removeEntity = function (entity) { };
    System.prototype.getEntityComponent = function (entity, name) {
        return find_1.default(entity.components, { name: name });
    };
    System.prototype.entityHasComponent = function (entity, name) {
        return entity.components.map(function (component) { return component.name; }).includes(name);
    };
    System.prototype.entityHasComponents = function (entity, names) {
        var matching = entity.components.filter(function (components) { return names.includes(components.name); });
        return matching.length === names.length;
    };
    return System;
}());
exports.default = System;
//# sourceMappingURL=System.js.map