import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalShellComponent } from './animal-shell.component';

describe('AnimalShellComponent', () => {
  let component: AnimalShellComponent;
  let fixture: ComponentFixture<AnimalShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});