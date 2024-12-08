import {Todolist} from "../../entity/todolist";

export interface TodolistRepository{
  ajouterNoteTodolist(todolist : Partial<Todolist>) : Promise<Todolist>
}
