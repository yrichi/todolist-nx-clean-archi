import {inject, InjectionToken} from "@angular/core";
import {DisplayNotesUseCase, AddNoteUseCase, NoteRepository, RemoveNotesUseCase} from "@todolist-clean-archi/domain";
import {
  DisplayNotesController,
  AddNoteController,
  AddNotePresenter,
  NotesRepositoryInMemory
} from "@todolist-clean-archi/adapter";
import {DisplayNotesPresenter} from "@todolist-clean-archi/adapter";

export const TODOLIST_REPOSITORY_TOKEN = new InjectionToken<NoteRepository>('TodolistRepository', {
  providedIn: 'root',
  factory: () => new NotesRepositoryInMemory()
})


export const AddNoteControllerProvider = {
  provide: AddNoteController,
  useFactory: () => {
    const presenter = inject(AddNotePresenter);
    const usecase = inject(AddNoteUseCase);
    return new AddNoteController(presenter, usecase);
  }
}


export const AddNoteUseCaseProvider = {
  provide: AddNoteUseCase,
  useFactory: () => {
    const repository = inject(TODOLIST_REPOSITORY_TOKEN);
    return new AddNoteUseCase(repository)
  }
}


export const AddNotePresenterProvider = {
  provide: AddNotePresenter,
  useFactory: () => new AddNotePresenter()
}

export const DisplayNotesControllerProvider = {
  provide: DisplayNotesController,
  useFactory: () => {
    const presenter = inject(DisplayNotesPresenter);
    const usecase = inject(DisplayNotesUseCase);
    const removeNotesUseCase = inject(RemoveNotesUseCase);
    return new DisplayNotesController(presenter, usecase, removeNotesUseCase);
  }
}

export const DisplayNotesUseCaseProvider = {
  provide: DisplayNotesUseCase,
  useFactory: () => {
    const repository = inject(TODOLIST_REPOSITORY_TOKEN);
    return new DisplayNotesUseCase(repository)
  }
}


export const RemoveNoteUseCaseProvider = {
  provide: RemoveNotesUseCase,
  useFactory: () => {
    const repository = inject(TODOLIST_REPOSITORY_TOKEN);
    return new RemoveNotesUseCase(repository)
  }
}



export const DisplayNotesPresenterProvider = {
  provide: DisplayNotesPresenter,
  useFactory: () => new DisplayNotesPresenter()
}
