"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nanoid = require("nanoid");
function createEntity(components) {
    return {
        id: nanoid(),
        components: components
    };
}
exports.default = createEntity;
//# sourceMappingURL=Entity.js.map