import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatGridListModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from 'protractor';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        MatButtonModule,
        MatGridListModule,
        MatInputModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it('should add the operation to input and update model', async(()=>{
  //   const fixture = TestBed.createComponent(AppComponent);
  //   let field : HTMLInputElement = fixture.debugElement.
  //   field.value = '5+2';
  //   field.dispatchEvent(new Event('input'));
  //   fixture.detectChanges();

  //   expect(field.textContent).toBe('5+2');
  //   // expect(operation.operacion)
  // }));


  // it(`should have a input`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('input')).;
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to helloWorld!');
  // });
});
