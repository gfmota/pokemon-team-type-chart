import Image from 'next/image';
import { RelationKeys } from '../../model';
import { FlexBox } from '../../style';
import { Type } from '../Type/Type';
import { TypeRelations } from './model';
import { StyledTypeCounter } from './style';

const RELATIONS = [
  {
    id: RelationKeys.X4,
    src: '/multipliers/4x.svg',
    alt: "it's super effective",
  },
  {
    id: RelationKeys.X2,
    src: '/multipliers/2x.svg',
    alt: "it's super effective",
  },
  {
    id: RelationKeys.X0,
    src: '/multipliers/0x.svg',
    alt: "it's super effective",
  },
  {
    id: RelationKeys.X05,
    src: '/multipliers/1:2x.svg',
    alt: "it's not very effective",
  },
  {
    id: RelationKeys.X025,
    src: '/multipliers/1:4x.svg',
    alt: "it's not very effective",
  },
];

interface TypeChartProps {
  typeRelations: TypeRelations;
}

export const TypeChart: React.FC<TypeChartProps> = ({ typeRelations }) => {
  console.log({ typeRelations });
  return (
    <>
      {RELATIONS.map(({ id, src, alt }) => (
        <div key={id}>
          <Image src={src} width={64} height={64} alt={alt} />{' '}
          {typeRelations[id].map(({ type, counter, onFocus, grayscale }) => (
            <FlexBox key={type} alignItems="flex-end">
              <Type id={type} selected={onFocus} grayscale={grayscale} />
              {counter && <StyledTypeCounter>{counter}</StyledTypeCounter>}
            </FlexBox>
          ))}
        </div>
      ))}
    </>
  );
};
