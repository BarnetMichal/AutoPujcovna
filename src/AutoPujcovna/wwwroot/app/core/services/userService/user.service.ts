import { Injectable } from '@angular/core';
import { User } from '../../../components/user/user';
import { DataService } from '../data.service';

@Injectable()
export class UserService {
    private _userGetAPI: string = 'api/Users/';
    private _userPostAPI: string = 'api/Users/saveUser/';
    public dataService: DataService;
    constructor(dataService: DataService) {
        this.dataService = dataService;
    }
    public getUsers(callback: (data) => void) {
        this.dataService.set(this._userGetAPI);
        return this.dataService.get()
            .subscribe(
            res => {
                var data: any = res.json();
                callback(data.Items);
            },
            err => {
                console.error(err);
            }
            );
    }



    public saveUser(user: User) {
        this.dataService.set(this._userPostAPI);
        return this.dataService.post(JSON.stringify(user)).subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.error(err);
            }
        );

    }
}