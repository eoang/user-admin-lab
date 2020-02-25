import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserControlerComponent } from './user-controler.component';

describe('UserControlerComponent', () => {
  let component: UserControlerComponent;
  let fixture: ComponentFixture<UserControlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserControlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserControlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
