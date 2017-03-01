"use strict";
var Vue = require("vue");
var Router = require("vue-router");
var Hello = require("components/Hello.vue");
Vue.use(Router);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        }
    ]
});
