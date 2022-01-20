import { Component, OnInit } from '@angular/core';
import { Atividade } from '../models/atividade.model';
import { Categoria } from '../models/categoria.model';
import { CategoriaService } from '../services/categorias.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atividades-materia',
  templateUrl: './atividades-materia.component.html',
  styleUrls: ['./atividades-materia.component.css']
})
export class AtividadesMateriaComponent implements OnInit {

  categoria: Categoria
  constructor(private categoriaService: CategoriaService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.categoriaService.readById(id).subscribe(categoria => {
      this.categoria = categoria
    })
  }

}
