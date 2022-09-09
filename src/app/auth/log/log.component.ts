import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { createFormReactive } from '../models/form';


@Component({
    selector: 'app-log',
    templateUrl: './log.component.html',
    styleUrls: ['./log.component.scss']
})

export class LogComponent implements OnInit {
    formBuild!: FormGroup;

    get formValid(){
       return this.formBuild.valid as boolean
    }

    get fieldEmailError(){
        return this.formBuild.get('email')?.errors && this.formBuild.get('email')?.touched
    }

    get fieldPasswordError(){
        return this.formBuild.get('password')?.errors && this.formBuild.get('password')?.touched
    }

    constructor(private fb: UntypedFormBuilder, private router: Router){}


    ngOnInit(): void {
        this.formBuild = createFormReactive(this.fb);
    }

    log(){

        if(this.formValid){
           this.router.navigate(['dashboard'])
        }

    }
}