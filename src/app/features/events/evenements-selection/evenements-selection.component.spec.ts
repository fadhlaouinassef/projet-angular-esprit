import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementsSelectionComponent } from './evenements-selection.component';

describe('EvenementsSelectionComponent', () => {
  let component: EvenementsSelectionComponent;
  let fixture: ComponentFixture<EvenementsSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvenementsSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenementsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});