import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Qualificacoes } from './qualificacoes';

describe('Qualificacoes', () => {
  let component: Qualificacoes;
  let fixture: ComponentFixture<Qualificacoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qualificacoes],
    }).compileComponents();

    fixture = TestBed.createComponent(Qualificacoes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
