import { Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guards/auth.guard';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { EventsComponent } from './components/events/events.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { RolesComponent } from './components/contacts/roles/roles.component';
import { RolesItemComponent } from './components/contacts/roles-contacts/roles-item.component';
import { ContactComponent } from './components/contacts/contact/contact.component';
import { AccountComponent } from './components/account/account.component';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full',},
    {path: 'registration', component: RegistrationComponent, title: 'Sign up'},
    {path: 'login', component: LoginComponent, title: 'Login'},
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'contacts',
                component: ContactsComponent,
                title: 'Contacts'
                // children: [
                //     {
                //         path: 'role/:id', 
                //         component: RolesItemComponent, 
                //         title: 'RolesItem'
                //     },
                // ]
            },
            {
                path: 'contacts/role/:id',
                component: RolesItemComponent, 
                title: 'RolesItem'
            },
            {
                path: 'contacts/contact-info/show/:id',
                component: ContactComponent,
                title: 'ContactComponent'
            },
            
            {
                path: 'notifications',
                component: NotificationsComponent,
                title: 'Notifications'
            },
            {
                path: 'events',
                component: EventsComponent,
                title: 'Events'
            },
            {
                path: 'jobs', 
                component: TasksComponent, 
                title: 'Jobs'
            },
            {
                path: 'account', 
                component: AccountComponent, 
                title: 'Account'
            },
            {
                path: 'main', 
                component: DashboardMainComponent, 
                title: 'DashboardIndexComponent'
            },
            

        ],
        title: 'Dashboard', 
        canActivate: [authGuard()]
    },

    {path: '**', component: HomeComponent}
];
