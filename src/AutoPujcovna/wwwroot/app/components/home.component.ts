import { Component } from '@angular/core';

export class Column {
    name: string;
    descr: string;
    constructor(name, descr) {
        this.name = name;
        this.descr = descr;
    }
}

@Component({
    selector: 'home',
    templateUrl: './app/components/home.component.html'
})


export class HomeComponent {

   
    constructor() {
    }

}