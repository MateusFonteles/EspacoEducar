import { UsuarioService } from './../services/usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Credenciais } from '../models/credenciais';

@Component({
  selector: 'app-esqueci',
  templateUrl: './esqueci.component.html',
  styleUrls: ['./esqueci.component.css']
})
export class EsqueciComponent implements OnInit {

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
