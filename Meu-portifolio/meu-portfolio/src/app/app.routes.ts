import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sobre',
    loadComponent: () =>
      import('./features/sobre/sobre').then(
        m => m.Sobre
      )
  },

  {
    path: 'objetivo-profissional',
    loadComponent: () =>
      import('./features/objetivo-profissional/objetivo-profissional').then(
        m => m.ObjetivoProfissional
      )
  },

  {
    path: 'formacao-academica',
    loadComponent: () =>
      import('./features/formacao-academica/formacao-academica').then(
        m => m.FormacaoAcademica
      )
  },

  {
    path: 'habilidades',
    loadComponent: () =>
      import('./features/habilidades/habilidades').then(
        m => m.Habilidades
      )
  },

  {
    path: 'certificacoes',
    loadComponent: () =>
      import('./features/certificacoes/certificacoes').then(
        m => m.Certificacoes
      )
  },

  {
    path: 'qualificacoes',
    loadComponent: () =>
      import('./features/qualificacoes/qualificacoes').then(
        m => m.Qualificacoes
      )
  },

  {
    path: 'projetos',
    loadComponent: () =>
      import('./features/projetos/projetos').then(
        m => m.Projetos
      )
  },

  // Redirecionamento inicial
  {
    path: '',
    redirectTo: 'sobre',
    pathMatch: 'full'
  },

  // Página não encontrada
  {
    path: '**',
    redirectTo: 'sobre'
  }
];