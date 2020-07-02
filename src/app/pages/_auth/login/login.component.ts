import { Component } from '@angular/core';

import { pagesRoutesNames } from '@pages/pages-routes-names';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPageComponent {

  constructor(private titleService: Title) {
  }

  private setPageAttributes(){
    this.titleService.setTitle("Home");
  }
}
