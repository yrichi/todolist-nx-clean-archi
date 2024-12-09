import {NoteRepository} from "../ports/repositories/note-repository";
import {AddNoteRequestPresentation} from "../ports/request/add-note-request-presentation";
import {AddNotePresentation} from "../ports/presentation/add-note-presentation";
import {Note} from "../entity/note";
import { UpdateNotePresentation } from '../ports/presentation/update-note-presentation';
import { ModifyNoteRequestPresentation } from '../ports/request/modify-note-request-presentation';

export class ModifyNoteUseCase {


  constructor(private noteRepository: NoteRepository) {
  }

  async execute(
    modifyNoteRequestPresentation: ModifyNoteRequestPresentation,
    presenter: UpdateNotePresentation
  ): Promise<void> {
    const noteUpdated: Note = await this.updateNote(modifyNoteRequestPresentation)
    console.log("id " +noteUpdated.id)
    presenter.updateNote(noteUpdated)
  }

  private async updateNote(modifyNoteRequestPresentation:ModifyNoteRequestPresentation): Promise<Note> {
    modifyNoteRequestPresentation.titre = "PREFIXE-" + modifyNoteRequestPresentation.titre
    return this.noteRepository.updateNote({
      id: modifyNoteRequestPresentation.id,
      titre: modifyNoteRequestPresentation.titre,
      valeur: modifyNoteRequestPresentation.valeur
    })
  }
}
