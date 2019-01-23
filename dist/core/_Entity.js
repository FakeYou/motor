"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nanoid_1 = __importDefault(require("nanoid"));
var isString_1 = __importDefault(require("lodash/isString"));
var every_1 = __importDefault(require("lodash/every"));
exports.ADDED_COMPONENT = 'entity.components.add';
exports.REMOVED_COMPONENT = 'entity.components.remove';
var Entity = /** @class */ (function () {
    function Entity(motor) {
        this.motor = motor;
        this.id = nanoid_1.default();
        this.components = {};
    }
    Entity.prototype.update = function () { };
    Entity.prototype.addComponent = function (component) {
        this.components[component.name] = component;
        this.motor.eventManager.emit(exports.ADDED_COMPONENT, { entity: this });
    };
    Entity.prototype.removeComponent = function (component) {
        if (isString_1.default(component)) {
            delete this.components[component];
        }
        else {
            delete this.components[component.name];
        }
        this.motor.eventManager.emit(exports.REMOVED_COMPONENT, { entity: this });
    };
    Entity.prototype.getComponent = function (name) {
        return this.components[name];
    };
    Entity.prototype.hasComponent = function (name) {
        return !!this.components[name];
    };
    Entity.prototype.hasComponents = function (names) {
        var _this = this;
        return every_1.default(names.map(function (name) { return _this.hasComponent(name); }));
    };
    return Entity;
}());
exports.default = Entity;
//# sourceMappingURL=_Entity.js.map