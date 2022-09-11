import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {
    @Input() hasMessageLeft: boolean = true;
    @Input() messagesBottom: string = '';
    @Input() messagesRight: string = '';
    @Input() messagesleft: string = '';

    constructor(private router: Router){}

    getList(){
        if(!this.hasMessageLeft){
            this.router.navigate(['dashboard'])
        }
    }
}