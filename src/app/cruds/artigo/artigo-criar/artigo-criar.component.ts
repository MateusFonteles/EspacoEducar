import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtigosService } from 'src/app/services/artigos.service';
import { Artigo } from 'src/app/models/artigo.model';
@Component({
  selector: 'app-artigo-criar',
  templateUrl: './artigo-criar.component.html',
  styleUrls: ['./artigo-criar.component.css']
})
export class ArtigoCriarComponent implements OnInit {

  dataPub : string = new Date().toLocaleString()

  artigo: Artigo = {
    titulo: '',
    texto: '',
    autor: '',
    descricao:'',
    data: this.dataPub,
  }
 
 
   constructor(private artigosService: ArtigosService, 
     private router: Router) { }
  
   ngOnInit(): void {
   }
 
   criarArtigo(): void{
     this.artigosService.create(this.artigo).subscribe(() => {
       this.artigosService.showMessage('Artigo criado!')
       this.router.navigate(['/adm-artigos'])
     })
     }
   
   cancelar(): void{
     this.router.navigate(['/adm-artigos'])
   }
   
 }
 