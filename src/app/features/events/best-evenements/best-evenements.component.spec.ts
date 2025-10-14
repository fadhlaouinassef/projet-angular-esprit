import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestEvenementsComponent } from './best-evenements.component';

describe('BestEvenementsComponent', () => {
  let component: BestEvenementsComponent;
  let fixture: ComponentFixture<BestEvenementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestEvenementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestEvenementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});