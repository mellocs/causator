import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Causator'},
    {path: 'registration', component: RegistrationComponent, title: 'Реєстрація'},
    {path: 'login', component: LoginComponent, title: 'Логін'},
    {path: 'dashboard', component: DashboardComponent, title: 'Панель управління', canActivate: [authGuard()]},

    {path: '**', component: HomeComponent}
];
