import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { CoreBaseView } from '@app/_core/shared/classes/core-base-view';

/**SERVICES */
import { AuthService } from '@shared/services/_auth/auth.service';

export class AuthBaseView extends CoreBaseView{

    form: FormGroup;

    constructor(protected router: Router, protected authService: AuthService) {
        super();
        this.isAuthenticated();
    }

    protected isAuthenticated() {
        if (this.authService.currentUserValue) {
            this.navigateTo('HOME');
        }
    }

    get formcontrol() {
        return this.form.controls;
    }

    protected navigateTo(PAGE) {
        this.router.navigate([`/${this.appRoutes[PAGE].route}`]);
    }

    protected onSubmit() {
        if (this.form.invalid) {
            return;
        }
    }
}
