import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryPopupComponent } from './entry-popup.component';

describe('EntryPopupComponent', () => {
  let component: EntryPopupComponent;
  let fixture: ComponentFixture<EntryPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
