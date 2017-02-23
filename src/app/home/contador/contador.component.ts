import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

    dias: number = 37;
    horas: number = 37;
    minutos: number = 37;
    segundos: number = 37;

    constructor() { }

    ngOnInit() { }

}
