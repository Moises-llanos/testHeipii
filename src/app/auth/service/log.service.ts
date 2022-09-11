import { API_KEY } from "src/app/core/constant/constant";
import { ILogUser } from "../interface/log.interface";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class LogService {
    public mockUserLogin: ILogUser = {
        email: 'testheipi@gmail.com',
        password: 'heipi'
    }

    generateTokenMock(){
        sessionStorage.setItem(API_KEY, crypto.randomUUID())
    }

    getTokenMock(){
        return sessionStorage.getItem(API_KEY)
    }

    clearTokenMock(){
        sessionStorage.removeItem(API_KEY)
    }
}