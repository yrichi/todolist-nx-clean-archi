import {Note} from "../../entity/note";

export interface DisplayNotePresentation {
  notifyNewNotes(todolist:Note[]) : void;

  notifyNoteDeleted(): void;
}
