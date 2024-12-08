import {Todolist} from "../../entity/todolist";

export interface AjoutTodolistPresentation{
  notifyTodolist(todolist:Todolist) : void;
}
