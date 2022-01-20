import { Categoria } from 'src/app/models/categoria.model';
import { AtividadesService } from 'src/app/services/atividades.service';
import { Component, OnInit } from '@angular/core';
import { Atividade } from 'src/app/models/atividade.model';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categorias.service'; 
import { Serie } from 'src/app/models/serie.model';
import { SeriesService } from 'src/app/services/series.service'; 

@Component({
  selector: 'app-atividade-create',
  templateUrl: './atividade-create.component.html',
  styleUrls: ['./atividade-create.component.css']
})
export class AtividadeCreateComponent implements OnInit {

  materiaSelecionada : Categoria

  serieSelecionada: Serie

  categorias: Categoria[]
  
  series: Serie[]

  dataPub : string = new Date().toLocaleString()
 atividade: Atividade = {
  id: 0,
  titulo:'',
  serie: null,
  materia: null,
  imagem: '',
  descricao: '',
  autor:'',
  data: this.dataPub
 }
 
   constructor(private atividadesService: AtividadesService, 
     private router: Router,
     private categoriaService: CategoriaService,
     private seriesService: SeriesService,
     ) { }
  
   ngOnInit(): void {
    this.categoriaService.read().subscribe(categorias => {
      this.categorias = categorias
    })
    this.seriesService.read().subscribe(series => {
      this.series = series
    })
   }


   criarAtividade(): void{
     this.atividade.serie = this.serieSelecionada
     this.atividade.materia = this.materiaSelecionada
     this.atividadesService.create(this.atividade).subscribe(() => {
       this.atividadesService.showMessage('Postagem criada!')
       this.router.navigate(['/adm-atividades'])
     })
     }
   
   cancelar(): void{
     this.router.navigate(['/adm-atividades'])
   }
   
 }
 