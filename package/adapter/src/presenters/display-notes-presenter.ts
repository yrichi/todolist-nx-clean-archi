import {Presenter} from "./Presenter";
import {DisplayNotePresentation, Note} from "@todolist-clean-archi/domain";

export class NotePresentationVM {
  id: string | undefined;
  titre: string | undefined;
  valeur: string | undefined;

}

export class DisplayNotePresentationVM {
  notes: NotePresentationVM[] | undefined
}


export class DisplayNotesPresenter extends Presenter<DisplayNotePresentationVM> implements DisplayNotePresentation {

  constructor() {
    super(new DisplayNotePresentationVM());
  }

  notifyNoteDeleted(): void {
    this.notifyVM();
  }

  notifyNewNotes(notes: Note[]): void {
    this.vm.notes = notes.map(value => {
      return {titre: value.titre, valeur: value.valeur, id: value.id}
    })
    this.notifyVM();
  }


}
