import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Certificacoes } from './certificacoes';

describe('Certificacoes', () => {
  let component: Certificacoes;
  let fixture: ComponentFixture<Certificacoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Certificacoes],
    }).compileComponents();

    fixture = TestBed.createComponent(Certificacoes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
