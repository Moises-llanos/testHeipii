import { NgModule } from "@angular/core";
import { LogComponent } from './log.component';
import { LogRoutingModule } from './log-routing.module';
import { PrimeNgModule } from '../../primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [LogComponent],
    imports: [
        ReactiveFormsModule,
        LogRoutingModule,
        PrimeNgModule,
        SharedModule,
        CommonModule
    ]
})

export class LogModule {}