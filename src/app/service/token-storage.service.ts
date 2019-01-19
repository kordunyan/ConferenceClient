import { Injectable } from "@angular/core";
import { getToken } from "@angular/router/src/utils/preactivation";

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {
    
    public signOut() {
        window.sessionStorage.clear();
    }

    public isSignedIn(): boolean {
        return this.getToken() != undefined && this.getUsername() != undefined;
    }

    public saveToken(token: string) {
        this.changeSessionItem(TOKEN_KEY, token);
    }
    
    public getToken(): string {
        return this.getSessionItem(TOKEN_KEY);
    }

    public saveUserName(username: string) {
        this.changeSessionItem(USERNAME_KEY, username);
    }
    
    public getUsername(): string {
        return this.getSessionItem(USERNAME_KEY);
    }

    private changeSessionItem(key, value) {
        window.sessionStorage.removeItem(key);
        window.sessionStorage.setItem(key, value);
    }
    
    private getSessionItem(key) {
        return window.sessionStorage.getItem(key);
    }
}