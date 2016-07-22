/// <reference path="../../../../typings/index.d.ts" />

import {
  it,
  expect,
  describe,
  inject,
  async,
  TestComponentBuilder,
  beforeEachProviders
} from '@angular/core/testing';

import {
  provide
} from '@angular/core';

import {
  Observable
} from 'rxjs/Observable';

import {EventCmp} from '../../../../client/dev/event/components/event-cmp';
import {EventService} from '../../../../client/dev/event/services/event-service';

class MockEventService extends EventService {
  getAll():Observable<any> {
    return new Observable((o) => {
      o.next([]);
    })
  }

  add(message: string):Observable<any> {
    return new Observable((o) => {
      o.next(message);
    });
  }

  remove(id: string):Observable<any> {
    return new Observable((o) => {
      o.next(id);
    });
  }
}

describe('event_component', () => {
  beforeEachProviders(() => [provide(EventService, {useClass: MockEventService})]);

  describe('creation', () => {
    it('should create the component correctly', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(EventCmp).then((fixture) => {
        fixture.detectChanges();

        let compiled = fixture.debugElement.nativeElement;

        expect(compiled).toBeDefined();
      });
    })));

    it('should inicialize the cmp correctly', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(EventCmp).then((fixture) => {
        let instance = fixture.debugElement.componentInstance;

        spyOn(instance, '_getAll').and.callFake(() => {});

        fixture.detectChanges();

        expect(instance._getAll).toHaveBeenCalled();
      });
    })));

    it('should call add correctly', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(EventCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        let _eventMsg = 'yo';

        instance.add(_eventMsg);
      });
    })));

    it('should call remove correctly', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(EventCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        let _id = 'abc123';

        instance.remove(_id);
      });
    })));
  });
});
