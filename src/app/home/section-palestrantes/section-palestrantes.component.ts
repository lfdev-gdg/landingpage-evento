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
                    github: 'http://github.com/wgbn',
                    facebook: 'https://facebook.com/wgbnn',
                    twitter: 'https://twitter.com/jebinha'
                },
                bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid debitis dicta eaque facere fuga harum iusto laborum neque nisi officia optio reiciendis reprehenderit tempora voluptas, voluptates voluptatum! Corporis, ipsa?'
            },
            {
                nome: 'Ramon',
                sobrenome: 'Mota',
                imagem: '../../../../assets/img/p_ramon.jpg',
                redes: {
                    github: 'http://github.com/wgbn',
                    facebook: 'https://facebook.com/wgbnn',
                    twitter: 'https://twitter.com/jebinha'
                },
                bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid debitis dicta eaque facere fuga harum iusto laborum neque nisi officia optio reiciendis reprehenderit tempora voluptas, voluptates voluptatum! Corporis, ipsa?'
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
                bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid debitis dicta eaque facere fuga harum iusto laborum neque nisi officia optio reiciendis reprehenderit tempora voluptas, voluptates voluptatum! Corporis, ipsa?'
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
                bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid debitis dicta eaque facere fuga harum iusto laborum neque nisi officia optio reiciendis reprehenderit tempora voluptas, voluptates voluptatum! Corporis, ipsa?'
            },
            {
                nome: 'Jonata',
                sobrenome: 'Weber',
                imagem: '../../../../assets/img/p_jonata.jpg',
                redes: {
                    github: 'http://github.com/wgbn',
                    facebook: 'https://facebook.com/wgbnn',
                    twitter: 'https://twitter.com/jebinha'
                },
                bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid debitis dicta eaque facere fuga harum iusto laborum neque nisi officia optio reiciendis reprehenderit tempora voluptas, voluptates voluptatum! Corporis, ipsa?'
            },
        ];
    }

}
