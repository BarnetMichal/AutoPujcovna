import { Injectable } from '@angular/core';
import { Car } from '../../../components/car/car';
import { DataService } from '../data.service';
@Injectable()

export class CarService {
    public dataService: DataService = null;
    private _carGetAPI: string = 'api/Cars/';
    private _carPostAPI: string = 'api/Cars/saveCar/';
    constructor(dataService: DataService) {
        this.dataService = dataService;
    }
    public getCars(callback: (data) => void) {
        this.dataService.set(this._carGetAPI);
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



    public saveCar(car: Car) {
        this.dataService.set(this._carPostAPI);
        return this.dataService.post(JSON.stringify(car)).subscribe(
            res => {
               console.log(res);
            },
            err => {
                console.error(err);
            }
        );

    }
}