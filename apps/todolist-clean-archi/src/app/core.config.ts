import {inject, InjectionToken} from "@angular/core";
import {AfficherTodolistUseCase, AjouterTodolistUseCase, TodolistRepository} from "@todolist-clean-archi/domain";
import {
  AfficherTodolistController,
  AjouterTodolistController,
  AjouterTodolistPresenter,
  TodolistInMemoriesRepository
} from "@todolist-clean-archi/adapter";
import {AfficherTodolistPresenter} from "@todolist-clean-archi/adapter";

export const TODOLIST_REPOSITORY_TOKEN = new InjectionToken<TodolistRepository>('TodolistRepository', {
  providedIn: 'root',
  factory: () => new TodolistInMemoriesRepository()
})


export const AjoutTodolistControllerProvider = {
  provide: AjouterTodolistController,
  useFactory: () => {
    const presenter = inject(AjouterTodolistPresenter);
    const usecase = inject(AjouterTodolistUseCase);
    return new AjouterTodolistController(presenter, usecase);
  }
}






export const AjouterTodolistUseCaseProvider = {
  provide: AjouterTodolistUseCase,
  useFactory: () => {
    const repository = inject(TODOLIST_REPOSITORY_TOKEN);
    return new AjouterTodolistUseCase(repository)
  }
}



export const AjouterTodolistPresenterProvider = {
  provide: AjouterTodolistPresenter,
  useFactory: () => new AjouterTodolistPresenter()
}

export const AfficherTodolistControllerProvider = {
  provide: AfficherTodolistController,
  useFactory: () => {
    const presenter = inject(AfficherTodolistPresenter);
    const usecase = inject(AfficherTodolistUseCase);
    return new AfficherTodolistController(presenter, usecase);
  }
}

export const AfficherTodolistUseCaseProvider = {
  provide: AfficherTodolistUseCase,
  useFactory: () => {
    const repository = inject(TODOLIST_REPOSITORY_TOKEN);
    return new AfficherTodolistUseCase(repository)
  }
}


export const AfficherTodolistPresenterProvider = {
  provide: AfficherTodolistPresenter,
  useFactory: () => new AfficherTodolistPresenter()
}
