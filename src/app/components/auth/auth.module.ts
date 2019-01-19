import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedirectHandlerComponent } from './redirect-handler/redirect-handler.component';
import { LoginComponent } from './login/login.component';
import { AuthOutletComponent } from './auth-outlet/auth-outlet.component';
import { AuthRoutingModule } from './auth-routing,module';

@NgModule({
  declarations: [
    RedirectHandlerComponent,
    LoginComponent,
    AuthOutletComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    AuthRoutingModule
  ]
})
export class AuthModule { }
