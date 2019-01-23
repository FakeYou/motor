"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function createSpriteSystem(motor, options) {
    if (options === void 0) { options = {}; }
    var opts = __assign({ pixelScale: 16 }, options);
    console.log(opts);
    return motor.system('sprite', ['sprite'], function (entity) {
        console.log(entity);
    });
}
exports.default = createSpriteSystem;
//# sourceMappingURL=sprite.js.map