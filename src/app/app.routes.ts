import { Routes } from '@angular/router';
import { HomeTabComponent } from './features/web/pages/home-tab/home-tab.component';
import { AboutTabComponent } from './features/web/pages/about-tab/about-tab.component';
import { ServiceTabComponent } from './features/web/pages/service-tab/service-tab.component';
import { DepartmentTabComponent } from './features/web/pages/department-tab/department-tab.component';
import { DoctorsTabComponent } from './features/web/pages/doctors-tab/doctors-tab.component';
import { ContactTabComponent } from './features/web/pages/contact-tab/contact-tab.component';

export const routes: Routes = [
    {
        path:'', 
        component:HomeTabComponent,
    },
    {
        path:'about', 
        component:AboutTabComponent,
        pathMatch:'full'
    },
    {
        path:'services', 
        component:ServiceTabComponent,
        pathMatch:'full'
    },
    {
        path:'departments', 
        component:DepartmentTabComponent,
        pathMatch:'full'
    },
    {
        path:'doctors', 
        component:DoctorsTabComponent,
        pathMatch:'full'
    },
    {
        path:'contacts', 
        component:ContactTabComponent,
        pathMatch:'full'
    },
];
