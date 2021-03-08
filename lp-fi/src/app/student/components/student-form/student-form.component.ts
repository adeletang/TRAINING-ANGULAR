import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Student } from 'src/app/core/models/student';
import { StudentService } from 'src/app/core/services/http/student.service';

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

  constructor(private fb: FormBuilder, private _studentService: StudentService, private _dialogRef: MatDialogRef<StudentFormComponent>) { 
    this.studentForm = this.fb.group({
      firstName: ['', [Validators.required, this.noWhitespaceValidator]],
      lastName: ['', [Validators.required, this.noWhitespaceValidator]],
      birthYear: ['', [Validators.required]],
      class: ['', [Validators.required]]
    })

  }

  ngOnInit(): void {
  }

  onSubmit(student: Student){
    if(this.studentForm.valid){
      this._studentService.post(student).subscribe((next) =>{
        console.log("test");
        this.studentForm.reset();
        this._dialogRef.close();
      });
    }
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;

    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
}
