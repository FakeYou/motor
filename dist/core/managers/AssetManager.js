"use strict";
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
var Spritesheet_1 = __importDefault(require("../assets/Spritesheet"));
var JsonLoader_1 = __importDefault(require("./loaders/JsonLoader"));
exports.LOAD_START = 'assets.load_start';
exports.LOAD_END = 'assets.load_end';
var AssetManager = /** @class */ (function () {
    function AssetManager(motor) {
        var _this = this;
        this.motor = motor;
        this.assets = {};
        this.loadingManager = new THREE.LoadingManager();
        this.loadingManager.onStart = function () {
            _this.motor.eventManager.emit(exports.LOAD_START);
        };
        this.loadingManager.onLoad = function () {
            _this.motor.eventManager.emit(exports.LOAD_END);
        };
        this.loadingManager.onError = function (url) {
            console.warn('Error loading assets', url);
        };
        this.textureLoader = new THREE.TextureLoader(this.loadingManager);
        this.fileLoader = new THREE.FileLoader(this.loadingManager);
        this.jsonLoader = new JsonLoader_1.default(this.loadingManager);
    }
    AssetManager.prototype.loadTexture = function (name, url) {
        var _this = this;
        this.textureLoader.load(url, function (texture) {
            _this.assets[name] = texture;
        });
    };
    AssetManager.prototype.loadSprite = function (name, url) {
        var _this = this;
        this.textureLoader.load(url, function (texture) {
            texture.magFilter = THREE.NearestFilter;
            texture.minFilter = THREE.NearestMipMapNearestFilter;
            var material = new THREE.MeshBasicMaterial();
            material.map = texture;
            _this.assets[name] = material;
        });
    };
    AssetManager.prototype.loadSpritesheet = function (name, url, columns, rows) {
        var _this = this;
        this.textureLoader.load(url, function (texture) {
            _this.assets[name] = new Spritesheet_1.default(texture, columns, rows);
        });
    };
    AssetManager.prototype.loadAseprite = function (name, image, meta) {
        var _this = this;
        this.textureLoader.load(image, function (texture) {
            _this.jsonLoader.load(meta, function (json) {
                console.log(name, { texture: texture, json: json });
            });
        });
    };
    return AssetManager;
}());
exports.default = AssetManager;
//# sourceMappingURL=AssetManager.js.map