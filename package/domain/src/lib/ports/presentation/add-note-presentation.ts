import {Note} from "../../entity/note";

export interface AddNotePresentation {
  notifyTodolist(todolist:Note) : void;
}
