import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
    ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check userName', () => {
    const e1 =fixture.debugElement.query(By.css('#userName'));
    expect(e1).toBeTruthy();

  });

  it('should have userName type of text', () => {
    const e1 =fixture.debugElement.query(By.css('#userName'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');

  });

  it('should have name as userName', () => {
    const e1 =fixture.debugElement.query(By.css('#userName'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('userName');
  });

  it('should check Password', () => {
    const e1 =fixture.debugElement.query(By.css('#password'));
    expect(e1).toBeTruthy();
  });

  it('should have type of password for password', () => {
    const e1 =fixture.debugElement.query(By.css('#password'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('password');
  });

  it('should have name of password for password', () => {
    const e1 =fixture.debugElement.query(By.css('#password'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('password');

  })
});