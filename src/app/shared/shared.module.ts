import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { FieldErrorDirective } from './directive/field.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";


@NgModule({
    declarations: [
        FieldErrorDirective,
        ToolbarComponent
    ],
    exports: [
        FieldErrorDirective,
        ToolbarComponent,
        CommonModule
    ]
})

export class SharedModule {}