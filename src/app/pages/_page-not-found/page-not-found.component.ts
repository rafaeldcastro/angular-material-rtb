import { Component } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  constructor(private titleService: Title) {
  }

  private setPageAttributes(){
    this.titleService.setTitle("Página Não Encontrada");
  }
}
