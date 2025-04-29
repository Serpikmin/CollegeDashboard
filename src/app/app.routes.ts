import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './dashboards/student-dashboard/student-dashboard.component';
import { ProfessorDashboardComponent } from './dashboards/professor-dashboard/professor-dashboard.component';
import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'student', component: StudentDashboardComponent },
    { path: 'professor', component: ProfessorDashboardComponent },
    { path: 'admin', component: AdminDashboardComponent },
];
