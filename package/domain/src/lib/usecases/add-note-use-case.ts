import { NoteRepository } from '../ports/repositories/note-repository';
import { AddNoteRequestPresentation } from '../ports/request/add-note-request-presentation';
import { AddNotePresentation } from '../ports/presentation/add-note-presentation';
import { Note } from '../entity/note';

export class AddNoteUseCase {
  constructor(private noteRepository: NoteRepository) {}

  async execute(
    addNoteRequestPresentation: AddNoteRequestPresentation,
    presenter: AddNotePresentation
  ): Promise<void> {
    const noteAdded: Note = await this.addNote(addNoteRequestPresentation);
    console.log('id ' + noteAdded.id);
    presenter.notifyTodolist(noteAdded);
  }

  private async addNote(
    addNoteRequestPresentation: AddNoteRequestPresentation
  ): Promise<Note> {
    addNoteRequestPresentation.titre =
      'PREFIXE-' + addNoteRequestPresentation.titre;
    return this.noteRepository.add({
      titre: addNoteRequestPresentation.titre,
      valeur: addNoteRequestPresentation.valeur,
      version: 0,
    });
  }
}
