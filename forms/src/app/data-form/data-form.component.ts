import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup; // Variável que irá representar o formulário

  constructor(
    private formBuilder: FormBuilder, // Construtor de formulário do angular
    private http: HttpClient
  ) { }

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

  onSubmit() {
    console.log(this.formulario.value);

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .pipe(map(res => res))
      .subscribe(dados => console.log(dados));
  }

}
