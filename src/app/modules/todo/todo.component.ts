import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { TodoService } from "./../services/todo.service";
import { TodoEntity } from './todo.entity';

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent {
  loading$: Observable<boolean>;
  todoList$: Observable<TodoEntity[]>;

  constructor(private todoService: TodoService) {
    this.todoList$ = todoService.entities$;
    this.loading$ = todoService.loading$;
  }

  loadList() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getAll();
  }

  // Changed this from taking a TodoEntity to a description string
  // since the input's value is what is being passed in here.
  add(description: string) {
    const todoEntity = {
      description,
      completed: false
    } as TodoEntity;

    this.todoService.add(todoEntity);
  }

  //This required a change to the api to get working.
  //TodoService extends EntityCollectionServiceBase<TodoEntity> and
  //EntityCollectionServiceBase<T>.delete() takes a param of id:string | number
  //https://ngrx.io/api/data/EntityCollectionDataService

  //To make this change locally in your api, the TodosController.deleteTodo() should look like:
  /*
   * @Delete(':id')
   * deleteTodo(@Param() params) {
   *  this.todosService.deleteTodo(params.id);
   * }
   */
  remove(todo: TodoEntity) {
    this.todoService.delete(todo.id);
  }
}
