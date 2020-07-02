import { Injectable } from '@angular/core';
import { Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

import { authPagesRoutesNames } from '@pages/_auth/auth-pages-routes-names';
import { appRoutesNames } from '@app/app-routes-names';

/**SERVICES */
import { AuthService } from '@shared/services/_auth/auth.service';


@Injectable({ providedIn: 'root' })
export class AuthCanLoadGuard implements CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {

    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      return true;
    }
    this.router.navigate([`/${appRoutesNames.AUTH.route}/${authPagesRoutesNames.LOGIN.route}`]);
    return false;
  }
}
