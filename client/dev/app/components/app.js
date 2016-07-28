"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var button_1 = require('@angular2-material/button');
var toolbar_1 = require('@angular2-material/toolbar');
var sidenav_1 = require('@angular2-material/sidenav');
var list_1 = require('@angular2-material/list');
var icon_1 = require('@angular2-material/icon');
var router_1 = require('@angular/router');
var App = (function () {
    function App(router) {
        this.router = router;
        this.registered = localStorage.getItem('id_token');
    }
    App.prototype.logout = function () {
        localStorage.removeItem('id_token');
        this.registered = false;
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'app/templates/app.html',
            styleUrls: ['app/styles/app.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                toolbar_1.MD_TOOLBAR_DIRECTIVES,
                button_1.MD_BUTTON_DIRECTIVES,
                sidenav_1.MD_SIDENAV_DIRECTIVES,
                list_1.MD_LIST_DIRECTIVES,
                icon_1.MdIcon
            ],
            providers: [icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], App);
    return App;
}());
exports.App = App;
