import {Note, NoteRepository} from "../../index";

export class NoteRepositoryBuilder {
  private displayNotes: () => Promise<Note[]> = () => Promise.resolve([]);
  private deleteNote: (id: string) => Promise<void> = () => Promise.resolve();
  private addNote: (note: Partial<Note>) => Promise<Note> = () => Promise.resolve({} as Note)


  withDisplayNotes(displayNotes: () => Promise<Note[]>) {
    this.displayNotes = displayNotes
    return this;
  }

  withDeleteNote(deleteNote : (id:string) => Promise<void>){
    this.deleteNote = deleteNote;
  return this;
}

  build(): NoteRepository {
    return {
      getNotes: this.displayNotes,
      deleteNote: this.deleteNote,
      add: this.addNote
    }
  }
}

