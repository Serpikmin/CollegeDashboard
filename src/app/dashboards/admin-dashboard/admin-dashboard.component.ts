import { Component } from '@angular/core';
import { AgGridAngular } from "ag-grid-angular";
import type { ColDef } from "ag-grid-community";
import { MatButton } from '@angular/material/button';
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

ModuleRegistry.registerModules([AllCommunityModule]);

interface IRowStudent {
  studentId: string;
  name: string;
  courses: string;
  grade: number;
  attendedToday: boolean;
}

interface IRowProf {
  profId: string;
  name: string;
  courses: string;
  attendedToday: boolean;
}

@Component({
  standalone: true,
  selector: 'app-admin-dashboard',
  imports: [AgGridAngular, MatButton],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(["/"])
  }

  studentRowData: IRowStudent[] = [
    { studentId: "73812", name: "Peter Ghobrial", courses: "CSC108, ENG101", grade: 88, attendedToday: true},
    { studentId: "28001", name: "Jacob Brown", courses: "CSC108, ENG101", grade: 71, attendedToday: false},
    { studentId: "56459", name: "Susan Bree", courses: "MAT102, CSC108", grade: 65, attendedToday: true},
];

  studentColDefs: ColDef<IRowStudent>[] = [ 
    { field: "studentId" },
    { field: "name" },
    { field: "courses" },
    { field: "grade" },
    { field: "attendedToday"}
  ];

  profRowData: IRowProf[] = [
    { profId: "310", name: "Bogdan Simion", courses: "CSC108, MAT102", attendedToday: true },
    { profId: "162", name: "Lisa Zhang", courses: "ENG101", attendedToday: false },
  ]

  profColDefs: ColDef<IRowProf>[] = [ 
    { field: "profId" },
    { field: "name" },
    { field: "courses" },
    { field: "attendedToday"}
  ];
}
