import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddTodolistComponent} from "../add-todolist/add-todolist.component";
import {
  AfficherTodolistController
} from "@todolist-clean-archi/adapter";
import {Observable} from "rxjs";
import {
  AfficherTodolistsPresentationVM
} from "@todolist-clean-archi/adapter";

@Component({
  selector: 'app-todolist',
  imports: [CommonModule, AddTodolistComponent],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {


  $vm: Observable<AfficherTodolistsPresentationVM> = new Observable<AfficherTodolistsPresentationVM>(subscriber => {
    this.afficherTodolistController.subscribeVM(vm => subscriber.next(vm))
  })


  constructor(private afficherTodolistController: AfficherTodolistController) {
    this.afficherTodolistController.afficherTodolistNote()
  }


  supprimerTodo(id: string | undefined) {

  }

  reloadTodolist() {
    console.log("test reload")
    this.afficherTodolistController.afficherTodolistNote()
  }
}
