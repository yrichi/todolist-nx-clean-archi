import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  AfficherTodolistControllerProvider, AfficherTodolistPresenterProvider, AfficherTodolistUseCaseProvider,
  AjouterTodolistPresenterProvider,
  AjouterTodolistUseCaseProvider,
  AjoutTodolistControllerProvider
} from "./core.config";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    AjoutTodolistControllerProvider,
    AjouterTodolistUseCaseProvider,
    AjouterTodolistPresenterProvider,
    AfficherTodolistControllerProvider,
    AfficherTodolistUseCaseProvider,
    AfficherTodolistPresenterProvider
  ],
};
