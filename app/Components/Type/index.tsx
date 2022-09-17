import Image from "next/image";
import React from "react";
import { TYPES_BACKGROUND_COLORS } from "../../constants";
import { TypeStyled } from "../../style";
import { TypeEnum } from "../../types";

type TypeProps = {
  id: TypeEnum,
  selected?: boolean;
  grayscale?: boolean;
}

const Type = ({ id, selected, grayscale }: TypeProps) =>  (
  <TypeStyled backgroundColor={TYPES_BACKGROUND_COLORS[id]} selected={!!selected} grayscale={!!grayscale} >
    <Image src={`/icons/${id}.svg`} width={18} height={18} alt={id as any}/>
  </TypeStyled>
);

export default Type;
