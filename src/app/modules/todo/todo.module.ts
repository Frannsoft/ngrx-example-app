import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoRoutingModule } from "./todo-routing.module";
import { TodoComponent } from "./todo.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, HttpClientModule, TodoRoutingModule]
})
export class TodoModule {}
