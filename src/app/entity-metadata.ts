import { EntityMetadataMap } from "@ngrx/data";

// Properties of our entities we want to set for each Entity
// involved with @ngrx/data (we don't need to include all our entities if we don't want to)
// https://ngrx.io/guide/data/entity-metadata
const entityMetadata: EntityMetadataMap = {
  //'Todos' becomes the entity name
  Todos: {}
};

// By default, Urls for POST/DELETE would be '/todo'. Since our todos api
// uses 'todos' as a segment for this entity type, we set that here. There are 
// other ways to do this 
// https://ngrx.io/guide/data/entity-metadata#pluralizing-the-entity-name
const pluralNames = { Todos: "Todos" };

export const entityConfig = {
  entityMetadata,
  pluralNames
};
