import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { appRoutesNames } from '@app/app-routes-names';

/**SERVICES */
import { AuthService } from '@shared/services/_auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPageComponent {
  
  showHidePass = true;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private router: Router,
    private authService: AuthService
  ) {

    if (this.authService.currentUserValue) {
      this.navigateTo();
    }
  }

  get form() {
    return this.loginForm.controls;
  }

  onSubmit(){

  }

  private navigateTo() {
    this.router.navigate([`/${appRoutesNames.HOME.route}`]);
  }
}
