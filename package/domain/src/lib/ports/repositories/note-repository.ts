import {Note} from "../../entity/note";

export interface NoteRepository {
  add(todolist : Partial<Note>) : Promise<Note>

  afficherNotesTodolist(): Promise<Note[]>;

  deleteNote(id: string): Promise<void>;
}
