import { Component, OnInit } from '@angular/core';
import { Artigo } from 'src/app/models/artigo.model';

import { ArtigosService } from 'src/app/services/artigos.service';
@Component({
  selector: 'app-artigo-visualizar',
  templateUrl: './artigo-visualizar.component.html',
  styleUrls: ['./artigo-visualizar.component.css']
})
export class ArtigoVisualizarComponent implements OnInit {

  artigos: Artigo[]
  displayedColumns = ['id', 'titulo', 'descricao', 'autor', 'action']

  constructor(private artigoService: ArtigosService) { }

  ngOnInit(): void {
    this.artigoService.read().subscribe(artigos => {
      this.artigos = artigos
    })
  }

}