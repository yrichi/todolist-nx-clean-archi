import {Note} from "../../entity/note";

export interface NoteRepository {
  add(todolist : Partial<Note>) : Promise<Note>

  getNotes(): Promise<Note[]>;

  deleteNote(id: string): Promise<void>;
}
