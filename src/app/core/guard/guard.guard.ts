import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  CanActivate, 
  CanLoad, 
  Route, 
  Router, 
  RouterStateSnapshot, 
  UrlSegment, 
  UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogService } from 'src/app/auth/service/log.service';

@Injectable({
  providedIn: 'root'
})
export class CoreGuard implements CanActivate, CanLoad {
  
  constructor(private _logService: LogService, private _router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean> | boolean {
    return this.validateRoute();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.validateRoute();
  }

  validateRoute(){
    let token = this._logService.getTokenMock();
      if(token) {
          return true
      }else {
          this._router.navigate(['login'])
          return false;
      }
  }
}
