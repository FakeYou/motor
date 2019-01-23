"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADDED_SYSTEM = 'system_manager.add';
exports.REMOVED_SYSTEM = 'system_manager.remove';
var SystemManager = /** @class */ (function () {
    function SystemManager(motor) {
        this.motor = motor;
        this.systems = [];
    }
    SystemManager.prototype.update = function () {
        this.systems.forEach(function (system) {
            system.update();
        });
    };
    SystemManager.prototype.addSystem = function (system) {
        if (this.systems.includes(system)) {
            return;
        }
        this.systems.push(system);
        this.systems.sort(function (a, b) { return a.priority - b.priority; });
        this.motor.eventManager.emit(exports.ADDED_SYSTEM, { system: system });
    };
    SystemManager.prototype.removeSystem = function (system) {
        var index = this.systems.indexOf(system);
        if (index !== -1) {
            this.systems.splice(index, -1);
            this.motor.eventManager.emit(exports.REMOVED_SYSTEM, { system: system });
        }
    };
    SystemManager.prototype.clear = function () {
        var _this = this;
        this.systems.forEach(function (system) {
            _this.motor.eventManager.emit(exports.REMOVED_SYSTEM, { system: system });
        });
        this.systems = [];
    };
    return SystemManager;
}());
exports.default = SystemManager;
//# sourceMappingURL=SystemManager.js.map