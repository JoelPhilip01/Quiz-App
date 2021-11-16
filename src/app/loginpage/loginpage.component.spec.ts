import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QuizserviceService } from '../quizservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpErrorResponse } from '@angular/common/http';

import { LoginpageComponent } from './loginpage.component';
import { of } from 'rxjs';

describe('LoginpageComponent', () => {
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpageComponent ],
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
    const fixture = TestBed.createComponent(LoginpageComponent)
    const component : LoginpageComponent = fixture.debugElement.componentInstance
    const quizservice = fixture.debugElement.injector.get(QuizserviceService)
    return {fixture,component,quizservice}
  }

  it('should create', () =>{
    const{ component } = setup()
    expect(component).toBeTruthy();
  });

  it('should add the user',() =>{
    const { component , quizservice } =setup ()
    spyOn( quizservice , 'addLoginUser').and.callFake(() =>{
      return of(true)
    })
    component.addNewUser('roy','4321')
    expect(quizservice.addLoginUser).toHaveBeenCalled()
 })

  
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LoginpageComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
