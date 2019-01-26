"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Motor_1 = __importDefault(require("./Motor"));
exports.default = Motor_1.default;
var Motor_2 = require("./Motor");
exports.Motor = Motor_2.default;
var entity_1 = require("./core/entity");
exports.createEntity = entity_1.default;
var Scene_1 = require("./core/Scene");
exports.Scene = Scene_1.default;
var System_1 = require("./core/systems/System");
exports.System = System_1.default;
var Spritesheet_1 = require("./core/assets/Spritesheet");
exports.Spritesheet = Spritesheet_1.default;
var Animations_1 = require("./core/assets/Animations");
exports.Animations = Animations_1.default;
var components = __importStar(require("./core/components"));
exports.components = components;
//# sourceMappingURL=index.js.map