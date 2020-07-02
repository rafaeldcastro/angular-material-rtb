import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { appRoutesNames } from '@app/app-routes-names';

/**SERVICES */
import { AuthService } from '@shared/services/_auth/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthCanActivateGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> | boolean {

    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      return true;
    }
    this.router.navigate([`/${appRoutesNames.LOGIN.route}`]);
    return false;
  }
}
