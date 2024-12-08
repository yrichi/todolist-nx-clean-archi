import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Observable} from "rxjs";
import {AjouterTodolistController, AjouterTodolistPresenterVM} from "@todolist-clean-archi/adapter";

@Component({
  selector: 'app-add-todolist',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-todolist.component.html',
  styleUrl: './add-todolist.component.css',
})
export class AddTodolistComponent {
  @Output() todoAdded = new EventEmitter<AjouterTodolistPresenterVM>();
  ajoutTodo: FormGroup;
  $vm: Observable<AjouterTodolistPresenterVM> = new Observable<AjouterTodolistPresenterVM>(subscriber =>
    this.ajouterTodolistController.subscribeVM(vm => {
      subscriber.next(vm);
      this.todoAdded?.next(vm)
    }))

  constructor(
    private ajouterTodolistController: AjouterTodolistController
  ) {
    this.ajoutTodo = new FormGroup({
      titre: new FormControl(""),
      valeur: new FormControl(""),
    })
  }

  validerAjoutTodo() {
      this.ajouterTodolistController.ajoutTodolistNote({titre: this.ajoutTodo.value.titre, valeur: this.ajoutTodo.value.valeur})

  }
}
