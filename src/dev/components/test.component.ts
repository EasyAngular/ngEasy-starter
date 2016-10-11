import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'test',
    template: `<h1>This is a test component</h1>`
})
export class TestComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }

}