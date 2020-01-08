import { Injectable } from "@angular/core";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from "@ngrx/data";
import { TodoEntity } from '../todo/todo.entity';

// CRUD operations are handled by @ngrx/data by default. These can be overridden by
// implementing EntityCollectionService and then registering it in the appropriate Module.

// An EntityCollectionService is a facade over the ngrx/data dispatcher and selectors$
// that manages an entity T collection cached in the ngrx store.

// https://ngrx.io/guide/data/entity-collection-service
// https://ngrx.io/guide/data/entity-services
@Injectable({ providedIn: "root" }) 
export class TodoService extends EntityCollectionServiceBase<TodoEntity> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super("Todos", serviceElementsFactory);
  }
}
