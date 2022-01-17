import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cadastro } from 'src/app/models/cadastro';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  creds: Cadastro = {
    nome: '',
    email:'',
    senha:''
    }

  //Validators.email valida se o valor recebido do input é um tipo e-mail
  nome = new FormControl(null, Validators.minLength(3));
  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(private usuarioService: UsuarioService, private router: Router ) { }
  ngOnInit(): void {
  }

 cadastrar(){
    this.usuarioService.showMessage('Cadastro realizado com sucesso!')
    this.router.navigate(['/login'])
  } 



}
