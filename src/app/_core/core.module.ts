import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

export function jwtTokenGetter() {
    return localStorage.getItem('access_token');
}


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: jwtTokenGetter
            }
        })
    ],
    exports: [
        FormsModule
    ],
    providers: [
        // { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
    ]
})
export class CoreModule { }
