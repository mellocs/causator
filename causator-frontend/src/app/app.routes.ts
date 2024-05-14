import { Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guards/auth.guard';
import { ContactComponent } from './components/contacts-collection/contact/contact.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { EventsComponent } from './components/events-collection/events.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { RolesComponent } from './components/contacts-collection/roles/roles.component';
import { RolesItemComponent } from './components/contacts-collection/roles-contacts/roles-contacts.component';
import { AccountComponent } from './components/account/account.component';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { GroupsComponent } from './components/contacts-collection/groups/groups.component';
import { ObjectivesComponent } from './components/objectives/objectives.component';
import { EventTypesComponent } from './components/events-collection/event-types/event-types.component';
import { EventSourcesComponent } from './components/events-collection/event-sources/event-sources.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full',},
    {path: 'registration', component: RegistrationComponent, title: 'Sign up'},
    {path: 'login', component: LoginComponent, title: 'Login'},
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'contacts/roles',
                component: RolesComponent,
                title: 'Roles'
                // children: [
                //     {
                //         path: 'role/:id', 
                //         component: RolesItemComponent, 
                //         title: 'RolesItem'
                //     },
                // ]
            },
            {
                path: 'contacts/roles/:id',
                component: RolesItemComponent, 
                title: 'RolesItem'
            },
            {
                path: 'contacts/contact-info/show/:id',
                component: ContactComponent,
                title: 'ContactComponent'
            },
            {
                path: 'contacts/groups',
                component: GroupsComponent, 
                title: 'Groups'
            },
            {
                path: 'events/types',
                component: EventTypesComponent, 
                title: 'Event Types'
            },
            {
                path: 'events/sources',
                component: EventSourcesComponent, 
                title: 'Event Types'
            },
            {
                path: 'notifications',
                component: NotificationsComponent,
                title: 'Notifications'
            },
            {
                path: 'objectives',
                component: ObjectivesComponent,
                title: 'Objectives'
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
