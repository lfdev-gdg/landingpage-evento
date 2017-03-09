import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-section-apoio',
    templateUrl: './section-apoio.component.html',
    styleUrls: ['./section-apoio.component.scss']
})
export class SectionApoioComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    setSection(): void {
        if (sessionStorage.getItem('sectionApoio') === null) {
            sessionStorage.setItem('sectionApoio', 'true');
            ga('send', 'event', 'Navegação', 'Visualizou', 'Rolou até o apoio');
        }
    }

}
