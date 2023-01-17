import dynamic from 'next/dynamic';

export const DynamicTypeRelations = dynamic(() =>
  import('./TypeRelations').then((mod) => mod.TypeRelations)
);
