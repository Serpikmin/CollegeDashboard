import { Component, inject } from '@angular/core';
import { CourseComponent } from '../../components/course/course.component';
import { Input } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { PieChartModule } from '../../components/pie-chart/pie-chart.module';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-student-dashboard',
  imports: [CourseComponent, PieChartModule, MatButton],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})

export class StudentDashboardComponent {
  @Input() name = "Peter";
  label1 = "Attended";
  label2 = "NotAttended";
  number1 = 1;
  number2 = 2;
  readonly dialog = inject(MatDialog);

  constructor(
    private authService: AuthService,
    private router: Router
  ) {};

  openDialog(): void {
    const dialogRef = this.dialog.open(AttendanceDialog, {});
  }

  onAttendClick() {
    this.openDialog();
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}

@Component({
  standalone: true,
  selector: 'attendance-dialog',
  templateUrl: 'attendance-dialog.html',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButton,
  ],
})

export class AttendanceDialog {
  readonly dialogRef = inject(MatDialogRef<AttendanceDialog>);

  onExitClick(): void {
    this.dialogRef.close();
  }
}
