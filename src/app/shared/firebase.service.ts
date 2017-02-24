import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Subscription} from "./data/subscription";

@Injectable()
export class FirebaseService {

    private subscriptions: Array<Subscription> = [];

    constructor(private fire: AngularFire) {
        fire.database.list('/inscricoes').subscribe( res => this.subscriptions = res);
    }

    subscribeToEvent(subscription: Subscription): any {
        let tmp: FirebaseListObservable<Subscription[]> = this.fire.database.list('/inscricoes');
        return tmp.push(subscription);
    }

    verifySubscription(subscription: Subscription): boolean {
        let result: boolean = true;

        if (this.subscriptions.length > 0)
            this.subscriptions.forEach( sub => {
                if (sub.email.toLowerCase() == subscription.email.toLowerCase())
                    result = false;
            });

        return result;
    }

}
