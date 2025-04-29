import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormField, MatLabel, MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [MatFormField, MatLabel, MatButtonModule, MatInput, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email = new FormControl('')
  password = new FormControl('')

  constructor(private router: Router){}

  onLoginClick() {
    if (this.email.value == "student@school" && this.password.value == "studentpass") {
      this.router.navigate(['/student'])
    }
    else if (this.email.value == "professor@school" && this.password.value == "profpass") {
      this.router.navigate(['/professor'])
  }
    else if (this.email.value == "admin@school" && this.password.value == "adminpass") {
      this.router.navigate(['/admin'])
  }
    else {
        // Set error
    }
  }
}
