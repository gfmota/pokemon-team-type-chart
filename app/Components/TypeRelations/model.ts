import { TypeEnum } from "../../types";

export interface TypeRelation {
  type: TypeEnum,
  counter: number;
  onFocus?: boolean;
}
