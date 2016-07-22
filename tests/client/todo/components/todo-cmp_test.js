/// <reference path="../../../../typings/index.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var testing_1 = require('@angular/core/testing');
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var event_cmp_1 = require('../../../../client/dev/event/components/event-cmp');
var event_service_1 = require('../../../../client/dev/event/services/event-service');
var MockEventService = (function (_super) {
    __extends(MockEventService, _super);
    function MockEventService() {
        _super.apply(this, arguments);
    }
    MockEventService.prototype.getAll = function () {
        return new Observable_1.Observable(function (o) {
            o.next([]);
        });
    };
    MockEventService.prototype.add = function (message) {
        return new Observable_1.Observable(function (o) {
            o.next(message);
        });
    };
    MockEventService.prototype.remove = function (id) {
        return new Observable_1.Observable(function (o) {
            o.next(id);
        });
    };
    return MockEventService;
}(event_service_1.EventService));
testing_1.describe('event_component', function () {
    testing_1.beforeEachProviders(function () { return [core_1.provide(event_service_1.EventService, { useClass: MockEventService })]; });
    testing_1.describe('creation', function () {
        testing_1.it('should create the component correctly', testing_1.async(testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.createAsync(event_cmp_1.EventCmp).then(function (fixture) {
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                testing_1.expect(compiled).toBeDefined();
            });
        })));
        testing_1.it('should inicialize the cmp correctly', testing_1.async(testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.createAsync(event_cmp_1.EventCmp).then(function (fixture) {
                var instance = fixture.debugElement.componentInstance;
                spyOn(instance, '_getAll').and.callFake(function () { });
                fixture.detectChanges();
                testing_1.expect(instance._getAll).toHaveBeenCalled();
            });
        })));
        testing_1.it('should call add correctly', testing_1.async(testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.createAsync(event_cmp_1.EventCmp).then(function (fixture) {
                fixture.detectChanges();
                var instance = fixture.debugElement.componentInstance;
                var _eventMsg = 'yo';
                instance.add(_eventMsg);
            });
        })));
        testing_1.it('should call remove correctly', testing_1.async(testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.createAsync(event_cmp_1.EventCmp).then(function (fixture) {
                fixture.detectChanges();
                var instance = fixture.debugElement.componentInstance;
                var _id = 'abc123';
                instance.remove(_id);
            });
        })));
    });
});
