"use strict";
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
var Vue = require("vue");
var App = require("./App.vue");
var router_1 = require("./router");
require("assets/wijmo.vue2.min");
/* eslint-disable no-new */
new Vue({
    el: "#app",
    router: router_1.default,
    render: function (h) { return h(App); }
});
