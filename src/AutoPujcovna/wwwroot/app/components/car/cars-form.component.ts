import { Component, OnInit, Injectable } from '@angular/core';
import { CarService } from '../../core/services/CarService/car.service';
import { Car } from './car';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Column } from '../../core/common/Column';


@Component({
  selector: 'cars-form',
  templateUrl: './app/components/car/cars-form.component.html',
  providers: [CarService]
})
@Injectable()
export class CarFormComponent implements OnInit {
  public carService: CarService = null;

  private cars: Array<Car> = null;
  public car: FormGroup;
  public columns: Array<Column> = [];
  private fb: FormBuilder = null;

  constructor(private _carService: CarService, fb: FormBuilder) {
    this.carService = _carService;

    this.columns.push(new Column('Name', 'Car Name'));
    this.columns.push(new Column('LicencePlate', 'licence Plate'));
    this.car = fb.group({
      ID: 0,
      Name: [null, Validators.compose([Validators.required])],
      LicencePlate: [null, Validators.compose([Validators.required])]
    });
  }



  ngOnInit() {
    this.getCars();
  }

  private onSubmit(car:Car) {
    this.carService.saveCar(car);
    this.getCars();
  }

  private getCars() {
    this.carService.getCars((data) => {
      this.cars = data;
    });
  }


}