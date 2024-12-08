import {Presenter} from "./Presenter";
import {AfficherTodolistsPresentation, Todolist} from "@todolist-clean-archi/domain";

export class TodoListPresentationVM {
  id: string | undefined;
  titre: string | undefined;
  valeur: string | undefined;

}

export class AfficherTodolistsPresentationVM {
  todos : TodoListPresentationVM[] | undefined
}


export class AfficherTodolistPresenter extends Presenter<AfficherTodolistsPresentationVM> implements AfficherTodolistsPresentation {

  constructor() {
    super(new AfficherTodolistsPresentationVM());
  }

  notifyTodolist(todolist: Todolist[]): void {
    this.vm.todos = todolist.map(value => {
      return {titre : value.titre, valeur: value.valeur, id: value.id}
    })
    this.notifyVM();
    }



}
