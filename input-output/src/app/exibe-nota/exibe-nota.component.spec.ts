import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeNotaComponent } from './exibe-nota.component';

describe('ExibeNotaComponent', () => {
  let component: ExibeNotaComponent;
  let fixture: ComponentFixture<ExibeNotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibeNotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibeNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
