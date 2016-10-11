import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Rx";

@Injectable()
export class GuardService implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean {
        return Observable.create(observer => {
            this.dummyAuthFunction((auth)=> {
                if (!auth) {
                    this.router.navigate(['unauthorized']);
                }
                observer.next(auth);
                observer.complete();
            });
        });
    }

    dummyAuthFunction(callback){
        callback(true);
    }
}