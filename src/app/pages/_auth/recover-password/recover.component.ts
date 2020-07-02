import { Component } from '@angular/core';

import { pagesRoutesNames } from '@pages/pages-routes-names';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recover-password-page',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverPasswordPageComponent {

  constructor(private titleService: Title) {
  }

  private setPageAttributes(){
    this.titleService.setTitle("Home");
  }
}
