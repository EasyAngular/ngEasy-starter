import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <header>
        <a class="menu-item" routerLinkActive="active" routerLink="/home">Home</a>
        <a class="menu-item" routerLinkActive="active" routerLink="/test">Test</a>
        <a class="menu-item" routerLinkActive="active" routerLink="/badlink">Bad Link</a>
    </header>
    <main>
        <router-outlet></router-outlet>
    </main>`
})
export class AppComponent {

}