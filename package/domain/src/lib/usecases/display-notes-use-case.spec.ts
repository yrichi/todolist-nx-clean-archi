import {describe} from "vitest";
import {Note} from '../entity/note';
import {NoteRepositoryBuilder} from "../../test/builder/NoteRepositoryBuilder";
import {DisplayNotesUseCase} from './display-notes-use-case';
import {DisplayNotesPresentationBuilder} from "../../test/builder/NotePresentationBuilder";

describe('get display notes usecase ', () => {
  test("should display note", async () => {
    return new Promise(resolve => {
      const notes: Note[] = [
        {id: "1", titre: 'titre1', valeur: 'valeur1'},
        {id: "2", titre: 'titre2', valeur: 'valeur2'}
      ];

      const repository = new NoteRepositoryBuilder().withDisplayNotes(() => {
        return Promise.resolve(notes);
      })

      const useCase = new DisplayNotesUseCase(repository.build())
      const presentation = new DisplayNotesPresentationBuilder()
        .withNotifyNewNotes(() => resolve(notes))
        .build()

      useCase.execute(presentation)
    }).then(notes => {
      expect((notes as Note[]).length).toEqual(2)
    })
  })

})
