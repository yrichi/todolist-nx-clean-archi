import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-todolist',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-todolist.component.html',
  styleUrl: './add-todolist.component.css',
})
export class AddTodolistComponent {
  ajoutTodo: FormGroup;


  constructor() {
    this.ajoutTodo = new FormGroup({
      valeur: new FormControl("")
    })
  }
  validerAjoutTodo() {

  }
}
