"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function range(from, to) {
    var length = Math.ceil(Math.abs(to - from));
    var range = new Array(length);
    var dir = to > from ? 1 : -1;
    for (var i = 0; i <= length; i++) {
        range[i] = from + i * dir;
    }
    return range;
}
exports.range = range;
//# sourceMappingURL=helpers.js.map