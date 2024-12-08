import {Note, NoteRepository} from "@todolist-clean-archi/domain";

export class NotesRepositoryInMemory implements NoteRepository {
  constructor(private notes: Note[] = []) {
  }

  deleteNote(id: string): Promise<void> {
       this.notes = this.notes.filter(value => value.id != id)
    return Promise.resolve();
    }

  getNotes(): Promise<Note[]> {
    return Promise.resolve(this.notes);
  }

  add(todolist: Partial<Note>): Promise<Note> {
    todolist.id = Math.random().toString(36);
    const result = todolist as Note;
    this.notes = [...this.notes, result]
    return Promise.resolve(result);
  }


}
