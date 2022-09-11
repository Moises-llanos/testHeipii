
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { NgModule } from '@angular/core';


@NgModule({
    exports: [
        InputTextModule,
        PasswordModule,
    ]
})

export class PrimeNgModule {}