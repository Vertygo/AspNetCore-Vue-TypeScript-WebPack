"use strict";
var Vue = require("vue");
var VueRouter = require("vue-router");
var WijmoTest = require("components/WijmoTest.vue");
Vue.use(VueRouter);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'WijmoTest',
            component: WijmoTest
        }
    ]
});
