import { Router } from '@angular/router';
import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Credenciais } from '../models/credenciais';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds : Credenciais = {
    email: '',
    senha: ''
  }
  //Validators.email valida se o valor recebido do input é um tipo e-mail
  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(private usuarioService: UsuarioService, private router: Router ) { }

  ngOnInit(): void {
  }

  logar(){
    this.creds.senha = '';
    this.usuarioService.showMessage('Login realizado com sucesso!')
    this.router.navigate(['/home'])
  }

  validaCampos(): boolean{
    if(this.email.valid && this.senha.valid){
      return true;
    } else {
      return false;
    }
  }

}