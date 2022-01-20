import { Usuario } from 'src/app/models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  dataPub : string = new Date().toLocaleString()

  usuario: Usuario = {
    nome: '',
    email: '',
    cpf: '',
    senha:'',
    data: this.dataPub,
  }
 
 
   constructor(private usuarioService: UsuarioService, 
     private router: Router) { }
  
   ngOnInit(): void {
   }
 
   criarUsuario(): void{
     this.usuarioService.create(this.usuario).subscribe(() => {
       this.usuarioService.showMessage('Usuário cadastrado com sucesso!')
       this.router.navigate(['/'])
     })
     }
   
   cancelar(): void{
     this.router.navigate(['/'])
   }
   
 }




