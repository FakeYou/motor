"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = __importStar(require("three"));
var System_1 = __importDefault(require("./System"));
var SpriteSystem = /** @class */ (function (_super) {
    __extends(SpriteSystem, _super);
    function SpriteSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpriteSystem.prototype.isMatch = function (entity) {
        return this.entityHasComponent(entity, 'sprite');
    };
    SpriteSystem.prototype.addEntity = function (entity) {
        var sprite = this.getEntityComponent(entity, 'sprite');
        if (!sprite.tile) {
            var _a = sprite.spritesheet, material = _a.material, tileHeight = _a.tileHeight, tileWidth = _a.tileWidth;
            sprite.tile = new THREE.Mesh(new THREE.PlaneGeometry(tileWidth / SpriteSystem.PIXEL_SCALE, tileHeight / SpriteSystem.PIXEL_SCALE), material);
            if (this.motor.options.debug) {
                sprite.tile.add(new THREE.Mesh(new THREE.PlaneGeometry(tileWidth / SpriteSystem.PIXEL_SCALE, tileHeight / SpriteSystem.PIXEL_SCALE), new THREE.MeshNormalMaterial({ wireframe: true })));
            }
        }
        this.motor.scene.add(sprite.tile);
    };
    SpriteSystem.prototype.updateEntity = function (entity) {
        var _a = this.getEntityComponent(entity, 'sprite'), spritesheet = _a.spritesheet, tile = _a.tile, index = _a.index;
        var sprite = spritesheet.sprite(index);
        if (sprite && tile) {
            tile.material = sprite.material;
            tile.geometry.faceVertexUvs[0].forEach(function (face, i) {
                face.forEach(function (corner, j) {
                    var signX = SpriteSystem.CORNERS[i][j].x;
                    var signY = SpriteSystem.CORNERS[i][j].y;
                    corner.x = sprite.uv.x + sprite.size.x * signX;
                    corner.y = sprite.uv.y - sprite.size.y * signY;
                });
            });
            tile.geometry.uvsNeedUpdate = true;
        }
    };
    SpriteSystem.prototype.removeEntity = function (entity) {
        var sprite = this.getEntityComponent(entity, 'sprite');
        if (sprite.tile) {
            this.motor.scene.remove(sprite.tile);
        }
    };
    SpriteSystem.PIXEL_SCALE = 16;
    SpriteSystem.CORNERS = [
        [{ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 1 }],
        [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }]
    ];
    return SpriteSystem;
}(System_1.default));
exports.default = SpriteSystem;
//# sourceMappingURL=Sprite.js.map