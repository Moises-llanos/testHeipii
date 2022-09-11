import { UntypedFormBuilder, FormGroup } from '@angular/forms';
import { LogService } from "../service/log.service";
import { createReactiveForm } from '../models/form';
import { Component, OnInit } from "@angular/core";
import { Subject, takeUntil } from 'rxjs';
import { Router } from "@angular/router";


@Component({
    selector: 'app-log',
    templateUrl: './log.component.html',
    styleUrls: ['./log.component.scss']
})

export class LogComponent implements OnInit {
    public formBuild!: FormGroup;
    public isValidUser: boolean = false;
    private obsDestroy$: Subject<boolean> = new Subject()

    get formValid(){
       return this.formBuild.valid as boolean
    }

    get emailError(){
       return this.getInvalidField('email')
    }

    get passwordError(){
        return this.getInvalidField('password')
    }

    constructor( 
            private fb: UntypedFormBuilder, 
            private router: Router,
            private logService: LogService
            ){}


    ngOnInit(): void {
        this.executeMethods();
    }

    private executeMethods(){
        this.formBuild = createReactiveForm(this.fb);
        this.logService.clearTokenMock();
        this.formChange()
    }

    private getInvalidField(campo: string){
        return this.formBuild.get(campo)?.errors 
        && this.formBuild.get(campo)?.touched;
    }

    private getField(field: string){
        return this.formBuild.get(field)?.value.trim() as string;
    }

    private formChange(){
        this.formBuild.valueChanges
        .pipe(takeUntil(this.obsDestroy$))
        .subscribe(()=> this.isValidUser = false);
    }


    log(){
        if(this.formValid) {
            const {email, password} = this.logService.mockUserLogin;
            const valid = this.getField('email') === email &&
            this.getField('password') === password;
            this.isValidUser = !valid;

            if(valid){
                this.logService.generateTokenMock()
                this.router.navigate(['dashboard'])
            }
        }
    }
}