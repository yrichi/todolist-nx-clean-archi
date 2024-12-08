import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayNotesComponent } from './display-notes.component';

describe('TodolistComponent', () => {
  let component: DisplayNotesComponent;
  let fixture: ComponentFixture<DisplayNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayNotesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
