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
                    github: 'http://github.com/wgbn',
                    facebook: 'https://facebook.com/wgbnn',
                    twitter: 'https://twitter.com/jebinha'
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
                bio: 'Desenvolvedor PHP desde 2000, vem se especializando em aplicações ricas para web e mobile. Ao longo dos anos vem se aventurando com diversas tecnologias diferentes que vão desde o Adobe Flex até aplicações mobile híbridas.'
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
                bio: 'Além de empreendedor, programador e fã do Raul Seixas, Jonata acredita que a tecnologia pode mudar positivamente a vida das pessoas. Ele está sempre envolvido com comunidade e participa ativamente dos grupos DEVFSA, PHPBA e #horaextra. É bacharel em Sistemas de Informação e pós-graduando em Engenharia de Software pela UNIFACS. É um apaixonado pelo trabalho home office, já trabalhou com equipes distribuídas em Portugal e Estados Unidos. Além disso, trabalha com PHP desde 2009 e recentemente ganhou o título de Zend Certified PHP Engineer.'
            },
        ];
    }

}
