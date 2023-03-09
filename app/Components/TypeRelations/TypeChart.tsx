import Image from 'next/image';
import { FlexBox } from '../../style';
import { Type } from '../Type/Type';
import { RELATIONS, UNIQUE_TYPE_RELATION } from './constants';
import { TypeRelations } from './model';
import { StyledTypeCounter } from './style';

interface TypeChartProps {
  typeRelations: TypeRelations;
  simpleTypes?: boolean;
}

export const TypeChart: React.FC<TypeChartProps> = ({
  typeRelations,
  simpleTypes,
}) => {
  const relations = simpleTypes ? UNIQUE_TYPE_RELATION : RELATIONS;

  return (
    <FlexBox justifyContent="space-around">
      {relations.map(({ id, src, alt }) => (
        <div key={`${simpleTypes}:${id}`}>
          <Image src={src} width={64} height={64} alt={alt} />
          {typeRelations[id].map(({ type, counter, onFocus, grayscale }) => (
            <FlexBox key={type} alignItems="flex-end">
              <Type id={type} selected={onFocus} grayscale={grayscale} />
              {counter && <StyledTypeCounter>{counter}</StyledTypeCounter>}
            </FlexBox>
          ))}
        </div>
      ))}
    </FlexBox>
  );
};
