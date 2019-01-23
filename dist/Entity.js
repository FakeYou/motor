"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Entity = /** @class */ (function () {
    function Entity(motor, name) {
        this.motor = motor;
        this.name = name;
        this.components = {};
    }
    Entity.prototype.hasComponent = function (name) {
        return !!this.components[name];
    };
    Entity.prototype.setComponent = function (name, component) {
        var isNewComponent = !this.hasComponent(name);
        this.components[name] = component;
        if (isNewComponent) {
            this.motor.updateSystemEntities();
        }
    };
    Entity.prototype.deleteComponent = function (name) {
        if (this.hasComponent(name)) {
            delete this.components[name];
            this.motor.updateSystemEntities();
        }
    };
    return Entity;
}());
exports.default = Entity;
//# sourceMappingURL=Entity.js.map