import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artigo-crud',
  templateUrl: './artigo-crud.component.html',
  styleUrls: ['./artigo-crud.component.css']
})
export class ArtigoCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToCriarArtigo(): void {
    this.router.navigate(['/criar-artigo'])
  }
  navigateToPainel(): void {
    this.router.navigate(['/adm-home'])
  }
}
