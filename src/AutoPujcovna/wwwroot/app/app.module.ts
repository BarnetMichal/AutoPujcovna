import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { FormsModule ,ReactiveFormsModule    } from '@angular/forms';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Headers, RequestOptions, BaseRequestOptions} from '@angular/http';

import { HomeComponent } from './components/home.component';
import { CarFormComponent } from './components/car/cars-form.component';
import { UserFormComponent } from './components/user/user-from.component';
import { CarRentFormComponent } from './components/carRent/car-rent-form.component';
import { routing } from './routes';
import { AppComponent }  from './app.component';

import { DataService } from './core/services/data.service';
import { CarService } from './core/services/carService/car.service';
import { UserService } from './core/services/userService/user.service';
import { CarRentService } from './core/services/carRentService/car-rent.service';
import { UtilityService } from './core/services/utility.service';
import { NotificationService } from './core/services/notification.service';
import { KeysPipe } from './core/common/pretty-print.pipe';


class AppBaseRequestOptions extends BaseRequestOptions {
    headers: Headers = new Headers();

    constructor() {
        super();
        this.headers.append('Content-Type', 'application/json');
        this.body = '';
    }
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule ,
        HttpModule,
        routing
    ],
    declarations: [AppComponent,HomeComponent,CarFormComponent,UserFormComponent,CarRentFormComponent,KeysPipe],
    providers: [DataService,CarService,UserService,CarRentService, UtilityService, NotificationService,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: RequestOptions, useClass: AppBaseRequestOptions }],
    bootstrap: [AppComponent]
})
export class AppModule { }

