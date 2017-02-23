import {Component, OnInit, Input} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

    @Input() agenda: any;

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit() { }

    trust(url: string): any {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

}
