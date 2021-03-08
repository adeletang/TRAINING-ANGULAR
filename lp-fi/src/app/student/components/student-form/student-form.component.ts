import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from 'src/app/core/models/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  studentForm: FormGroup;

  classes: string[] = [
    "LP-DIM-FI",
    "LP-DIM-APP"
  ]

  constructor(private fb: FormBuilder) { 
    this.studentForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      birthYear: [''],
      class: ['']
    })

  }

  ngOnInit(): void {
  }

  onSubmit(student: Student){
    console.log("FORM", student);
  }
}
