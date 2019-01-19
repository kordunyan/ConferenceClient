import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";




@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return false;     
    }
}