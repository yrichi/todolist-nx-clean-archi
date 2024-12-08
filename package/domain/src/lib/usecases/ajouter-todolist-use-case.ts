import {TodolistRepository} from "../ports/repositories/todolist-repository";
import {DemandeAjoutTodolistPresentation} from "../ports/request/demande-ajout-todolist-presentation";
import {AjoutTodolistPresentation} from "../ports/presentation/ajout-todolist-presentation";
import {Todolist} from "../entity/todolist";

export class AjouterTodolistUseCase {


  constructor(private todolistRepository: TodolistRepository) {
  }

  async execute(
    requestAjoutNoteTodoList: DemandeAjoutTodolistPresentation,
    presenter: AjoutTodolistPresentation
  ): Promise<void> {
    const todoListAdded: Todolist = await this.ajouterNoteTodolist(requestAjoutNoteTodoList)
    console.log("id " +todoListAdded.id)
    presenter.notifyTodolist(todoListAdded)
  }

  private async ajouterNoteTodolist(requestAjoutNoteTodoList: DemandeAjoutTodolistPresentation): Promise<Todolist> {
    requestAjoutNoteTodoList.titre = "PREFIXE-" + requestAjoutNoteTodoList.titre
    return this.todolistRepository.ajouterNoteTodolist({
      titre: requestAjoutNoteTodoList.titre,
      valeur: requestAjoutNoteTodoList.valeur
    })
  }
}
