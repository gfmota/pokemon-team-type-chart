import dynamic from 'next/dynamic';
import Loading from '../Loading';

export const DynamicTypeRelations = dynamic<{}>(() =>
  import('./TypeRelations').then((mod) => mod.TypeRelations), {
    loading: Loading,
  }
);
