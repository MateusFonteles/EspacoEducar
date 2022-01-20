import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credenciais } from '../models/credenciais';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent implements OnInit {


  creds : Credenciais = {
    email: '',
    senha: ''
  }
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  recuperar(){
    this.usuarioService.showMessage('Te enviamos um email com uma senha provisória!')
    this.router.navigate(['/login'])
  } 
}
