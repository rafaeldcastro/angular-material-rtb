import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { appRoutesNames } from '@app/app-routes-names';

/**SERVICES */
import { AuthService } from '@shared/services/_auth/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupPageComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {

    if (this.authService.currentUserValue) {
      this.navigateTo();
    }
  }

  private navigateTo(){
    this.router.navigate([`/${appRoutesNames.HOME.route}`]);
  }
}
