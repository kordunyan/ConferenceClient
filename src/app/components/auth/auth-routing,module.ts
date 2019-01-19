import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthOutletComponent } from "./auth-outlet/auth-outlet.component";
import { LoginComponent } from "./login/login.component";
import { RedirectHandlerComponent } from "./redirect-handler/redirect-handler.component";

const routes: Routes = [
    {
        path: 'auth',
        component: AuthOutletComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'redirect',
                component: RedirectHandlerComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {

}