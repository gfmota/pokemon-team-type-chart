import dynamic from 'next/dynamic';
import { OverviewProps } from './Overview';

export const DynamicOverview = dynamic<OverviewProps>(() =>
  import('./Overview').then((mod) => mod.Overview)
);
