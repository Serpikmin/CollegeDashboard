import { Component } from '@angular/core';
import { CourseComponent } from '../../components/course/course.component';
import { AgGridAngular } from "ag-grid-angular";
import { MatButton } from '@angular/material/button';
import type { ColDef } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

ModuleRegistry.registerModules([AllCommunityModule]);

interface IRow {
  studentId: string;
  name: string;
  course: string;
  grade: number;
  attendedToday: boolean;
}

@Component({
  standalone: true,
  selector: 'app-professor-dashboard',
  imports: [CourseComponent, AgGridAngular, MatButton],
  templateUrl: './professor-dashboard.component.html',
  styleUrl: './professor-dashboard.component.css'
})
export class ProfessorDashboardComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(["/"])
  }

  rowData: IRow[] = [
    { studentId: "73812", name: "Peter Ghobrial", course: "CSC108", grade: 88, attendedToday: true},
    { studentId: "28001", name: "Jacob Brown", course: "CSC108", grade: 71, attendedToday: false},
    { studentId: "56459", name: "Susan Bree", course: "MAT102", grade: 65, attendedToday: true},
];

  colDefs: ColDef<IRow>[] = [ 
    { field: "studentId" },
    { field: "name" },
    { field: "course" },
    { field: "grade" },
    { field: "attendedToday"}
  ];
}
