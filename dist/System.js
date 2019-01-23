"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var System = /** @class */ (function () {
    function System(motor, name, components, handler) {
        this.motor = motor;
        this.name = name;
        this.components = components;
        this.handler = handler;
    }
    System.prototype.isCompatible = function (entity) {
        var matchingComponents = this.components.filter(function (component) { return entity.hasComponent(component); });
        return matchingComponents.length === this.components.length;
    };
    return System;
}());
exports.default = System;
//# sourceMappingURL=System.js.map