import {Controller} from "./Controller";
import {
  DisplayNotesUseCase, RemoveNotesUseCase
} from "@todolist-clean-archi/domain";
import {DisplayNotePresentationVM, DisplayNotesPresenter} from "../presenters/display-notes-presenter";


export class DisplayNotesController extends Controller<DisplayNotePresentationVM> {
  constructor(
    private presenter: DisplayNotesPresenter,
    private displayNoteUseCase: DisplayNotesUseCase,
    private removeNotesUseCase: RemoveNotesUseCase,
  ) {
    super(presenter);
  }

  displayNote(): void {
    this.displayNoteUseCase.execute(this.presenter).then();
  }

  deleteNote(id: string) {
    return this.removeNotesUseCase.execute(this.presenter,id)
  }
}
