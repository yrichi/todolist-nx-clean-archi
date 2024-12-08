import {Presenter} from "./Presenter";
import {AddNotePresentation, Note} from "@todolist-clean-archi/domain";

export class addNotePresenterVM {
  id: string | undefined;
  titre: string | undefined;
  valeur: string | undefined;

}


export class AddNotePresenter extends Presenter<addNotePresenterVM> implements AddNotePresentation {

  constructor() {
    super(new addNotePresenterVM());
  }

  notifyTodolist(todolist: Note): void {
    this.vm.id = todolist.id;
    this.vm.titre = todolist.titre;
    this.vm.valeur = todolist.valeur;
    this.notifyVM();
  }

}
