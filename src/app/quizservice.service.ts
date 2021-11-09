import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizserviceService {

  constructor(private http: HttpClient) { }
  fetchAllQuizzes(){
    return this.http.get( environment.baseurl);
  }

  addQuiz(quiz: any){
    return this.http.post(environment.baseurl, quiz)
  }
}
