import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Causator'},
    {path: 'registration', component: RegistrationComponent, title: 'Registration'},
    {path: 'login', component: LoginComponent, title: 'Login'},
    {path: 'dashboard', component: DashboardComponent, title: 'Dashboard', canActivate: [authGuard()]},

    {path: '**', component: HomeComponent}
];
