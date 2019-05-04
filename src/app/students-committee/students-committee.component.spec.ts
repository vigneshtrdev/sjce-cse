import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsCommitteeComponent } from './students-committee.component';

describe('StudentsCommitteeComponent', () => {
  let component: StudentsCommitteeComponent;
  let fixture: ComponentFixture<StudentsCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
