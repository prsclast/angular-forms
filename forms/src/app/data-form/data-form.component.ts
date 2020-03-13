import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup; // Variável que irá representar o formulário

  constructor(private formBuilder: FormBuilder) { } // Construtor de formulário do angular

  ngOnInit() {

    /** this.formulario = new FormGroup({
     *   nome: new FormControl(null),
     *   email: new FormControl(null)
     *  });
     */

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    });
  }

}
