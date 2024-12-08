import {Controller} from "./Controller";
import {AjouterTodolistPresenter, AjouterTodolistPresenterVM} from "../presenters/ajouter-todolist-presenter";
import {AjouterTodolistUseCase, DemandeAjoutTodolistPresentation} from "@todolist-clean-archi/domain";

export class AjouterTodolistController extends Controller<AjouterTodolistPresenterVM> {
  constructor(
    private presenter: AjouterTodolistPresenter,
    private ajouterTodolistUseCase: AjouterTodolistUseCase,
  ) {
    super(presenter);
  }

  ajoutTodolistNote(request: DemandeAjoutTodolistPresentation): void {
    this.ajouterTodolistUseCase.execute(request, this.presenter).then();
  }

}
