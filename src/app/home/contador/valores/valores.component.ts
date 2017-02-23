import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-valores',
    templateUrl: './valores.component.html',
    styleUrls: ['./valores.component.scss']
})
export class ValoresComponent implements OnInit {

    @Input() valor: number;
    @Input() legenda: string;

    constructor() { }

    ngOnInit() { }

}
