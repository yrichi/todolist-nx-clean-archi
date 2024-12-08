import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Observable} from "rxjs";
import {AddNoteController, addNotePresenterVM} from "@todolist-clean-archi/adapter";

@Component({
  selector: 'app-add-todolist',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css',
})
export class AddNoteComponent {
  @Output() noteAdded = new EventEmitter<void>();
  addNoteForm: FormGroup;
  $vm: Observable<addNotePresenterVM> = new Observable<addNotePresenterVM>(subscriber =>
    this.addNoteController.subscribeVM(vm => {
      subscriber.next(vm);
      this.noteAdded?.next()
    }))

  constructor(
    private addNoteController: AddNoteController
  ) {
    this.addNoteForm = new FormGroup({
      titre: new FormControl(""),
      valeur: new FormControl(""),
    })
  }

  validerAjoutTodo() {
      this.addNoteController.execute({titre: this.addNoteForm.value.titre, valeur: this.addNoteForm.value.valeur})

  }
}
