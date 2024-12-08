import {Controller} from "./Controller";
import {AddNotePresenter, addNotePresenterVM} from "../presenters/add-note-presenter";
import {AddNoteUseCase, AddNoteRequestPresentation} from "@todolist-clean-archi/domain";

export class AddNoteController extends Controller<addNotePresenterVM> {
  constructor(
    private presenter: AddNotePresenter,
    private addNoteUseCase: AddNoteUseCase,
  ) {
    super(presenter);
  }

  execute(request: AddNoteRequestPresentation): void {
    this.addNoteUseCase.execute(request, this.presenter).then();
  }

}
