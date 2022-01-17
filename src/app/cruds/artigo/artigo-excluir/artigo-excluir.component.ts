import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artigo } from 'src/app/models/artigo.model';
import { ArtigosService } from 'src/app/services/artigos.service';

@Component({
  selector: 'app-artigo-excluir',
  templateUrl: './artigo-excluir.component.html',
  styleUrls: ['./artigo-excluir.component.css']
})
export class ArtigoExcluirComponent implements OnInit {

  artigo: Artigo

  constructor(
    private artigosService: ArtigosService, 
    private router: Router , 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.artigosService.readById(id).subscribe(artigo => {
      this.artigo = artigo
    })
  }

  excluirArtigo() {
    this.artigosService.delete(this.artigo.id).subscribe(() => {
      this.artigosService.showMessage('Artigo excuído com sucesso')
      this.router.navigate(['/adm-artigos'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/adm-artigos'])
  }

}
