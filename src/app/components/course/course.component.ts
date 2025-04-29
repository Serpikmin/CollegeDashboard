import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-course',
  imports: [MatButton],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  @Input() code = "";
  @Input() name = "";
  @Input() description = "";
  @Input() onClick = () => null;
  @Input() studentView = true;
}
