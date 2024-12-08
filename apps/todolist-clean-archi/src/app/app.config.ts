import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  DisplayNotesControllerProvider, DisplayNotesPresenterProvider, DisplayNotesUseCaseProvider,
  AddNotePresenterProvider,
  AddNoteUseCaseProvider,
  AddNoteControllerProvider, RemoveNoteUseCaseProvider
} from "./core.config";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    AddNoteControllerProvider,
    AddNoteUseCaseProvider,
    AddNotePresenterProvider,
    DisplayNotesControllerProvider,
    DisplayNotesUseCaseProvider,
    DisplayNotesPresenterProvider,
    RemoveNoteUseCaseProvider
  ],
};
