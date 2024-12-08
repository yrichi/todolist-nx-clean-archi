import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddTodolistComponent} from "../add-todolist/add-todolist.component";

@Component({
  selector: 'app-todolist',
  imports: [CommonModule, AddTodolistComponent],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {}
