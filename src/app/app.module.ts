import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedComponentsModule } from './shared/components/shared-components.module';
import { AuthModule } from './components/auth/auth.module';
import { httpInterceptorProviders } from './module/security/auth.interceptor';
import { ToastrModule } from 'ng6-toastr-notifications';
import { MaterialModule } from './shared/modules/material.module';
import { BootstrapModule } from './shared/modules/bootstrap.module';
import { ConferenceModule } from './components/conference/conference.module';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BootstrapModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AuthModule,
    ConferenceModule,
    SharedComponentsModule,
    AppRoutingModule
  ],
  providers: [
    httpInterceptorProviders,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
