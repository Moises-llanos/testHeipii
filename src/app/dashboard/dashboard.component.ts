import { DashboardService } from "./service/dashboard.service"; 
import { Component, OnDestroy, OnInit } from "@angular/core";
import { IUsers } from "./interfaces/dashboard.interfaces";
import { Router } from "@angular/router";
import { Subject, takeUntil} from "rxjs";


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy {
    public listUsers: IUsers[] = [];
    public totalListPost: number = 0;
    private obsDestroy$: Subject<boolean> = new Subject();

    get hasUrl(){ return this.router.url.includes('user') as boolean }

    constructor( 
            private dashboardService: DashboardService, 
            private router: Router,
        ){}

    ngOnInit(): void {
        this.executeMethods(); 
    }

    private executeMethods(){
        this.getAllPosts();
        this.getAllUsers();
    }

    private getAllPosts(){
        this.dashboardService.getAllPosts()
        .pipe(takeUntil(this.obsDestroy$))
        .subscribe(res=> this.totalListPost = res.length);
    }

    private getAllUsers(){
        this.dashboardService.getAllUsers()
        .pipe(takeUntil(this.obsDestroy$))
        .subscribe(res=> this.listUsers = res);
    }


    ngOnDestroy(): void {
        this.obsDestroy$.next(true);
        this.obsDestroy$.unsubscribe();
    }
}