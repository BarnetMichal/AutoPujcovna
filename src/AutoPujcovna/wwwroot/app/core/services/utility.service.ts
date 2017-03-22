import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UtilityService {

    private _router: Router;

    constructor(router: Router) {
        this._router = router;
    }

    navigate(path: string) {
        this._router.navigate([path]);
    }
}