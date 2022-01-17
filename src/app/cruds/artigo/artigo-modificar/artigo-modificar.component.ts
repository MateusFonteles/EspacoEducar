import { Artigo } from 'src/app/models/artigo.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtigosService } from 'src/app/services/artigos.service';

@Component({
  selector: 'app-artigo-modificar',
  templateUrl: './artigo-modificar.component.html',
  styleUrls: ['./artigo-modificar.component.css']
})
export class ArtigoModificarComponent implements OnInit {

  artigo: Artigo

  constructor(
    private artigosService: ArtigosService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.artigosService.readById(id).subscribe(artigo => {
      this.artigo = artigo
    });
  }

  modificarArtigo(): void {
    this.artigosService.update(this.artigo).subscribe(() => {
      this.artigosService.showMessage('Artigo modificado com sucesso!')
      this.router.navigate(["/adm-artigos"]);
    });
  }

  cancel(): void {
    this.router.navigate(['/adm-artigos']);
  }

}

