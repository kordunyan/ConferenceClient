import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/token-storage.service';


@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent {

  constructor(
    public tokenStorageService: TokenStorageService,
    private router: Router,
  ) { }

  goToSignIn() {
    this.router.navigate(['/auth/login']);  
  }

  singOut() {
    this.tokenStorageService.signOut();
  }

}
