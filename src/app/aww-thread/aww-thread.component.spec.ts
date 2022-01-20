import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwwThreadComponent } from './aww-thread.component';

describe('AwwThreadComponent', () => {
  let component: AwwThreadComponent;
  let fixture: ComponentFixture<AwwThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwwThreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwwThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
