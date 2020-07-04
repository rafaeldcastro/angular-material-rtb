import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

/**SERVICES */
import { LoadingNotifications } from './shared/notifications/loading.notifications';
import { EventEmitterService } from './../../services/emitter/event-emitter.service';

@Component({
  selector: 'loading',
  styles: [`
  .app-loading{
    background: rgba(0,0,0,.3);
    position: absolute;
    z-index: 10000;
    top: 0;
    left: 0;
    width: 100%;
  }`],
  template: `<div *ngIf="isLoading" class="app-loading animate__animated animate__fadeIn"><svg class="spinner" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" /></svg></div>`
})
export class LoadingComponent {

  isLoading: boolean;
  private subscriptions = new Subscription();
  
  constructor() {
    this.subscriptions.add(EventEmitterService.get(LoadingNotifications.PRESENT).subscribe(payload => this.present(payload)));
    this.subscriptions.add(EventEmitterService.get(LoadingNotifications.DISMISS).subscribe(timer => this.dismiss(timer)));
  }

  private present(payload?){
    this.isLoading = true;
  }

  private dismiss(timer){
    
    if(timer){
      setTimeout(() => {
        this.isLoading = false;
      }, timer);
      return;
    }
    this.isLoading = false;
  }

}
