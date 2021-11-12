import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizserviceService {
  score: any;
  totalQ:any;
  constructor(private http: HttpClient) { }
  setScore(scored: any, totalq:any){
    this.score = scored; 
    this.totalQ = totalq;
  }
  getScore(){
    return [this.score,this.totalQ]
  }

  fetchAllQuizzes(){
    return this.http.get( environment.baseurl);
  }

  addQuiz(quiz: any){
    return this.http.post(environment.baseurl, quiz)
  }
  deleteQuiz(id: number){
    return this.http.delete( environment.baseurl+id)
  }
  fetchAllLogins(){
    return this.http.get( environment.loginurl);
  }
  addLoginUser(user: any){
    return this.http.post(environment.loginurl, user)
  }
}
