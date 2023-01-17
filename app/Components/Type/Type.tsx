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

export const Type: React.FC<TypeProps> = ({
  id,
  selected,
  grayscale,
  size = 48,
}) => (
  <TypeStyled
    backgroundColor={TypesBackgroundColors[id].main}
    selected={!!selected}
    grayscale={!!grayscale}
    size={size}
  >
    <Image
      src={`/typeIcons/${id}.svg`}
      width={size / 2}
      height={size / 2}
      alt={id as any}
    />
  </TypeStyled>
);
