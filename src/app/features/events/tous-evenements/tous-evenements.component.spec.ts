import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousEvenementsComponent } from './tous-evenements.component';

describe('TousEvenementsComponent', () => {
  let component: TousEvenementsComponent;
  let fixture: ComponentFixture<TousEvenementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TousEvenementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TousEvenementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});