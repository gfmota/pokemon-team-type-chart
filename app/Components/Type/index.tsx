import Image from 'next/image';
import React from 'react';
import { TypesBackgroundColors } from '../../constants';
import { TypeStyled } from '../../style';
import { TypeEnum } from '../../types';

type TypeProps = {
  id: TypeEnum;
  selected?: boolean;
  grayscale?: boolean;
};

const Type = ({ id, selected, grayscale }: TypeProps) => (
  <TypeStyled
    backgroundColor={TypesBackgroundColors[id]}
    selected={!!selected}
    grayscale={!!grayscale}
  >
    <Image
      src={`/typeIcons/${id}.svg`}
      width={18}
      height={18}
      alt={id as any}
    />
  </TypeStyled>
);

export default Type;
