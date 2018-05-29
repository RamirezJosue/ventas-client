import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor() { }

  ngOnInit() {
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      login: new FormControl(null, Validators.required),
      clave: new FormControl(null, Validators.required),
      clave1: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)
    });
  }

}
