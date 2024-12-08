import {Presenter} from "./Presenter";
import {AjoutTodolistPresentation, Todolist} from "@todolist-clean-archi/domain";

export class AjouterTodolistPresenterVM {
  id: string | undefined;
  titre: string | undefined;
  valeur: string | undefined;

}


export class AjouterTodolistPresenter extends Presenter<AjouterTodolistPresenterVM> implements AjoutTodolistPresentation {

  constructor() {
    super(new AjouterTodolistPresenterVM());
  }

  notifyTodolist(todolist: Todolist): void {
    this.vm.id = todolist.id;
    this.vm.titre = todolist.titre;
    this.vm.valeur = todolist.valeur;
    this.notifyVM();
  }

}
