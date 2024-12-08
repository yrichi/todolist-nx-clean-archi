import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddTodolistComponent} from "../add-todolist/add-todolist.component";
import {Todolist} from "@todolist-clean-archi/domain";

@Component({
  selector: 'app-todolist',
  imports: [CommonModule, AddTodolistComponent],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  todos: Todolist[] = [{id:"1",valeur:"valeur test",titre:"premiere entre"}];

  supprimerTodo(id: string) {
    
  }
}
