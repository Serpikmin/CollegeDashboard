import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormField, MatLabel, MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { AuthService } from '../auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [MatFormField, MatLabel, MatButtonModule, MatInput, ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', Validators.required)

  errorMessage = signal('');

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  updateErrorMessage(error: boolean) {
    if (error) {
      this.errorMessage.set('Invalid login');
    }
    else {
      this.errorMessage.set('')
    }
  }

  onLoginClick() {
    if (this.email.value != null && this.password.value != null) {
      const path = this.authService.login(this.email.value, this.password.value);
      console.log('Path: /' + path)

      this.router.navigate(['/' + path]);
    }
    this.updateErrorMessage(true)
  }
}
