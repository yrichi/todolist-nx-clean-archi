import {TodolistRepository} from "../ports/repositories/todolist-repository";

import {Todolist} from "../entity/todolist";
import {AfficherTodolistsPresentation} from "../ports/presentation/afficher-todolists-presentation";

export class AfficherTodolistUseCase {


  constructor(private todolistRepository: TodolistRepository) {
  }

  async execute(presenter: AfficherTodolistsPresentation): Promise<void> {
    const todoLists: Todolist[] = await this.todolistRepository.afficherNotesTodolist();
    presenter.notifyTodolist(todoLists)
  }

}
