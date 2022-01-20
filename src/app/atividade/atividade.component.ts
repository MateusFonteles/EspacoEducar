import { AtividadesService } from 'src/app/services/atividades.service';
import { Atividade } from './../models/atividade.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent implements OnInit {

  atividade: Atividade
  materiaSelecionada: string

  constructor(
    private atividadesService: AtividadesService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.atividadesService.readById(id).subscribe(atividade => {
      this.atividade = atividade
    });
  }

  navigateToAtividades(): void {
    this.router.navigate(['/atividades'])
  }
}



