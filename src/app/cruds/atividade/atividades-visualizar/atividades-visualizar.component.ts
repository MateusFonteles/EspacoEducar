import { Component, OnInit } from '@angular/core';
import { Atividade } from 'src/app/models/atividade.model';
import { AtividadesService } from 'src/app/services/atividades.service';

@Component({
  selector: 'app-atividades-visualizar',
  templateUrl: './atividades-visualizar.component.html',
  styleUrls: ['./atividades-visualizar.component.css']
})
export class AtividadesVisualizarComponent implements OnInit {

  atividades: Atividade[]
  displayedColumns = ['id', 'imagem', 'titulo', 'materia', 'serie', 'descricao', 'action']

  constructor(private atividadeService: AtividadesService) { }

  ngOnInit(): void {
    this.atividadeService.read().subscribe(atividades => {
      this.atividades = atividades
    })
  }

}
