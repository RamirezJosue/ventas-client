import { RouterModule, Routes } from '@angular/router';

// Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { RegisterComponent } from './register/register.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
          { path: 'progress', component: ProgressComponent, data: {titulo: 'Progress'} },
          { path: 'graficas1', component: Graficas1Component, data: {titulo: 'Grafica'} },
          { path: 'register', component: RegisterComponent, data: {titulo: 'Registro'} },
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }

];



export const PAGE_ROUTES = RouterModule.forChild( pagesRoutes );
