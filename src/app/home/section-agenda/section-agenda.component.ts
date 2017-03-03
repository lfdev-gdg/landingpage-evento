import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-section-agenda',
    templateUrl: './section-agenda.component.html',
    styleUrls: ['./section-agenda.component.scss']
})
export class SectionAgendaComponent implements OnInit {

    agendas: Array<any> = [];

    constructor() { }

    ngOnInit() {
        this.agendas = [
            {
                hora: '08:30',
                nome: 'Danielle Sobrenome',
                titulo: 'Abertura, entenda o GDG Lauro de Freitas',
                imagem: '../../../assets/img/p_danielle.jpg'
            },
            {
                hora: '09:15',
                nome: 'Ramon Mota',
                titulo: 'Comunidade: por onde começar?',
                imagem: '../../../assets/img/p_ramon.jpg'
            },
            {
                hora: '10:00',
                nome: 'Tuane Paixão',
                titulo: 'Android things developer',
                imagem: '../../../assets/img/p_tuane.jpg'
            },
            {
                hora: '10:45',
                nome: 'Walter Gandarella',
                titulo: 'Indo além do mobile com Progressive Web Apps',
                imagem: '../../../assets/img/p_walter.jpg'
            },
            {
                hora: '11:25',
                nome: 'Jonata Weber',
                titulo: 'A onda agora é Funções como Serviço',
                imagem: '../../../assets/img/p_jonata.jpg'
            },
        ];
    }

}
