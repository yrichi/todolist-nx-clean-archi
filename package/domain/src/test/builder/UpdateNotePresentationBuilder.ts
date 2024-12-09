import { DisplayNotePresentation, Note } from '../../index';
import { UpdateNotePresentation } from '../../lib/ports/presentation/update-note-presentation';

export class UpdateNotePresentationBuilder {
  private updateNote: (note: Note) => void = () => undefined;

  withUpdateNotes(note: (note1: Note) => Note) {
    this.updateNote = note;
    return this;
  }

  build(): UpdateNotePresentation {
    return {
      updateNote: this.updateNote,
    };
  }
}
