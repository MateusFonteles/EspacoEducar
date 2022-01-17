//Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './modules/routing/routing.module';
import { MaterialModule } from './modules/material/material.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePt);


//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';

//Components
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { AtividadeCrudComponent } from './cruds/atividade/atividade-crud/atividade-crud.component';
import { AdmHomeComponent } from './adm-home/adm-home.component';
import { AtividadeCreateComponent } from './cruds/atividade/atividade-create/atividade-create.component';
import { AtividadesVisualizarComponent } from './cruds/atividade/atividades-visualizar/atividades-visualizar.component';
import { AtividadeModificarComponent } from './cruds/atividade/atividade-modificar/atividade-modificar.component';
import {AtividadeExcluirComponent} from './cruds/atividade/atividade-excluir/atividade-excluir.component';
import { AtividadesComponent } from './atividades/atividades.component';
import { CategoriaCrudComponent } from './cruds/categoria/categoria-crud/categoria-crud.component';
import { CategoriasVisualizarComponent } from './cruds/categoria/categorias-visualizar/categorias-visualizar.component';
import { ArtigosComponent } from './artigos/artigos.component';
import { AtividadeComponent } from './atividade/atividade.component';
import { ArtigoComponent } from './artigo/artigo.component';
import { CategoriaCriarComponent } from './cruds/categoria/categoria-criar/categoria-criar.component';
import { CategoriaModificarComponent } from './cruds/categoria/categoria-modificar/categoria-modificar.component';
import { CategoriaExcluirComponent } from './cruds/categoria/categoria-excluir/categoria-excluir.component';
import { ArtigoVisualizarComponent } from './cruds/artigo/artigo-visualizar/artigo-visualizar.component';
import { ArtigoCrudComponent } from './cruds/artigo/artigo-crud/artigo-crud.component';
import { ArtigoCriarComponent } from './cruds/artigo/artigo-criar/artigo-criar.component';
import { ArtigoModificarComponent } from './cruds/artigo/artigo-modificar/artigo-modificar.component';
import { ArtigoExcluirComponent } from './cruds/artigo/artigo-excluir/artigo-excluir.component';
import { UsuarioCrudComponent } from './cruds/usuario/usuario-crud/usuario-crud.component';
import { UsuariosVisualizarComponent } from './cruds/usuario/usuarios-visualizar/usuarios-visualizar.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContribuaComponent } from './contribua/contribua.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EsqueciComponent } from './esqueci/esqueci.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    AtividadeCrudComponent,
    AdmHomeComponent,
    AtividadeCreateComponent,
    AtividadesVisualizarComponent,
    AtividadeModificarComponent,
    AtividadeExcluirComponent,
    AtividadesComponent,
    CategoriaCrudComponent,
    CategoriasVisualizarComponent,
    ArtigosComponent,
    AtividadeComponent,
    ArtigoComponent,
    CategoriaCriarComponent,
    CategoriaModificarComponent,
    CategoriaExcluirComponent,
    ArtigoVisualizarComponent,
    ArtigoCrudComponent,
    ArtigoCriarComponent,
    ArtigoModificarComponent,
    ArtigoExcluirComponent,
    UsuarioCrudComponent,
    UsuariosVisualizarComponent,
    SobreComponent,
    ContribuaComponent,
    ContatoComponent,
    LoginComponent,
    CadastroComponent,
    EsqueciComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    RouterModule, 
    MatCardModule, 
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatChipsModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }