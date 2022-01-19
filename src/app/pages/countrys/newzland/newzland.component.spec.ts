import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewzlandComponent } from './newzland.component';

describe('NewzlandComponent', () => {
  let component: NewzlandComponent;
  let fixture: ComponentFixture<NewzlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewzlandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewzlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
