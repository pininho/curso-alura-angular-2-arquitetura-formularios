import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AutentitacaoService } from 'src/app/autenticacao/autentitacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(
    private authService: AutentitacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    //console.log(this.usuario);
    //console.log(this.senha);

    this.authService.autenticar(this.usuario, this.senha).subscribe(
      () => {
        this.router.navigate(['animais']);
      },
      (error) => {
        alert('Usuário ou senha inválido');
        console.log(error);
      }
    );
  }
}
