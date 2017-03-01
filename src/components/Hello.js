"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Vue = require("vue");
var vue_class_component_1 = require("vue-class-component");
var axios_1 = require("axios");
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.msg = "Welcome to Your Vue.js App";
        return _this;
    }
    Hello.prototype.created = function () {
        var _this = this;
        axios_1.default.get("/api/hello")
            .then(function (res) {
            _this.msg = res.data.message;
        })
            .catch(function (ex) { return console.log(ex); });
    };
    return Hello;
}(Vue));
Hello = __decorate([
    vue_class_component_1.default({
        name: "Hello",
    })
], Hello);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hello;
