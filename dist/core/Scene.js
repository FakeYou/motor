"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssetManager_1 = require("./managers/AssetManager");
exports.SCENE_LOAD = 'scene.load';
exports.SCENE_SETUP = 'scene.setup';
exports.SCENE_DISPOSE = 'scene.dispose';
var Scene = /** @class */ (function () {
    function Scene(motor) {
        this.motor = motor;
    }
    Scene.prototype.start = function () {
        var _this = this;
        var onLoad = function () {
            if (_this.setup) {
                _this.motor.eventManager.emit(exports.SCENE_SETUP);
                _this.setup();
            }
        };
        this.motor.eventManager.emit(exports.SCENE_LOAD);
        this.motor.eventManager.once(AssetManager_1.LOAD_END, onLoad);
        if (this.load) {
            this.load();
        }
        else {
            onLoad();
        }
    };
    return Scene;
}());
exports.default = Scene;
//# sourceMappingURL=Scene.js.map