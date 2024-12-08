import {inject, InjectionToken} from "@angular/core";
import {AjouterTodolistUseCase, TodolistRepository} from "@todolist-clean-archi/domain";
import {AjouterTodolistController, TodolistInMemoriesRepository} from "@todolist-clean-archi/adapter";
import {AjouterTodolistPresenter} from "@todolist-clean-archi/adapter";

export const ITodolistRepository = new InjectionToken<TodolistRepository>('TodolistRepository', {
  providedIn: 'root',
  factory: () => new TodolistInMemoriesRepository()
})


export const AjoutTodolistControllerProvider = {
  provide: AjouterTodolistController,
  useFactory: () => {
    const presenter = inject(AjouterTodolistPresenter);
    const usecase = inject(AjouterTodolistUseCase);
    return new AjouterTodolistController(presenter,usecase);
  }
}


export const AjouterTodolistUseCaseProvider = {
  provide: AjouterTodolistUseCase,
  useFactory: ()=> {
    const repository = inject(ITodolistRepository);
    return new AjouterTodolistUseCase(repository)
  }
}

export const AjouterTodolistPresenterProvider = {
  provide: AjouterTodolistPresenter,
  useFactory: () => new AjouterTodolistPresenter()
}
