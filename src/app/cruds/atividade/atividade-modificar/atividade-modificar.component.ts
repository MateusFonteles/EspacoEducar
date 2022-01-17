import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atividade } from 'src/app/models/atividade.model';
import { AtividadesService } from 'src/app/services/atividades.service';

@Component({
  selector: 'app-atividade-modificar',
  templateUrl: './atividade-modificar.component.html',
  styleUrls: ['./atividade-modificar.component.css']
})
export class AtividadeModificarComponent implements OnInit {

  atividade: Atividade

  constructor(
    private atividadeService: AtividadesService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.atividadeService.readById(id).subscribe(atividade => {
      this.atividade = atividade
    });
  }

  modificarAtividade(): void {
    this.atividadeService.update(this.atividade).subscribe(() => {
      this.atividadeService.showMessage('Atividade atualizada com sucesso!')
      this.router.navigate(['adm-atividades']);
    });
  }

  cancelar(): void {
    this.router.navigate(['adm-atividades']);
  }

}


