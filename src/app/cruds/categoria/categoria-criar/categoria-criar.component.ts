import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-categoria-criar',
  templateUrl: './categoria-criar.component.html',
  styleUrls: ['./categoria-criar.component.css']
})
export class CategoriaCriarComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }
 
 
   constructor(private categoriaService: CategoriaService, 
     private router: Router) { }
  
   ngOnInit(): void {
   }
 
   criarCategoria(): void{
     this.categoriaService.create(this.categoria).subscribe(() => {
       this.categoriaService.showMessage('Categoria criada!')
       this.router.navigate(['/adm-categorias'])
     })
     }
   
   cancelar(): void{
     this.router.navigate(['/adm-categorias'])
   }
   
 }
 