import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categorias.service';
import { Categoria } from 'src/app/models/categoria.model';
@Component({
  selector: 'app-categoria-modificar',
  templateUrl: './categoria-modificar.component.html',
  styleUrls: ['./categoria-modificar.component.css']
})
export class CategoriaModificarComponent implements OnInit {

  categoria: Categoria

  constructor(
    private categoriaService: CategoriaService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.categoriaService.readById(id).subscribe(categoria => {
      this.categoria = categoria
    });
  }

 modificarCategoria(): void {
    this.categoriaService.update(this.categoria).subscribe(() => {
      this.categoriaService.showMessage('categoria atualizada com sucesso!')
      this.router.navigate(["/adm-categorias"]);
    });
  }

  cancelar(): void {
    this.router.navigate(['/adm-categorias']);
  }

}


