import { Component } from '@angular/core';

import { pagesRoutesNames } from '@pages/pages-routes-names';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupPageComponent {

  constructor(private titleService: Title) {
  }

  private setPageAttributes(){
    this.titleService.setTitle("Home");
  }
}
