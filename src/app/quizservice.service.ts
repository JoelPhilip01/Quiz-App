import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizserviceService {
  score: any;
  constructor(private http: HttpClient) { }
  setScore(data: any){
    this.score = data; 
  }
  getScore(){
    return this.score
  }

  fetchAllQuizzes(){
    return this.http.get( environment.baseurl);
  }

  addQuiz(quiz: any){
    return this.http.post(environment.baseurl, quiz)
  }
}
