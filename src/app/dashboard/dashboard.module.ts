import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from "../shared/shared.module";
import { PrimeNgModule } from '../primeng/primeng.module';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        DashboardRoutingModule,
        PrimeNgModule,
        SharedModule
    ]
})

export class DashboardModule {}