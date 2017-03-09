import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-section-palestrantes',
    templateUrl: './section-palestrantes.component.html',
    styleUrls: ['./section-palestrantes.component.scss']
})
export class SectionPalestrantesComponent implements OnInit {

    palestrantes: Array<any> = [];

    constructor() { }

    ngOnInit() {
        this.palestrantes = [
            {
                nome: 'Danielle',
                sobrenome: 'Teixeira',
                imagem: '../../../../assets/img/p_danielle.jpg',
                redes: {
                    github: 'http://github.com/dannyserena',
                    //facebook: 'https://facebook.com/wgbnn',
                    twitter: 'https://twitter.com/dannyserena'
                },
                bio: 'Analista de Requisitos, entusiasta por desenvolvimento mobile e fã de Computação Ubíqua. Graduada em Engenharia da Computação, Pós-graduada em Banco de Dados e Pós-Graduanda em Desenvolvimento Mobile.'
            },
            {
                nome: 'Ramon',
                sobrenome: 'Mota',
                imagem: '../../../../assets/img/p_ramon.jpg',
                redes: {
                    //github: 'http://github.com/wgbn',
                    facebook: 'https://www.facebook.com/ramon.mota.9461',
                    twitter: 'https://twitter.com/ramonmluz'
                },
                bio: 'Desenvolvedor, especialista e fã da computação Ubíqua, atualmente aficionado pelo desenvolvimento para Smartwatches através do Android Wear.'
            },
            {
                nome: 'Tuane',
                sobrenome: 'Paixão',
                imagem: '../../../../assets/img/p_tuane.jpg',
                redes: {
                    //github: 'http://github.com/wgbn',
                    facebook: 'https://www.facebook.com/tuane.paixao.9',
                    twitter: 'https://twitter.com/tuanelisboa'
                },
                bio: 'Mestranda em Engenharia de sistemas e produtos. Especialista em gestão de projetos. Engenheira eletricista . Membro do COUNCIL Iot e Woman Techmaker.  Amante por Middleware,  Internet das Coisas e Software Livres.'
            },
            {
                nome: 'Walter',
                sobrenome: 'Gandarella',
                imagem: '../../../../assets/img/p_walter.jpg',
                redes: {
                    github: 'http://github.com/wgbn',
                    facebook: 'https://facebook.com/wgbnn',
                    twitter: 'https://twitter.com/jebinha'
                },
                bio: 'Desenvolvedor PHP desde 2000, especialista em aplicações ricas para web e mobile. Ao longo dos anos vem se especializando em diversas tecnologias diferentes que vão desde o Adobe Flex até aplicações mobile híbridas.'
            },
            {
                nome: 'Jonata',
                sobrenome: 'Weber',
                imagem: '../../../../assets/img/p_jonata.jpg',
                redes: {
                    github: 'https://github.com/jonataa',
                    //facebook: 'https://facebook.com/wgbnn',
                    twitter: 'https://twitter.com/jonataweber'
                },
                bio: 'Empreendedor, programador e fã do Raul Seixas, integrante das comunidades: DEVFSA, PHPBA e #horaextra. É bacharel em SI e pós-graduando em Engenharia de Software. Trabalhou com equipes distribuídas em Portugal e Estados Unidos.'
            },
        ];
    }

    setSection(): void {
        if (sessionStorage.getItem('sectionPalestrantes') === null) {
            sessionStorage.setItem('sectionPalestrantes', 'true');
            ga('send', 'event', 'Navegação', 'Visualizou', 'Rolou até os palestrantes');
        }
    }

}
