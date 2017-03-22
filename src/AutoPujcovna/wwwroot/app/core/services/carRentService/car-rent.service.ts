import { Injectable } from '@angular/core';
import { Car } from '../../../components/car/car';
import { User } from '../../../components/user/user';
import { CarRent } from '../../../components/carRent/carRent';
import { DataService } from '../data.service';
@Injectable()

export class CarRentService {
    public dataService: DataService = null;
    private _carRentGetAPI: string = 'api/CarRent/';
    private _carRentPostAPI: string = 'api/CarRent/rentCar/';
    constructor(dataService: DataService) {
        this.dataService = dataService;
    }
    public getCarRents(callback: (data) => void) {
        this.dataService.set(this._carRentGetAPI);
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



    public saveCarRent(user: User, car: Car) {
        this.dataService.set(this._carRentPostAPI);
        let carRent: CarRent = {
            User: user,
            Car: car
        };

        return this.dataService.post(JSON.stringify(carRent)).subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.error(err);
            }
        );

    }

    public  delete(iduser: Number,idCar: Number) {
        this.dataService.set(this._carRentGetAPI);
        return this.dataService.delete(iduser,idCar).subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.error(err);
            }
        );
    }
}