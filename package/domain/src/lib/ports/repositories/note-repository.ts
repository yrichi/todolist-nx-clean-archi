import {Note} from "../../entity/note";

export interface NoteRepository {
  add(todolist : Partial<Note>) : Promise<Note>

  getNotes(): Promise<Note[]>;

  getNote(id: string ): Promise<Note>;

  deleteNote(id: string): Promise<void>;

  updateNote(param: { valeur: string; titre: string; id: string }): Promise<Note>;
}
