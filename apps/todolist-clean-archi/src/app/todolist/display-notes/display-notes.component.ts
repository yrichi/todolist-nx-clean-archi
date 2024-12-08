import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddNoteComponent} from "../add-notes/add-note.component";
import {
  DisplayNotesController
} from "@todolist-clean-archi/adapter";
import {Observable} from "rxjs";
import {
  DisplayNotePresentationVM
} from "@todolist-clean-archi/adapter";

@Component({
  selector: 'app-notes',
  imports: [CommonModule, AddNoteComponent],
  templateUrl: './display-notes.component.html',
  styleUrl: './display-notes.component.css',
})
export class DisplayNotesComponent {


  $vm: Observable<DisplayNotePresentationVM> = new Observable<DisplayNotePresentationVM>(subscriber => {
    this.displayNotesController.subscribeVM(vm => subscriber.next(vm))
  })


  constructor(private displayNotesController: DisplayNotesController) {
    this.displayNotesController.displayNote()
  }


  supprimerNote(id: string) {
    this.displayNotesController.deleteNote(id)
      .then(() => this.displayNotesController.displayNote())

  }

  refreshNotest() {
    console.log("test reload")
    this.displayNotesController.displayNote()
  }
}
