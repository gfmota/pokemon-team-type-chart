import { TypeEnum } from '../../model';

export interface TypeRelation {
  type: TypeEnum;
  counter: number;
  onFocus?: boolean;
}
