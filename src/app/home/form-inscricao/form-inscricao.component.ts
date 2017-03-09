import {Component, OnInit, EventEmitter} from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';

import {FirebaseService} from "../../shared/firebase.service";
import {Subscription} from "../../shared/data/subscription";
import {Question} from "../../shared/data/question";
import {_catch} from "rxjs/operator/catch";
import {Http} from "@angular/http";

@Component({
    selector: 'app-form-inscricao',
    templateUrl: './form-inscricao.component.html',
    styleUrls: ['./form-inscricao.component.scss']
})
export class FormInscricaoComponent implements OnInit {

    subscription: Subscription = new Subscription();
    alertActions = new EventEmitter<string|MaterializeAction>();
    surveyActions = new EventEmitter<string|MaterializeAction>();

    alertMsg: string;
    multipla: Array<any>;
    step: number = 0;

    btnModal: string = 'cancelar';

    constructor(private fire: FirebaseService, private http: Http) { }

    ngOnInit() {
        /*this.subscription.name = 'walter';
        this.subscription.email = 't@c.co';*/
    }

    sendSubscription(): void {
        ga('send', 'event', 'Botões','Click', 'Iniciou a inscrição');

        if (this.subscription.name && this.subscription.email) {

            if (this.validateEmail()) {

                if (this.fire.verifySubscription(this.subscription)) {
                    this.startSurvey();
                } else {
                    this.alertMsg = 'Você já está inscrito!';
                    this.alertActions.emit({ action:"modal", params:['open'] });
                }

            } else {
                this.alertMsg = 'Digite um e-mail válido!';
                this.alertActions.emit({ action:"modal", params:['open'] });
            }

        } else {
            this.alertMsg = 'Preencha seu nome e e-mail!';
            this.alertActions.emit({ action:"modal", params:['open'] });
        }

    }

    setStep(step: number, event: string): void {
        this.step = step;
        ga('send', 'event', 'Botões', 'Click', event);
    }

    private startSurvey(): void {
        this.surveyActions.emit({ action:"modal", params:['open'] });
    }

    private validateEmail(): boolean {
        let reg = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
        return reg.test(this.subscription.email);
    }

    resposta(pergunta: string, resposta: string, step: number): void {
        let q = new Question();
        q.question = pergunta;
        q.answer = resposta;

        this.subscription.survey.questions.push(q);
        this.avancaStep(step);
        ga('send', 'event', 'Botões', 'Click', 'Respondeu pergunta '+pergunta);
    }

    respostaMultipla(resposta: string): void {
        this.multipla.push(resposta);
    }

    private avancaStep(step: number): void {

        this.step = step;

        if (step == 4)
            this.multipla = new Array<any>();
    }

    finalizar(): void {
        ga('send', 'event', 'Botões', 'Click', 'Finalizou a inscrição');
        this.avancaStep(8);

        this.fire.subscribeToEvent(this.subscription)
            .then( res => {
                this.avancaStep(9);
                this.sendEmail(res.key);
                this.subscription = new Subscription();
                this.btnModal = "Finalizar";
            } )
            .catch( err => console.log(err) );
    }

    private sendEmail(key: string): void {
        this.http.post('http://evento.lfdev.tk/confirmacao.php', {email: this.subscription.email, nome: this.subscription.name, userid: key}).subscribe(
            res => {
                if (res.status == 200) {
                    let body = res.json();

                    if (body.success) {
                        console.log('email enviado');
                    } else {
                        console.log('erro ao enviar email');
                    }
                }
            },
            err => console.log('erro ao conectar')
        );
    }

}
