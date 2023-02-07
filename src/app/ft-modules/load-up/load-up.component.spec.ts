import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadUpComponent } from './load-up.component';

describe('LoadUpComponent', () => {
  let component: LoadUpComponent;
  let fixture: ComponentFixture<LoadUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
