import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QuizserviceService } from '../quizservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpErrorResponse } from '@angular/common/http';



import { ViewquizComponent } from './viewquiz.component';
import { of } from 'rxjs';

describe('ViewquizComponent', () => {
  let component: ViewquizComponent;
  let fixture: ComponentFixture<ViewquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewquizComponent ],
      imports:[
        RouterTestingModule,
        RouterTestingModule.withRoutes([]),
        CommonModule,
        HttpClientTestingModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  });

  function setup(){
    const fixture = TestBed.createComponent(ViewquizComponent)
    const component : ViewquizComponent = fixture.debugElement.componentInstance
    const quizservice = fixture.debugElement.injector.get(QuizserviceService)
    return {fixture,component,quizservice}
  }

  it('should create', () =>{
    const{ component } = setup()
    expect(component).toBeTruthy();
  });

  it('should get all quizes on initial loading' ,() =>{
    const { component } = setup()
    spyOn(component, 'viewQuiz').and.callThrough()
    component.ngOnInit()
    expect(component.viewQuiz).toHaveBeenCalled()
  })

  it('should delete the question',() =>{
     const { component , quizservice } =setup ()
     spyOn( quizservice , 'deleteQuiz').and.callFake(() =>{
       return of(true)
     })
     component.deleteQuiz(2)
     expect(quizservice.deleteQuiz).toHaveBeenCalled()
  })
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ViewquizComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });


  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

});
