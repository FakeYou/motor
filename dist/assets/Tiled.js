"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tiled = /** @class */ (function () {
    function Tiled(data) {
        this.height = data.height;
        this.width = data.width;
        this.infinite = data.infinite;
        this.tileHeight = data.tileheight;
        this.tileWidth = data.tilewidth;
        this.tilesets = {};
    }
    Tiled.prototype.setTilesetImage = function (name, image) {
    };
    return Tiled;
}());
exports.default = Tiled;
//# sourceMappingURL=Tiled.js.map