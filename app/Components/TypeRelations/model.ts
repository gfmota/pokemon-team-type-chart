import { TypeEnum } from '../../model';

export interface TypeRelation {
  type: TypeEnum;
  counter?: number;
  onFocus?: boolean;
  grayscale?: boolean;
}

export interface TypeRelations {
  x4: TypeRelation[];
  x2: TypeRelation[];
  x05: TypeRelation[];
  x025: TypeRelation[];
  x0: TypeRelation[];
}
