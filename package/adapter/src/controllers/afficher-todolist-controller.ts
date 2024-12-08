import {Controller} from "./Controller";
import {
  AfficherTodolistUseCase} from "@todolist-clean-archi/domain";
import {AfficherTodolistsPresentationVM, AfficherTodolistPresenter} from "../presenters/afficher-todolists-presenter";


export class AfficherTodolistController extends Controller<AfficherTodolistsPresentationVM> {
  constructor(
    private presenter: AfficherTodolistPresenter,
    private afficherTodolistUseCase: AfficherTodolistUseCase,
  ) {
    super(presenter);
  }

  afficherTodolistNote(): void {
    this.afficherTodolistUseCase.execute(this.presenter).then();
  }

}
