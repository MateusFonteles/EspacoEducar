import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atividade } from 'src/app/models/atividade.model';
import { AtividadesService } from 'src/app/services/atividades.service';
@Component({
  selector: 'app-atividade-excluir',
  templateUrl: './atividade-excluir.component.html',
  styleUrls: ['./atividade-excluir.component.css']
})
export class AtividadeExcluirComponent implements OnInit {

  atividade: Atividade

  constructor(
    private atividadeService: AtividadesService, 
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.atividadeService.readById(id).subscribe(atividade => {
      this.atividade = atividade
    })
  }

  deletarAtividade() {
    this.atividadeService.delete(this.atividade.id).subscribe(() => {
      this.atividadeService.showMessage('Atividade excuída com sucesso')
      this.router.navigate(['adm-atividades']);
    })
  }

  cancelar(): void {
    this.router.navigate(['adm-atividades']);
  }

}