import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atividade } from 'src/app/models/atividade.model';
import { Categoria } from 'src/app/models/categoria.model';
import { AtividadesService } from 'src/app/services/atividades.service';
import { Serie } from 'src/app/models/serie.model';
import { CategoriaService } from 'src/app/services/categorias.service';
import { SeriesService } from 'src/app/services/series.service';
@Component({
  selector: 'app-atividade-modificar',
  templateUrl: './atividade-modificar.component.html',
  styleUrls: ['./atividade-modificar.component.css']
})
export class AtividadeModificarComponent implements OnInit {

  materiaSelecionada : Categoria

  serieSelecionada: Serie

  categorias: Categoria[]
  
  series: Serie[]

 atividade: Atividade 


  constructor(
    private atividadeService: AtividadesService, 
    private router: Router, 
    private route: ActivatedRoute,
    private seriesService: SeriesService,
    private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.atividadeService.readById(id).subscribe(atividade => {
      this.atividade = atividade
    })
    this.categoriaService.read().subscribe(categorias => {
      this.categorias = categorias
    })
    this.seriesService.read().subscribe(series => {
      this.series = series
    })
    
  }

  modificarAtividade(): void {
    this.atividade.serie = this.serieSelecionada
    this.atividade.materia = this.materiaSelecionada
    this.atividadeService.update(this.atividade).subscribe(() => {
      this.atividadeService.showMessage('Atividade atualizada com sucesso!')
      this.router.navigate(['adm-atividades']);
    })

  }

  
  cancelar(): void {
    this.router.navigate(['adm-atividades']);
  }

}


