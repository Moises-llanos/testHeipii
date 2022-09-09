import { NgModule } from "@angular/core";
import { FieldErrorDirective } from './directive/field.directive';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        FieldErrorDirective
    ],
    exports: [
        FieldErrorDirective,
        CommonModule
    ]
})

export class SharedModule {}