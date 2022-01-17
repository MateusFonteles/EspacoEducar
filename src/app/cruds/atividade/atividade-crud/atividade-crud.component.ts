import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atividade-crud',
  templateUrl: './atividade-crud.component.html',
  styleUrls: ['./atividade-crud.component.css']
})
export class AtividadeCrudComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  navigateToAtividadeCreate(): void {
    this.router.navigate(['/criar-atividade'])
  }
  
  navigateToPainel(): void {
    this.router.navigate(['/adm-home'])
  }

}

