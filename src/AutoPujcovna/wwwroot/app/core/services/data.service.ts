import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {

    public _baseUri: string;

    constructor(public http: Http) {

    }

    set(baseUri: string): void {
        this._baseUri = baseUri;
    }

    get() {
        var uri = this._baseUri;

        return this.http.get(this._baseUri)
            // ...and calling .json() on the response to return data
            .map(response => (<Response>response))
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    post(data?: any) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this._baseUri, data, headers).map((res: Response) => res);
    }

    delete(idF: Number, idS: Number) {
        return this.http.delete(this._baseUri + idF.toString() + '/' + idS.toString())
            .map(response => <any>(<Response>response).json())
    }


}