import { Model, Ref } from 'doko';

export interface List extends Model {
  name: string;
  color?: string;
}

export interface Task extends Model {
  name: string;
  list?: Ref<List>; // Note the Ref here
  completed: boolean;
}
