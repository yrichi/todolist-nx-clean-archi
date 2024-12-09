import { describe } from 'vitest';
import { NoteRepositoryBuilder } from '../../test/builder/NoteRepositoryBuilder';
import { Note } from '@todolist-clean-archi/domain';
import { ModifyNoteUseCase } from './modify-note-use-case';
import { UpdateNotePresentationBuilder } from '../../test/builder/UpdateNotePresentationBuilder';

describe('ModifyNoteUseCase', () => {
  test('should modify a note', async () => {
    new Promise((resolve) => {
      const note = { id: '1', titre: 'titre1', valeur: 'valeur1' } as Note;
      const repository = new NoteRepositoryBuilder()
        .withUpdateNote((note) => Promise.resolve(note))
        .withGetNote(() => Promise.resolve(note))
        .build();

      const presentation = new UpdateNotePresentationBuilder()
        .withUpdateNotes((note1) => note1)
        .build();

      const useCase = new ModifyNoteUseCase(repository).execute(
        { id: '1', titre: 'titre1', valeur: 'valeur1' },
        presentation
      );
    }).then((note) => expect(note.version).toEqual(2));
  });
});
