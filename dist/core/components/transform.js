"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = __importStar(require("three"));
function transform(position, scale, rotation) {
    return {
        name: 'transform',
        position: position || new THREE.Vector3(0, 0, 0),
        scale: scale || new THREE.Vector3(1, 1, 1),
        rotation: rotation || new THREE.Euler(0, 0, 0, 'XYZ')
    };
}
exports.default = transform;
//# sourceMappingURL=transform.js.map