import { ContatoComponent } from './../../contato/contato.component';
import { ContribuaComponent } from './../../contribua/contribua.component';
import { UsuarioCrudComponent } from './../../cruds/usuario/usuario-crud/usuario-crud.component';
import { ArtigoExcluirComponent } from './../../cruds/artigo/artigo-excluir/artigo-excluir.component';
import { ArtigoModificarComponent } from './../../cruds/artigo/artigo-modificar/artigo-modificar.component';
import { ArtigoCrudComponent } from './../../cruds/artigo/artigo-crud/artigo-crud.component';
import { CategoriaModificarComponent } from './../../cruds/categoria/categoria-modificar/categoria-modificar.component';
import { CategoriaCriarComponent } from './../../cruds/categoria/categoria-criar/categoria-criar.component';
import { ArtigoComponent } from './../../artigo/artigo.component';
import { CategoriaCrudComponent } from './../../cruds/categoria/categoria-crud/categoria-crud.component';
import { AtividadeModificarComponent } from './../../cruds/atividade/atividade-modificar/atividade-modificar.component';
import { AtividadeCreateComponent } from '../../cruds/atividade/atividade-create/atividade-create.component';
import { AdmHomeComponent } from './../../adm-home/adm-home.component';
import { AtividadeExcluirComponent } from 'src/app/cruds/atividade/atividade-excluir/atividade-excluir.component';
import { ArtigosComponent } from 'src/app/artigos/artigos.component';

import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { AtividadeCrudComponent } from 'src/app/cruds/atividade/atividade-crud/atividade-crud.component';
import { AtividadesComponent } from 'src/app/atividades/atividades.component';
import { AtividadeComponent } from 'src/app/atividade/atividade.component';
import { CategoriaExcluirComponent } from 'src/app/cruds/categoria/categoria-excluir/categoria-excluir.component';
import { ArtigoCriarComponent } from 'src/app/cruds/artigo/artigo-criar/artigo-criar.component';
import { SobreComponent } from 'src/app/sobre/sobre.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'adm-atividades', component: AtividadeCrudComponent},
  { path: 'adm-home', component: AdmHomeComponent},
  { path: 'criar-atividade', component: AtividadeCreateComponent},
  { path: 'modificar-atividade/:id', component: AtividadeModificarComponent},
  { path: 'excluir-atividade/:id' , component: AtividadeExcluirComponent},
  { path: 'atividades', component: AtividadesComponent},
  { path: 'adm-categorias', component: CategoriaCrudComponent},
  { path: 'artigos', component: ArtigosComponent},
  { path: 'atividade/:id', component: AtividadeComponent},
  { path: 'artigo/:id', component: ArtigoComponent},
  { path: 'criar-categoria', component: CategoriaCriarComponent },
  { path: 'modificar-categoria/:id', component: CategoriaModificarComponent},
  { path: 'excluir-categoria/:id', component: CategoriaExcluirComponent},
  { path: 'adm-artigos', component: ArtigoCrudComponent },
  { path: 'criar-artigo', component: ArtigoCriarComponent},
  { path: 'modificar-artigo/:id', component: ArtigoModificarComponent},
  { path: 'excluir-artigo/:id', component: ArtigoExcluirComponent},
  { path: 'adm-usuarios', component: UsuarioCrudComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'contribua', component: ContribuaComponent},
  { path: 'contato', component: ContatoComponent}
  
];
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }

