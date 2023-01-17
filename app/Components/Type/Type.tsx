import Image from 'next/image';
import React from 'react';
import { TypesBackgroundColors } from '../../constants';
import { TypeStyled } from './style';
import { TypeEnum } from '../../model';

type TypeProps = {
  id: TypeEnum;
  selected?: boolean;
  grayscale?: boolean;
  size?: number;
};

export const Type = ({ id, selected, grayscale, size }: TypeProps) => (
  <TypeStyled
    backgroundColor={TypesBackgroundColors[id].main}
    selected={!!selected}
    grayscale={!!grayscale}
    size={size}
  >
    <Image
      src={`/typeIcons/${id}.svg`}
      width={18}
      height={18}
      alt={id as any}
    />
  </TypeStyled>
);
