import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './dashboards/student-dashboard/student-dashboard.component';
import { ProfessorDashboardComponent } from './dashboards/professor-dashboard/professor-dashboard.component';
import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'student', component: StudentDashboardComponent, canActivate: [AuthGuard], data: { roles: ['student'] } },
    { path: 'professor', component: ProfessorDashboardComponent, canActivate: [AuthGuard], data: { roles: ['professor'] } },
    { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
    { path: 'forbidden', component: ForbiddenComponent },
    { path: '**', redirectTo: '/forbidden'}
];
