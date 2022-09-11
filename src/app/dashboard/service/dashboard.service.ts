import { IAlbums, IPosts, IUsers } from "../interfaces/dashboard.interfaces";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class DashboardService {
    private url: string = environment.BASE_URL;

    constructor(private http: HttpClient){}

    getAllPosts():Observable<IPosts[]>{
       return this.http.get<IPosts[]>(`${this.url}posts`)
    }

    getPostsByUsers(id: string): Observable<IPosts[]>{
        const params = new HttpParams().set('userId', id)
        return this.http.get<IPosts[]>(`${this.url}posts`, {params})
    }

    getAllbumsByUsers(id: string): Observable<IAlbums[]>{
        const params = new HttpParams().set('userId', id)
        return this.http.get<IAlbums[]>(`${this.url}albums`, {params})
    }

    getAllUsers():Observable<IUsers[]>{
        return this.http.get<IUsers[]>(`${this.url}users`)
    }

    getUsersById(id: number): Observable<IUsers>{
       return this.http.get<IUsers>(`${this.url}users/${id}`)
    }
    

}