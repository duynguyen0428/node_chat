import { GuestsComponent } from './components/guests/guests.component';
import { AuthGuardService } from './services/auth.guard.service';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full' 
    },
    { 
        path: 'home',
        component: HomeComponent,
        canActivate : [AuthGuardService]
     },
     {
         path: 'guests',
         component : GuestsComponent,
         canActivate : [AuthGuardService]
     },
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: 'register', 
        component: RegisterComponent 
    },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
    static components = [LoginComponent]
}