import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'unauthorized',
    template: `
        <h1>You are not authorized to access this page</h1>
        <h4>Contact the administrator in order to get access.</h4>
    `
})
export class UnauthorizedComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}