/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {SquarePuzzleComponent} from './square-puzzle.component';

describe('SquarePuzzleComponent', () => {
    let component: SquarePuzzleComponent;
    let fixture: ComponentFixture<SquarePuzzleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SquarePuzzleComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SquarePuzzleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
