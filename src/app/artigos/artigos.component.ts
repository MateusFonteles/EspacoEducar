import { Component, OnInit } from '@angular/core';
import { Artigo } from '../models/artigo.model';
import { ArtigosService } from '../services/artigos.service';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.css']
})
export class ArtigosComponent implements OnInit {


  artigos: Artigo[]

  constructor(
    private artigosService: ArtigosService) { }

  ngOnInit(): void {
    this.artigosService.read().subscribe(artigos => {
      this.artigos = artigos
    })
  }
}
