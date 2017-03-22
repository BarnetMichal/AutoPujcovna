import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { CarFormComponent } from './components/car/cars-form.component';
import { UserFormComponent } from './components/user/user-from.component';
import { CarRentFormComponent } from './components/carRent/car-rent-form.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'cars',
        component: CarFormComponent
    },
    {
        path: 'users',
        component: UserFormComponent
    },
    {
        path: 'carRent',
        component: CarRentFormComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
