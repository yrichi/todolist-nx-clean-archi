import {NoteRepository} from "../ports/repositories/note-repository";

import {Note} from "../entity/note";
import {DisplayNotePresentation} from "../ports/presentation/display-note-presentation";

export class RemoveNotesUseCase {


  constructor(private noteRepository: NoteRepository) {
  }

  async execute(presenter: DisplayNotePresentation, id: string): Promise<void> {
    await this.noteRepository.deleteNote(id);
    presenter.notifyNoteDeleted()
  }

}
