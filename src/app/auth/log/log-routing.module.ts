import { Routes, RouterModule } from '@angular/router';
import { LogComponent } from './log.component';
import { NgModule } from "@angular/core";

const routes: Routes = [{path: '', component: LogComponent}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LogRoutingModule {}