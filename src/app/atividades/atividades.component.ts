import { Categoria } from '../models/categoria.model';
import { CategoriaService } from '../services/categorias.service';
import { Component, OnInit } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { Atividade } from '../models/atividade.model';
import { AtividadesService } from '../services/atividades.service';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {

  categorias: Categoria[]
  atividades: Atividade[] 
  materiaSelecionada = 'historia'

  constructor(
    private atividadeService : AtividadesService, 
    private matChipsModule:MatChipsModule, 
    private categoriaService:CategoriaService) { }

  ngOnInit(): void {
    this.atividadeService.read().subscribe(atividades => {
      this.atividades = atividades
    }),
    this.categoriaService.read().subscribe(categorias => {
      this.categorias = categorias
    })
  }

  
  
  selecionarMateria(atividade:any): void {
    this.materiaSelecionada = atividade
 
  }

}
  