import {Note, NoteRepository} from "../../index";

export class NoteRepositoryBuilder {
  private displayNotes: () => Promise<Note[]> = () => Promise.resolve([]);
  private deleteNote: (id: string) => Promise<void> = () => Promise.resolve();
  private addNote: (note: Partial<Note>) => Promise<Note> = () => Promise.resolve({} as Note)
  private updateNote: (note: Note) => Promise<Note>= () => Promise.resolve({} as Note);
  private getNote: (id:string) => Promise<Note>= () => Promise.resolve({} as Note);


  withDisplayNotes(displayNotes: () => Promise<Note[]>) {
    this.displayNotes = displayNotes
    return this;
  }

  withDeleteNote(deleteNote : (id:string) => Promise<void>){
    this.deleteNote = deleteNote;
  return this;
}

  withUpdateNote(updateNote : (note: Note) => Promise<Note>){
    this.updateNote = updateNote;
    return this;
  }


  withGetNote(param: () => Promise<Note>) {
    this.getNote = param;
    return this;
  }

  build(): NoteRepository {
    return {
      getNotes: this.displayNotes,
      getNote: this.getNote,
      deleteNote: this.deleteNote,
      updateNote: this.updateNote,
      add: this.addNote
    }
  }

}

