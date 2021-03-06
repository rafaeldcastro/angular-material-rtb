import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
// import { Subject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventEmitterService {

    private static emitters: { [notificationName: string]: EventEmitter<any> } = {}
    // private  emitters: { [notificationName: string]: Subject<any> } = {};


    // get(notificationName: string): Observable<any>{
    //     if (!this.emitters[notificationName])
    //         this.emitters[notificationName] = new EventEmitter<any>();
    //     return this.emitters[notificationName];
    // }

    static get(notificationName: string): EventEmitter<any>{
        if (!this.emitters[notificationName])
            this.emitters[notificationName] = new EventEmitter<any>();
        return this.emitters[notificationName];
    }
}

/** 
to SUBSCRIBE:
  
private subscriptions = new Subscription();   
constructor(){
    this.subscriptions.add( EventEmitterService.get("notification_name").subscribe(payload => this.notificationHandler(payload)) );
}

TO EMIT: 

EventEmitterService.get("notification_name").emit(payload); 

to UNSUBSCRIBE:
       
ngOnDestroy(){
    this.subscriptions.unsubscribe();
}
*/