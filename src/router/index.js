"use strict";
var Vue = require("vue");
var VueRouter = require("vue-router");
var Hello = require("components/Hello.vue");
Vue.use(VueRouter);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        }
    ]
});
