import dynamic from 'next/dynamic';

export const DynamicOverview = dynamic(() =>
  import('./Overview').then((mod) => mod.Overview)
);
