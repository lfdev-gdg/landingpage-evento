import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import {SharedRoutingModule} from './shared-routing.module';

import {FirebaseService} from "./firebase.service";
import {MaterializeModule} from "angular2-materialize";
import {firebaseConfig} from "./firebase.config";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig),
        MaterializeModule,
        SharedRoutingModule
    ],
    declarations: [],
    providers: [
        FirebaseService
    ],
    exports: [
        FormsModule,
        HttpModule,
        MaterializeModule
    ]
})
export class SharedModule { }
