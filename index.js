"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vinyl_fs_1 = require("vinyl-fs");
var CreateTask = /** @class */ (function () {
    function CreateTask(glob, options) {
        this._common = function () { return undefined; };
        this._developing = function () { return undefined; };
        this._production = function () { return undefined; };
        this._src = function () { return vinyl_fs_1.src(glob, options); };
    }
    Object.defineProperty(CreateTask.prototype, "common", {
        set: function (callback) {
            var _this = this;
            this._common = function () { return callback(_this._src()); };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateTask.prototype, "developing", {
        set: function (callback) {
            var _this = this;
            this._developing = function () { return callback(_this._common()); };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateTask.prototype, "production", {
        set: function (callback) {
            var _this = this;
            this._production = function () { return callback(_this._common()); };
        },
        enumerable: false,
        configurable: true
    });
    CreateTask.prototype.result = function (mode) {
        var _this = this;
        return mode === 'prod'
            ? function () { return (_this._production() || _this._developing() || _this._common()); }
            : function () { return (_this._developing() || _this._production() || _this._common()); };
    };
    return CreateTask;
}());
exports.default = CreateTask;
