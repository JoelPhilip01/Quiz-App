import { Component, OnInit } from '@angular/core';
import { Quiz } from '../Quiz';
import { QuizserviceService } from '../quizservice.service';
@Component({
  selector: 'app-viewquiz',
  templateUrl: './viewquiz.component.html',
  styleUrls: ['./viewquiz.component.css']
})
export class ViewquizComponent implements OnInit {
  quizzes : Array<Quiz>=[]
  constructor(private quizService: QuizserviceService) { }

  ngOnInit(): void {
    this.viewQuiz();
  }
  viewQuiz(){
    this.quizService.fetchAllQuizzes()
    .subscribe((res: any) => {
      
      this.quizzes = res;
    });
  }

  deleteQuiz(id: number) {
    this.quizService.deleteQuiz(id)
      .subscribe((res: any) => {
        console.log(res);
        window.location.reload();
      });
  }


}
