import {NoteRepository} from "../ports/repositories/note-repository";

import {Note} from "../entity/note";
import {DisplayNotePresentation} from "../ports/presentation/display-note-presentation";

export class DisplayNotesUseCase {


  constructor(private noteRepository: NoteRepository) {
  }

  async execute(presenter: DisplayNotePresentation): Promise<void> {
    const todoLists: Note[] = await this.noteRepository.getNotes();
    presenter.notifyNewNotes(todoLists)
  }

}
