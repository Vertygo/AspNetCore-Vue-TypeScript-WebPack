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
var wj = require("wijmo/wijmo");
//Vue.config.ignoredElements = ['wj-flex-grid', 'wj-flex-grid-column']
var WijmoTest = (function (_super) {
    __extends(WijmoTest, _super);
    function WijmoTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.view = new wj.ObservableArray();
        return _this;
    }
    WijmoTest.prototype.created = function () {
        this.view = TestData.getData(20);
    };
    ;
    return WijmoTest;
}(Vue));
WijmoTest = __decorate([
    vue_class_component_1.default({
        name: "WijmoTest",
    })
], WijmoTest);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WijmoTest;
var TestData = (function () {
    function TestData(id, name, sales, expenses, downloads, active, date) {
        this.id = id;
        this.name = name;
        this.sales = sales;
        this.expenses = expenses;
        this.downloads = downloads;
        this.active = active;
        this.date = date;
    }
    TestData.getData = function (count) {
        for (var i = 0; i < count; i++) {
            this.testdata.push(new TestData(i, this.names[i % this.names.length], i * 1000, i * 250, Math.random() * 10000, i % 4 == 0, new Date(2014, i % 12, i % 28)));
        }
        return this.testdata;
    };
    ;
    return TestData;
}());
TestData.names = "Test 1,Test 2,Test 2,Test 3,Test 4,Test 5,Test 6,Test 7,Test 8,Test 9,Test 10,Test 11,Test 12,Test 13,Test 14,Test 15,Test 16".split(',');
TestData.startDate = wj.DateTime.addDays(new Date(), -20);
TestData.testdata = new wj.ObservableArray();
