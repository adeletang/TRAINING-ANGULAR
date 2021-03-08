import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../../models/student';
import { environment } from 'src/environments/environment';

@Injectable()
export class StudentService {

  endPoint: string = environment.StudentEndpoint;

  constructor(private _httpClient: HttpClient) { }

  get(): Observable<Student[]> {
    return this._httpClient.get<Student[]>(this.endPoint);
  }
  
  post(student: Student): Observable<Student>{
    return this._httpClient.post<Student>(this.endPoint, student)
  }
}
