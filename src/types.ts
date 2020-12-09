import { Model } from 'doko';

export interface Example extends Model {
  name: string;
  amount: number;
  done: boolean;
}
