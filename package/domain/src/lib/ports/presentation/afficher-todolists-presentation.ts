import {Todolist} from "../../entity/todolist";

export interface AfficherTodolistsPresentation{
  notifyTodolist(todolist:Todolist[]) : void;
}
