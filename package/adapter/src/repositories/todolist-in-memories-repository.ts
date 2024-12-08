import {Todolist, TodolistRepository} from "@todolist-clean-archi/domain";

export class TodolistInMemoriesRepository implements TodolistRepository{
  constructor(private todolists: Todolist[] = []) {
  }

  ajouterNoteTodolist(todolist: Partial<Todolist>): Promise<Todolist> {
    todolist.id = Math.random().toString(36);
    const result = todolist as Todolist;
    this.todolists = [... this.todolists, result]
    return Promise.resolve(result);
    }





}