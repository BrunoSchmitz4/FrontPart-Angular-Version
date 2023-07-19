import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable' 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() =>
      resolve('Valor assíncrono'), 2000 )
  });

  constructor(){

  }

  ngOnInit(){

  }
}
