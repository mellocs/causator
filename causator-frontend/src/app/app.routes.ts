import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Causator'},
    {path: 'registration', component: RegistrationComponent, title: 'Registration'},
    {path: 'login', component: LoginComponent, title: 'Login'},
    {path: 'profile', component: ProfileComponent, title: 'Profile'},

    {path: '**', component: HomeComponent}
];
