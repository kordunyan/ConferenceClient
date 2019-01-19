import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthHttpService } from 'src/app/service/http/auth.http.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { User } from 'src/app/domain/user';

@Component({
  selector: 'app-redirect-handler',
  templateUrl: './redirect-handler.component.html',
  styleUrls: ['./redirect-handler.component.css']
})
export class RedirectHandlerComponent implements OnInit {

  failedSignIn = false;

  constructor(
    private tokenStorageService: TokenStorageService,
    private authHttpService: AuthHttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.signIn(params['token']);
    });
  }

  signIn(token: string) {
    if (!token) {
      this.handleFailedSignIn();
    }
    this.tokenStorageService.saveToken(token);
    this.authHttpService.getUserPrincipal().subscribe((user: User) => {
      console.log(user);
    }, error => console.error(error));
  }

  private handleFailedSignIn() {
    this.failedSignIn = true;
  }

  

}
