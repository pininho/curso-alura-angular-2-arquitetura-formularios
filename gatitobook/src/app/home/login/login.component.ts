import { Component, OnInit } from '@angular/core';

import { AutentitacaoService } from 'src/app/autenticacao/autentitacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(private authService: AutentitacaoService) {}

  ngOnInit(): void {}

  login() {
    //console.log(this.usuario);
    //console.log(this.senha);

    this.authService.autenticar(this.usuario, this.senha).subscribe(
      () => {
        console.log('Autenticado com sucesso');
      },
      (error) => {
        alert('Usuário ou senha inválido');
        console.log(error);
      }
    );
  }
}
