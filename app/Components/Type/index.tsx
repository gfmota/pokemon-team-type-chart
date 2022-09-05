import Image from "next/image";
import React from "react";
import { TypesBackgroundColors } from "../../constants";
import { TypeLayout } from "../../style";
import { TypeEnum } from "../../types";

type TypeProps = {
  id: TypeEnum,
}

const Type = ({id}: TypeProps) =>  (
  <TypeLayout backgroundColor={TypesBackgroundColors[id]} >
    <Image src={`/icons/${id}.svg`} width={18} height={18} alt={id as any}/>
  </TypeLayout>
);

export default Type;
