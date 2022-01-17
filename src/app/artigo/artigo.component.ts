import { ArtigosService } from './../services/artigos.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artigo } from '../models/artigo.model';

@Component({
  selector: 'app-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css']
})
export class ArtigoComponent implements OnInit {

  artigo: Artigo

  constructor(
    private artigosService: ArtigosService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit( ): void {
  const id = +this.route.snapshot.paramMap.get('id')
  this.artigosService.readById(id).subscribe(artigo =>{
    this.artigo = artigo
  }   )

}
  navigateToArtigos(): void {
    this.router.navigate(['/artigos'])
  }
  
}