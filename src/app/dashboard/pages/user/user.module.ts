import { PrimeNgModule } from "src/app/primeng/primeng.module";
import { SharedModule } from "src/app/shared/shared.module";
import { UserRoutingModule } from "./user-routing.module";
import { UsersComponent } from "./user.component";
import { NgModule } from "@angular/core";


@NgModule({
    declarations: [
        UsersComponent,
    ],
    imports: [
        UserRoutingModule,
        PrimeNgModule,
        SharedModule,
    ]
})

export class UserModule {}