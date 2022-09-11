import { DashboardService } from "../../service/dashboard.service";
import { IAlbums, IUsers } from "../../interfaces/dashboard.interfaces";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { users } from "../../models/user";
import { Subject, takeUntil } from "rxjs";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UsersComponent implements OnInit {
    public totalPostsUsers: number = 0;
    public listAlbums: IAlbums[] = []
    public user: IUsers = users;
    private obsDestroy$: Subject<boolean> = new Subject()
    

    constructor( 
        private actived: ActivatedRoute, 
        private dashboardService: DashboardService,
        private router: Router
        ){}

    get idUser(){
        return this.actived.snapshot.params['id'] as number
    }

    ngOnInit(): void {
        this.executeMethods()
    }

    private executeMethods(){
        this.getUserById();
        this.getAllAlbums();
        this.getAllPostsUser();
    }


    private getUserById(){
        this.dashboardService.getUsersById(this.idUser)
        .pipe(takeUntil(this.obsDestroy$))
        .subscribe(res=> this.user = res)
    }

    private getAllAlbums(){
        this.dashboardService.getAllbumsByUsers(`${this.idUser}`)
        .pipe(takeUntil(this.obsDestroy$))
        .subscribe(res=> this.listAlbums = res)
    }

    private getAllPostsUser(){
        this.dashboardService.getPostsByUsers(`${this.idUser}`)
        .pipe(takeUntil(this.obsDestroy$))
        .subscribe(res=> this.totalPostsUsers = res.length)
    }

    logOut(){
        this.router.navigate(['login'])
    }
    
}   