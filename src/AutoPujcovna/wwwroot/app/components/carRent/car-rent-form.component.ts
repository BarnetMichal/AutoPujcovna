import { Component, OnInit, Injectable, Output, Input, EventEmitter } from '@angular/core';
import { CarRentService } from '../../core/services/carRentService/car-rent.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Column } from '../../core/common/Column';
import { CarRent } from './carRent';
import { UserService } from '../../core/services/userService/user.service';
import { CarService } from '../../core/services/CarService/car.service';
import { User } from '../user/user';
import { Car } from '../car/car';

@Component({
    selector: 'car-rent-form',
    templateUrl: './app/components/carRent/car-rent-form.component.html',
    providers: [CarRentService, UserService, CarService]
})
@Injectable()
export class CarRentFormComponent implements OnInit {
    private carRentService: CarRentService = null;
    private userService: UserService = null;
    private carService: CarService = null;
    private rentCar: CarRent = null;
    private rentCars: CarRent[] = null;
    private users: Array<User> = null;
    private cars: Array<Car> = null;
    private selectedCar: Car = null;
    private selectedUser: User = null;
    private myjson: any = JSON;
    private columns: Array<Column> = [];
    private valid: boolean = true;

    constructor(carRentService: CarRentService, userService: UserService, carService: CarService) {
        this.carRentService = carRentService;
        this.userService = userService;
        this.carService = carService;
        //popisky v idealni pripade v lokalizacnim souboru
        this.columns.push(new Column('Name', 'Car Name'));
        this.columns.push(new Column('LicencePlate', 'licence Plate'));
        this.columns.push(new Column('FirstName', 'first name'));
        this.columns.push(new Column('LastName', 'last name'));
    }

    ngOnInit() {
        this.getCarRent();
        this.getusers();
        this.getCars();
    }
    private onSubmit() {
        if (this.selectedUser != null && this.selectedCar != null) {
            this.carRentService.saveCarRent(this.selectedUser, this.selectedCar);
            this.getCarRent();
            this.valid = true;
        } else {
            this.valid = false;
        }

    }
    public Delete(idUser: Number, idCar: Number) {
        this.carRentService.delete(idUser, idCar)
        this.getCarRent();
    }
    private getCarRent() {
        this.carRentService.getCarRents((data) => {
            this.rentCars = data;
        });
    }

    private getusers() {
        this.userService.getUsers((data) => {
            this.users = data;
        });
    }
    private getCars() {
        this.carService.getCars((data) => {
            this.cars = data;
        });
    }
}