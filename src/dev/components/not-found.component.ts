import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'notfound',
    template: `
    <h1>404 Not Found</h1>
    <h3>The Requested page does not exists</h3>
    `
})
export class NotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}