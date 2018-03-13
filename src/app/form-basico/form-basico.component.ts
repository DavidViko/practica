import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-basico',
  templateUrl: './form-basico.component.html',
  styleUrls: ['./form-basico.component.scss']
})
export class FormBasicoComponent implements OnInit {

  // atributo necesario para usar en el HTML
  formulario: FormGroup;
  fruta:string;

  constructor(private fb: FormBuilder) {
    this.fruta="banana";
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit() {
  }

  // en el HTML => (ngSubmit)="enviar($event)"
  enviar() {
    console.log('Enviar formulario');
  }
}
