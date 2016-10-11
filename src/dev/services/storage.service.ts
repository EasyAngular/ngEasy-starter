import {Injectable} from "@angular/core";
@Injectable()
export class StorageService {
    private prefix: string = 'weekly_planner_';

    set(key, value){
        key = this.prefix + key;
        localStorage.setItem(key, JSON.stringify(value));
    }

    get(key){
        key = this.prefix + key;
        return JSON.parse(localStorage.getItem(key));
    }

    unset(key){
        key = this.prefix + key;
        localStorage.removeItem(key);
    }

    isset(key){
        key = this.prefix + key;
        return (localStorage.getItem(key) !== null);
    }
}