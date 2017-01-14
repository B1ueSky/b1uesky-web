/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {Anniversary2016Component} from './anniversary2016.component';

describe('Anniversary2016Component', () => {
    let component: Anniversary2016Component;
    let fixture: ComponentFixture<Anniversary2016Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Anniversary2016Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Anniversary2016Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
