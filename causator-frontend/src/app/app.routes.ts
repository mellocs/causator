import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { EventsComponent } from './components/events/events.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { RolesComponent } from './components/contacts/roles/roles.component';
import { RolesItemComponent } from './components/contacts/roles-item/roles-item.component';
import { ObjectivesComponent } from './components/objectives/objectives.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Causator'},
    {path: 'registration', component: RegistrationComponent, title: 'Sign up'},
    {path: 'login', component: LoginComponent, title: 'Login'},
    {
        path: 'dashboard',
        component: DashboardComponent,
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
                component: ContactsComponent, 
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
                path: 'objectives', 
                component: ObjectivesComponent, 
                title: 'Objectives'
            },
            

        ],
        title: 'Dashboard', 
        canActivate: [authGuard()]
    },

    {path: '**', component: HomeComponent}
];
